import React from 'react'
import {useAuth} from '../../utils/Auth/useAuth';

const AuthComponet: React.FC = () => {
    const auth = useAuth();
    console.log(auth)
    return (
        <nav>
            <div>
                <h1>Auth</h1>
                <button>Dumb button</button>
                {auth.user ? (
                    <div>
                        {/*<Link to="/account">Account ({auth.user.email})</Link>*/}
                        <button onClick={() => auth.signout()}>Signout</button>
                    </div>
                ) : (
                    // <Link to="/signin">Signin</Link>
                    <button>No user</button>
                )}
            </div>
        </nav>
    )
};

export default AuthComponet;