import React from 'react'
import FormField from '../../molecules/formField/FormField'
import Button from '../../atoms/button/Button'
import './styles.scss'
import Title from '../../atoms/title/Title'
import Subtitle from '../../atoms/subtitle/Subtitle'
import { useNavigate } from 'react-router-dom'
import axios from '../../../services/axios'
import { isRequired, validationMessage } from '../../../hooks/validationRules'
import useForm from '../../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/slices/userSlice'
import { setToken } from '../../../store/slices/tokenSlice'

const validationRules = {
    username: [
        { rule: isRequired, message: validationMessage.isRequired }
    ],
    password: [
        { rule: isRequired, message: validationMessage.isRequired }
    ]
}

const LoginForm: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { errors, values, handleChange, handleSubmit, handleSetError } = useForm(
        { username: '', password: '' },
        validationRules
    )

    const handleLogin = async () => {
        try {
            const response = await axios.post('authentication', values)
            const { data, token } = response.data
            dispatch(setUser(data.user))
            dispatch(setToken(token))
            navigate('/home')
        } catch (error: any) {
            const { status, data } = error
            if (status === 400)
                return handleSetError(data.data)
            navigate('/oops')
        }
    }

    return (
        <form autoComplete='off' className='form' onSubmit={handleSubmit(handleLogin)}>
            <div className='login-form'>
                <Title align='center' text='Welcome to My Application' />
                <Subtitle text='Please log in to continue' align='left' />
                <FormField validationError={errors.username} id='username' type='text' label='user' onChange={handleChange} />
                <FormField validationError={errors.password} id='password' type='password' label='password' onChange={handleChange} />
                <Button variant='primary' rounded type='submit'>login</Button>
            </div>
        </form>
    )
}

export default LoginForm