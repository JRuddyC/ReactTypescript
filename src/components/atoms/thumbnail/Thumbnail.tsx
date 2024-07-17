import React from 'react'
import IProps from './types/IProps'

const Thumbnail: React.FC<IProps> = (props: IProps) => {
    const { src, imgRef } = props

    return (
        <img ref={imgRef} src={src} alt="thumbnail" />
    )
}

export default Thumbnail