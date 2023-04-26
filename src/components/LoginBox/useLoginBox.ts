import { useState } from "react"

const useLoginBox = () => {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    
    function openForm() {
        setIsFormOpen(true)
    }

    function closeForm() {
        setIsFormOpen(false)
    }

    return {
        openForm,
        closeForm,
        isFormOpen
    }
}

export default useLoginBox