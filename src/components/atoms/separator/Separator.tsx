import React from 'react'
import IProps from './type/IProps'
import './styles.scss'

const Separator: React.FC<IProps> = (props: IProps) => {
    const { direction } = props
    return (
        <div className={`${direction} separator`} />
    )
}

export default Separator