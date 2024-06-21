import React from 'react'
import IProps from './type/IProps'
import Button from '../../atoms/button/Button'
import './styles.scss'

const IconButton: React.FC<IProps> = (props: IProps) => {
    const { name, onClick, children, variant, rounded, outline, type, text } = props
    return (
        <div className='icon-button'>
            <Button name={name} onClick={onClick} variant={variant} rounded={rounded} outline={outline} type={type} >
                <div className='icon'>
                    {children}
                    <div className='text-icon'>
                        {text}
                    </div>
                </div>
            </Button>

        </div>

    )
}

export default IconButton