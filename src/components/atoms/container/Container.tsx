import React from 'react'
import IProps from './types/IProps'
import './styles.scss'

const Container: React.FC<IProps> = (props: IProps) => {
    const { children } = props
    return (
        <div className='main-container'>
            {children}
        </div>
    )
}

export default Container