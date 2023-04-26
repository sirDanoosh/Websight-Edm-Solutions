import React from 'react'
import useLoginBox from './useLoginBox'

import './index.css'
import SignUpForm from '../SignUpForm'

const LoginBox: React.FC<{}> = () => {
    const { openForm,closeForm,isFormOpen } = useLoginBox()
    
    return <div className='login-box'>
        <div className={`login-box__btn-wrapper ${isFormOpen ? 'login-box__btn-wrapper--hidden' : ''}`}><button type='button' className='login-box__btn sign-in-btn sign-in-btn--disabled'>
            <span>Sign Up</span>
        </button>
        <button type='button' onClick={openForm} className='login-box__btn sign-up-btn'>
            <span>Log In</span>
            </button>
            </div>
        {isFormOpen && <SignUpForm closeForm={closeForm} />}
    </div>
}

export default LoginBox