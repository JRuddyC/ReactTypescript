interface IRole {
    id: number | null
    nameRole: string | null
}

export default interface IUserRole {
    roles: IRole[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}