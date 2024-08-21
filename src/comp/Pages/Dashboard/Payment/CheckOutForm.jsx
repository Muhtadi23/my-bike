import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCarts from "../../../../hooks/useCarts";
import useAuth from "../../../../hooks/useAuth";

const CheckOutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const [transactionId, setTransactionId] = useState('')
    const axiosSecure = useAxiosSecure()
    const [cart] = useCarts()
    const { user } = useAuth()

    // const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    // useEffect(() => {
    //     axiosSecure.post('/create-payment-intent', { price: totalPrice })
    //         .then(res => {
    //             console.log(res.data.clientSecret)
    //             setClientSecret(res.data.clientSecret)
    //         })
    // }, [axiosSecure, totalPrice])

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction Id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-500"> your Transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutForm;