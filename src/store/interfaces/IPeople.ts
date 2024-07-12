import IPerson from "./IPerson";

export default interface IPeople {
    rows: IPerson[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    count: number
}