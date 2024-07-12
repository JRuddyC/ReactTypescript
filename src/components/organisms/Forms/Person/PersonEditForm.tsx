import React from 'react'
import Form from '../../../atoms/form/Form'
import FormField from '../../../molecules/formField/FormField'
import Button from '../../../atoms/button/Button'
import useForm from '../../../../hooks/useForm'
import api from '../../../../services/axios'
import Alert from '../../../molecules/alert/Alert'
import validationRules from './utils/ValidationRules'
import useAlert from '../../../../hooks/useAlert'
import IAlert from '../../../../hooks/interfaces/IAlert'
import IProps from './types/IProps'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../store'
import { setOnePerson } from '../../../../store/slices/peopleSlice'
import IPerson from '../../../../store/interfaces/IPerson'

const succesAlert: IAlert = {
    status: true,
    message: "actualizacion exitosa",
    variant: "success"
}
const dangerAlert: IAlert = {
    status: true,
    message: "No se pudo actualizar",
    variant: "danger"
}

const PersonEditForm: React.FC<IProps> = (props: IProps) => {
    const { id, name, surname, ci, age, phone } = props.item
    const initialValues = {
        id, name, surname, ci, age, phone
    }
    const { errors, values, handleChange, handleSubmit, handleSetError } = useForm(
        initialValues,
        validationRules
    )

    const { alert, handleChangeAlert, handleResetAlert } = useAlert()

    const dispatch = useDispatch<AppDispatch>()

    const handleUpdate = async () => {
        try {
            await api.put('person/' + id, values)
            dispatch(setOnePerson({ id: id as number, person: values as IPerson }))
            handleChangeAlert(succesAlert)
        } catch (error: any) {
            const { status, data } = error
            if (status === 400) {
                handleSetError(data.data)
            }
            handleChangeAlert(dangerAlert)
        } finally {
            handleResetAlert()
        }
    }

    return (
        <Form onSubmit={handleSubmit(handleUpdate)}>
            <FormField value={values.name} validationError={errors.name} id='name' label='Nombres' placeholder='Ingrese su nombre' type='text' onChange={handleChange} />
            <FormField value={values.surname} validationError={errors.surname} id='surname' label='Apellidos' placeholder='Ingrese sus apellidos' type='text' onChange={handleChange} />
            <FormField value={values.ci} validationError={errors.ci} id='ci' label='Cédula de identidad' placeholder='Ingrese su cédula de identidad' type='text' onChange={handleChange} />
            <FormField value={values.age} validationError={errors.age} id='age' label='Edad' placeholder='Ingrese su edad' type='number' onChange={handleChange} />
            <FormField value={values.phone} validationError={errors.phone} id='phone' label='Teléfono' placeholder='Ingrese su teléfono' type='text' onChange={handleChange} />
            <Button type='submit'>Actualizar</Button>
            <Alert message={alert.message} variant={alert.variant} color='white' isOpen={alert.status} />
        </Form>
    )
}

export default PersonEditForm