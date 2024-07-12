export default interface IProps {
    variant?: "default"|"primary" | "secondary" | "dark" | "light"
    children?: React.ReactNode
    size: "small" | "medium" | "larges"
}