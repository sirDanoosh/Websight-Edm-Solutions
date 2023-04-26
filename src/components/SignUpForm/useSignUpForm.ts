/* eslint-disable no-useless-escape */
import { ChangeEvent, FormEvent, useState } from "react"

export interface ISignUpForm {
    closeForm: () => void
}

const useSignUpForm = (props: ISignUpForm) => {
    const [isPassValid, setIsPassValid] = useState<boolean>(false)
    const [tagValidationList, setTagValidationList] = useState<{
        min8: boolean,
        min1u: boolean,
        min1l: boolean,
        min1s: boolean
    }>(
        {
        min8: false,
        min1u: false,
        min1l: false,
        min1s: false
        }
    )

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;

        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const has8Characters = password.length >= 8;
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

        setTagValidationList({
            min8: has8Characters,
            min1l: hasLower,
            min1s: hasSpecial,
            min1u: hasUpper
        })

        if(hasLower && hasUpper && has8Characters && hasSpecial) {
            setIsPassValid(true)
        } else {
            setIsPassValid(false)
        }
    }

    const navigateToTable = (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isPassValid) {
            // @ts-expect-error
            if (e?.target[1]?.value === 'Websight@2023') {
                window.location.href = "/table?editor"
            } else {
                window.location.href = "/table"
            }
        }
    }
    
    return {
        ...props,
        isPassValid,
        tagValidationList,
        onPasswordChange,
        navigateToTable
    }
}

export default useSignUpForm