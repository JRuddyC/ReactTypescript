export default interface IPerson {
    id: number | null
    name: string | null
    surname: string | null
    ci: string | null
    age: number | null
    phone: string | null
    status?: 'idle' | 'loading' | 'succeeded' | 'failed';
}