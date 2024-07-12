import { isGreaterThan0, isNumber, isRequired, validationMessage } from "../../../../../hooks/validationRules";

const validationRules = {
    name: [
        { rule: isRequired, message: validationMessage.isRequired }
    ],
    surname: [
        { rule: isRequired, message: validationMessage.isRequired }
    ],
    ci: [
        { rule: isRequired, message: validationMessage.isRequired }
    ],
    age: [
        { rule: isRequired, message: validationMessage.isRequired },
        { rule: isGreaterThan0, message: validationMessage.isGreaterThan0 },
        { rule: isNumber, message: validationMessage.isNumber },
    ],
    phone: [
        { rule: isRequired, message: validationMessage.isRequired }
    ]
}

export default validationRules