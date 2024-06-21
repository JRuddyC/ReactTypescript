import { useCallback, useState } from "react";

interface ValidationRule {
    rule: (value: any) => boolean;
    message: string
}

interface ValidationErrors {
    [key: string]: string
}

const useValidation = () => {
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validate = useCallback((name: string, value: any, rules: ValidationRule[]) => {
        for (let i = 0; i < rules.length; i++) {
            const { rule, message } = rules[i];
            if (!rule(value)) {
                setErrors(prevErrors => ({ ...prevErrors, [name]: message }));
                return false;
            }
        }
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
        return true;
    }, []);

    return { errors, validate, setErrors }
}

export default useValidation