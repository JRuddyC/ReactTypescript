import React from 'react'
import IProps from './type/IProps'
import classNames from 'classnames'
import Styles from './Styles.module.scss'

const CloseButton: React.FC<IProps> = (props: IProps) => {
    const { rounded = false, children, onClick } = props
    return (
        <button
            onClick={onClick}
            className={classNames(Styles['btn-icon'], { [Styles.rounded]: rounded })}
        >
            {children}
        </button>
    )
}

export default CloseButton