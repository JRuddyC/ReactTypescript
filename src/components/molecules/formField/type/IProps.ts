import { ChangeEvent } from "react";

export default interface IProps {
    id?: string;
    label?: string;
    type?: 'text' | 'number' | 'password';
    value?: string | number;
    placeholder?: string;
    validationError?: string | null;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}