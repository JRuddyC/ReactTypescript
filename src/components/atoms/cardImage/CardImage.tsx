import React, { useEffect, useRef, useState } from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import ColorThief from '../../../../node_modules/colorthief/dist/color-thief.mjs';
import Thumbnail from '../thumbnail/Thumbnail';

const CardImage: React.FC<IProps> = (props: IProps) => {
    const { srcImage } = props
    const [colors, setColors] = useState<[]>([])
    const imgRef = useRef<HTMLImageElement | null>(null)
    const colorThief = new ColorThief();

    useEffect(() => {
        const img = imgRef.current;

        if (img) {

            const handleLoad = () => {
                const color = colorThief.getColor(img);
                setColors(color);
            }

            if (img.complete) {
                handleLoad();
            } else {
                img.addEventListener('load', handleLoad);
                return () => img.removeEventListener('load', handleLoad);
            }
        }
    }, [srcImage])

    return (
        <div className={Styles["card-image"]}
            style={{
                background: `linear-gradient(to bottom right,rgb(${colors.join(',')}) 5%,rgb(${colors.join(',')},0.3) 75%, rgb(${colors.join(',')}) 100% )`
            }}
        >
            <Thumbnail imgRef={imgRef} src={srcImage} />
        </div>
    )
}

export default CardImage