import React from 'react'
import LoginForm from '../../organisms/loginForm/LoginForm'
import Styles from './Styles.module.scss'

const LoginTemplate: React.FC = () => {
    return (
        <div className={Styles['login-section']}>
            <LoginForm />
        </div>
    )
}

export default LoginTemplate