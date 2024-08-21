import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe('pk_test_51PFuVZRqf7kNrGXGJVRAiBoVlyKKGBOoFACtHfhkbPxJ281xKKhuennm11UC1h1o6AMmeFAwCJogR9sbbbJJudGL00TO6bjYeb')

const Payment = () => {

    return (
        <div>
            <h2 className="text-center text-5xl">Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;