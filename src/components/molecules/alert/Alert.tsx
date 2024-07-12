import React, { useRef } from 'react'
import Styles from './Styles.module.scss'
import { CSSTransition } from 'react-transition-group'
import Subtitle from '../../atoms/subtitle/Subtitle'
import IProps from './type/IProps'
import classNames from 'classnames'

const Alert: React.FC<IProps> = (props: IProps) => {
    const { isOpen, message, variant, color } = props
    const nodeRef = useRef(null)
    return (
        <>
            <CSSTransition
                nodeRef={nodeRef}
                in={isOpen}
                timeout={500}
                classNames={{
                    enter: Styles['alert-enter'],
                    enterActive: Styles['alert-active'],
                    exit: Styles['alert-exit'],
                    exitActive: Styles['alert-exit-active']
                }}
                unmountOnExit
            >
                <div ref={nodeRef}
                    className={
                        classNames(
                            Styles.alert,
                            variant ? Styles['alert-' + variant] : null
                        )
                    }>
                    <Subtitle color={color} variant={variant} text={message} />
                </div>
            </CSSTransition>
        </>

    )
}

export default Alert