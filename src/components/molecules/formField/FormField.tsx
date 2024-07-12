import React from 'react'
import IProps from './type/IProps'
import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'
import ValidationError from '../../atoms/validationError/ValidationError'
import Styles from './Styles.module.scss'
import classNames from 'classnames'

const FormField: React.FC<IProps> = (props: IProps) => {
    const { id, label, placeholder, onChange, type, value, validationError } = props

    return (
        <div
            className={classNames(Styles['form-field'], { [Styles['input-error']]: validationError })}
        >
            <Label variant={validationError ? 'danger' : null} text={label} htmlFor={id} />
            <Input values={value} variant={validationError ? 'danger' : null} id={id} type={type} placeholder={placeholder} onChange={onChange} />
            <ValidationError error={validationError} />
        </div>
    )
}

export default FormField