import React, { useRef, useState } from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'
import Subtitle from '../../atoms/subtitle/Subtitle'
import Button from '../../atoms/button/Button'
import classNames from 'classnames'
import Separator from '../../atoms/separator/Separator'
import IconCLOSE from '../../../assets/icons/IconCLOSE'
import CloseButton from '../../atoms/CloseButton/CloseButton'
import { CSSTransition } from 'react-transition-group'

const Modal: React.FC<IProps> = (props: IProps) => {
    const { title, children, textButton} = props
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const nodeRef = useRef(null);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Button onClick={handleIsOpen} >{textButton}</Button>
            <CSSTransition
                nodeRef={nodeRef}
                in={isOpen}
                timeout={300}
                classNames={{
                    enter: Styles['modal-enter'],
                    enterActive: Styles['modal-active'],
                    exit: Styles['modal-exit'],
                    exitActive: Styles['modal-exit-active']
                }}
                unmountOnExit
            >
                <div
                    ref={nodeRef}
                    className={classNames(Styles.overlay)}
                >
                    <div className={Styles.modal}>
                        <div className={Styles['modal-header']}>
                            <Subtitle text={title} align='center' />
                            <CloseButton onClick={handleIsOpen}><IconCLOSE /></CloseButton>
                        </div>
                        <Separator direction='horizontal' />
                        <div className={Styles.modalBody}>
                            {children}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default Modal