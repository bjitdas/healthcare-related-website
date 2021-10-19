import React from 'react';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {

    const { isLogin, error, handleRegistration, handleUserName, handleEmail, handlePassword, signInUsingGoogle, toggleLogin } = useAuth();

    return (
        <div className="mx-auto m-5 w-75">
            <h2 className="text-center text-primary mb-4">Please {isLogin ? "Log in" : "Register"}</h2>
            <form onSubmit={handleRegistration}>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleUserName} type="text" className="form-control" id="inputName2" placeholder="your name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" placeholder="your email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" placeholder="your password" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Alredy Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="text-danger">{error}</div>
                <br />
                <button type="submit" className="btn btn-primary">{isLogin ? 'Log in' : 'Register'}</button>
            </form>
            <br />
            <div>-----------or-----------</div>
            <br />
            <div>
                <h4>Log in with your social account</h4>

                <button onClick={signInUsingGoogle} className="btn btn-warning m-3 p-2">Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;