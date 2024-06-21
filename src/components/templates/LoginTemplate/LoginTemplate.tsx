import React from 'react'
import LoginForm from '../../organisms/loginForm/LoginForm'
import './styles.scss'

const LoginTemplate: React.FC = () => {
    return (
        <div className='login-section'>
            <LoginForm />
        </div>
    )
}

export default LoginTemplate