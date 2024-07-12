interface IItem {
    [key: string]: any;
}

export default interface IProps {
    children?: IItem[]
    variant?: 'primary' | 'secondary' | 'dark' | 'light'
    options?: boolean
    menuOptions?: any
}