import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'

const UserIcon: React.FC<IProps> = (props: IProps) => {
    const { src, onClick, size } = props
    return (
        <div
            onClick={onClick}
            className={classNames(Styles['user-icon'], Styles['icon-' + size])}
        >
            <img
                className={Styles['img-' + size]}
                src={src}
                alt="user-icon" />
        </div>
    )
}

export default UserIcon