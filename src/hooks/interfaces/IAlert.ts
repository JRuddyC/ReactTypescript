export default interface IAlert {
    status: boolean
    message: string
    variant?:  "success" | "danger"
}