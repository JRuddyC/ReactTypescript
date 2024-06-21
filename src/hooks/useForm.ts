import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import useValidation from "./useValidation";
import IFormValues from "./interfaces/IFormValues";
import IValidationRule from "./interfaces/IValidationRule";
import IValidationError from "./interfaces/IValidationError";

const useForm = (initialValues: IFormValues, validationRules: { [key: string]: IValidationRule[] }) => {
    const [values, setValues] = useState<IFormValues>(initialValues)
    const { errors, validate, setErrors } = useValidation()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
        setErrors({})
    }

    const handleSubmit = useCallback(
        (callback: () => void) => (event: FormEvent) => {
            event.preventDefault();
            let valid = true;
            for (const key in validationRules) {
                if (!validate(key, values[key], validationRules[key])) {
                    valid = false;
                }
            }
            if (valid) {
                callback();
            }
        },
        [values, validate, validationRules]
    );

    const handleSetError = useCallback((validationError: IValidationError) => {
        const { key, msg } = validationError
        return setErrors({ ...errors, [key]: msg })
    }, [])

    return { values, errors, handleChange, handleSubmit, handleSetError }
}

export default useForm