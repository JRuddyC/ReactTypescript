export default interface IProps {
    title?: string
    columns: any
    rows: any[]
    variant?: "primary" | "secondary" | "dark" | "light"
    options?: boolean
    menuOptions?: React.ReactNode
    size?: "small" | "medium" | "large"
}