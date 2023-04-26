import React from 'react'
import useSignUpForm, { ISignUpForm } from './useSignUpForm'

import './index.css'

const SignUpForm: React.FC<ISignUpForm> = (props) => {
    const {isPassValid, closeForm, tagValidationList, onPasswordChange, navigateToTable} = useSignUpForm(props)

    return (
        <form onSubmit={navigateToTable}>
            <div className="sign-up-modal">
            <input name="userName" id="userName" placeholder='User name'/>
            <input name="password" id="password" type='password' placeholder='Password' onChange={onPasswordChange} />
            <div className="tag-wrapper">
            <span className={`tag ${tagValidationList.min8 ? 'tag--approved': ''}`}>
                at least 8 characters
            </span>
            <span className={`tag ${tagValidationList.min1u ? 'tag--approved': ''}`}>
                at least 1 <b><i>uppercase</i></b> character
            </span>
            <span className={`tag ${tagValidationList.min1l ? 'tag--approved': ''}`}>
                at least 1 <b><i>lowercase</i></b> character
            </span>
            <span className={`tag ${tagValidationList.min1s ? 'tag--approved': ''}`}>
                at least 1 <b><i>special</i></b> character
            </span>
            </div>
            
            <div className='sign-up-modal__btn-wrapper'>
                <button type='button' className='cancel-btn modal-btn' onClick={closeForm}>
                    <span>Cancel</span>
                </button>
                <button type='submit' className={`sign-up-btn modal-btn ${isPassValid ? '' : 'sign-up-btn--disabled'}`}>
                    <span>Log In</span>
                </button>
            </div>
    </div >
        </form>
    )
}

export default SignUpForm