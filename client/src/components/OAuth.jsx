import React from 'react'
import { Button } from 'flowbite-react'
import { AiFillGoogleCircle } from 'react-icons/ai';
import { signInWithGooglePopup } from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const dispatch = useDispatch();
    const handleGoogleSignIn = async () => {
        try {
            const responseFromGoogle = await signInWithGooglePopup();
            const res = await fetch('/api/auth/google',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: responseFromGoogle.user.displayName,
                    email: responseFromGoogle.user.email,
                    googlePhotoUrl: responseFromGoogle.user.photoURL,
                }),
            });
            const data = await res.json();
            if(res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleSignIn}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}
