import IProps from './type/IProps'
import './styles.scss'
const Button: React.FC<IProps> = (props: IProps) => {
    const { name, children, variant, rounded, outline, type, onClick } = props
    return (
        <button name={name} onClick={onClick} className={`btn ${variant ? 'btn-' + variant : ''} ${outline ? 'btn-outline-' + outline : ''} ${rounded ? 'rounded' : ''}`} type={type}>
            {children}
        </button>
    )
}

export default Button