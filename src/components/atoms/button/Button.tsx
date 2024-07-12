import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'
const Button: React.FC<IProps> = (props: IProps) => {
    const { name, children, variant = 'primary', rounded = false, outlined = false, type, onClick } = props
    return (
        <button
            name={name}
            onClick={onClick}
            className={
                classNames(
                    Styles.btn,
                    Styles['btn-' + variant],
                    { [Styles.rounded]: rounded },
                    { [Styles['btn-outline-' + variant]]: outlined }
                )
            }
            type={type}>
            {children}
        </button>
    )
}

export default Button