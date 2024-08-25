import useAuth from "../../../../hooks/useAuth";


const User = () => {

    const { user } = useAuth()

    return (
        <div className="p-4">
            <h2 className="text-3xl font-semibold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default User;