import { useLocation } from 'react-router-dom'
import Subtitle from '../../atoms/subtitle/Subtitle'
import Styles from './Styles.module.scss'
const Breadcrumb = () => {
    const { pathname } = useLocation()
    const arrayPath = pathname.slice(1).split('/')

    return (
        <div className={Styles.breadcrumb}>
            {
                arrayPath.reduce((acc: JSX.Element[], item, index) => {
                    if (index !== 0) {
                        acc.push(<span key={`sep-${index}`} className={Styles.separator}></span>);
                    }
                    acc.push(<Subtitle key={index} text={item} />);
                    return acc;
                }, [])
            }
        </div>
    )
}

export default Breadcrumb