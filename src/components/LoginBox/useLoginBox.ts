import { useState } from "react"

const useLoginBox = () => {
    const [isLoginBoxOpen, setIsLoginBoxOpen] = useState<boolean>(false)
    
    function toggleLogin() {
        if(isLoginBoxOpen) {
            setIsLoginBoxOpen(false)
        } else {
            setIsLoginBoxOpen(true)
        }
    }

    return {
        toggleLogin
    }
}

export default useLoginBox