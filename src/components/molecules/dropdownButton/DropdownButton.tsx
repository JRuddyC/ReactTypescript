import React, { useRef, useState } from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'
import classNames from 'classnames'
import IconButton from '../iconButton/IconButton'
import IconArrowDown from '../../../assets/icons/IconArrowDown'
const DropdownButton: React.FC<IProps> = (props: IProps) => {
    const { text, children, variant = 'primary', rounded = false, outlined = false, right = false } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef(null)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div ref={menuRef} className={Styles.dropdown}>
            <IconButton onClick={handleIsOpen} text={text} variant={variant} rounded={rounded} outline={outlined} right={right}><IconArrowDown /></IconButton>
            {
                isOpen && (
                    <div className={classNames(Styles['dropdown-content'], { [Styles['dropdown-open']]: isOpen })}>
                        {children}
                    </div>
                )
            }
        </div>
    )
}

export default DropdownButton