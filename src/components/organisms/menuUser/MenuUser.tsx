import React, { MouseEvent } from 'react'
import Styles from './Styles.module.scss'
import Button from '../../atoms/button/Button'
import Separator from '../../atoms/separator/Separator'
import IProps from './type/Iprops'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetToken } from '../../../store/slices/tokenSlice'
import { resetUser } from '../../../store/slices/userSlice'
import { resetPerson } from '../../../store/slices/personSlice'
import classNames from 'classnames'

const MenuUser: React.FC<IProps> = (props: IProps) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { status } = props
    const handleNavigate = (event: MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget
        navigate(`/${name}`, { replace: true })
    }
    const handleLogOut = () => {
        navigate('/')
        dispatch(resetToken())
        dispatch(resetUser())
        dispatch(resetPerson())
    }
    return (
        <div
            className={classNames(Styles['menu-user'], { [Styles['active-menu']]: status })}
        >
            <Button name='profile' onClick={handleNavigate} rounded variant='transparent' type='button'>Profile</Button>
            <Separator direction='horizontal' />
            <Button name='settings' onClick={handleNavigate} rounded variant='transparent' type='button'>Settings</Button>
            <Separator direction='horizontal' />
            <Button name='logout' onClick={handleLogOut} rounded variant='transparent' type='button'>Logout</Button>
        </div>
    )
}

export default MenuUser