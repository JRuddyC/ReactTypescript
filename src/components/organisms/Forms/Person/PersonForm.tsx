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
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../store'
import { addPerson } from '../../../../store/slices/peopleSlice'
import IPerson from '../../../../store/interfaces/IPerson'

const succesAlert: IAlert = {
    status: true,
    message: "Registro de persona exitoso",
    variant: "success"
}
const dangerAlert: IAlert = {
    status: true,
    message: "No se pudo registrar a la persona",
    variant: "danger"
}

const initialValues = {
    name: '', surname: '', ci: '', age: '', phone: ''
}

const PersonForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { errors, values, handleChange, handleSubmit, handleSetError, handleResetForm } = useForm(
        initialValues,
        validationRules
    )

    const { alert, handleChangeAlert, handleResetAlert } = useAlert()


    const handleRegister = async () => {
        try {
            const response = await api.post('person', values)
            const { id, name, surname, ci, age, phone } = response.data.data
            const person: IPerson = { id, name, surname, ci, age, phone }
            dispatch(addPerson(person))
            handleChangeAlert(succesAlert)
            handleResetForm()
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
        <Form onSubmit={handleSubmit(handleRegister)}>
            <FormField value={values.name} validationError={errors.name} id='name' label='Nombres' placeholder='Ingrese su nombre' type='text' onChange={handleChange} />
            <FormField value={values.surname} validationError={errors.surname} id='surname' label='Apellidos' placeholder='Ingrese sus apellidos' type='text' onChange={handleChange} />
            <FormField value={values.ci} validationError={errors.ci} id='ci' label='Cédula de identidad' placeholder='Ingrese su cédula de identidad' type='text' onChange={handleChange} />
            <FormField value={values.age} validationError={errors.age} id='age' label='Edad' placeholder='Ingrese su edad' type='number' onChange={handleChange} />
            <FormField value={values.phone} validationError={errors.phone} id='phone' label='Teléfono' placeholder='Ingrese su teléfono' type='text' onChange={handleChange} />
            <Button type='submit'>Registrar</Button>
            <Alert message={alert.message} variant={alert.variant} color='white' isOpen={alert.status} />
        </Form>
    )
}

export default PersonForm