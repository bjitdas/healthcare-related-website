import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleUserName = e => {
        setUserName(e.target.value)
    };

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(userName, email, password)
        if (password.length < 6) {
            setError('*password should be at least 6 characters')
            return;
        }
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('*at least one upper case')
            return;
        }

        isLogin ? processLogin(email, password) : registerNewUser(email, password);
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }



    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    //observe user state change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
            .catch(() => {
                setError('')
            })
    }


    return {
        userName,
        error,
        user,
        isLogin,
        handleUserName,
        handleEmail,
        handlePassword,
        toggleLogin,
        handleRegistration,
        signInUsingGoogle,
        logOut
    }

};

export default useFirebase;