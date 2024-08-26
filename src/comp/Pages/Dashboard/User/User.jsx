import useAuth from "../../../../hooks/useAuth";
import ava from "../../../../assets/ava.jpg"

const User = () => {

    const { user } = useAuth()
    console.log(user)

    return (
        <div className="p-4">
            <h2 className="text-3xl font-semibold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="p-2 text-2xl">
                {
                    user.photoURL ? <img src={user.photoURL} alt="" /> 
                        :
                        
                        <img className="w-1/4" src={ava} alt="" />
                }

                <h2>Name: {user.displayName}</h2>
                <h2>Email: {user.email}</h2>

            </div>
        </div>
    );
};

export default User;