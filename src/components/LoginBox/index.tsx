import React from 'react'
import useLoginBox from './useLoginBox'

import './index.css'

const LoginBox: React.FC<{}> = () => {
    const { toggleLogin } = useLoginBox()
    
    return <div className='login-box'>
        <button type='button' onClick={toggleLogin} className='login-box__toggle sign-in-btn'>
            <span>SignIn</span>
        </button>
        <button type='button' onClick={toggleLogin} className='login-box__toggle sign-up-btn'>
            <span>SignUp</span>
        </button>
    </div>
}

export default LoginBox