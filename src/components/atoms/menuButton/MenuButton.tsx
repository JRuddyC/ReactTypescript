import React from 'react'
import IProps from './type/IProps'
import './styles.scss'

const MenuButton: React.FC<IProps> = (props: IProps) => {
    const { onClick, status } = props
    return (
        <div className={`menu-button ${status ? 'active' : ''}`} onClick={onClick}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
        </div>
    )
}

export default MenuButton