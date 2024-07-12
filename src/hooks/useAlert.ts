import { useState } from "react"
import IAlert from "./interfaces/IAlert"

const initialValues: IAlert = {
    status: false,
    message: "no message",
    variant: "success"
}

const useAlert = () => {
    const [alert, setAlert] = useState<IAlert>(initialValues)

    const handleChangeAlert = (data: IAlert) => {
        setAlert(data)
    }

    const handleResetAlert = () => {
        setTimeout(() => {
            setAlert(prevAlert => ({
                ...prevAlert,
                status: false
            }));
        }, 3000)
    }

    return { alert, handleChangeAlert, handleResetAlert }
}

export default useAlert