import React from 'react'
import IProps from './type/IProps'
import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'
import ValidationError from '../../atoms/validationError/ValidationError'
import './styles.scss'

const FormField: React.FC<IProps> = (props: IProps) => {
    const { id, label, placeholder, onChange, type, validationError } = props

    return (
        <div className={`form-field ${validationError ? 'input-error' : ''}`}>
            <Label variant={validationError ? 'danger' : null} text={label} htmlFor={id} />
            <Input variant={validationError ? 'danger' : null} id={id} type={type} placeholder={placeholder} onChange={onChange} />
            <ValidationError error={validationError} />
        </div>
    )
}

export default FormField