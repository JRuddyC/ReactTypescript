import React from 'react'
import IProps from './type/IProps'
import './styles.scss'

const UserIcon: React.FC<IProps> = (props: IProps) => {
    const { src, onClick, size } = props
    return (
        <div onClick={onClick} className={`user-icon icon-${size}`}>
            <img className={`img-${size}`} src={src} alt="user-icon" />
        </div>
    )
}

export default UserIcon