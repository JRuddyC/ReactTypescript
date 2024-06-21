export default interface IValidationRule {
    rule: (value: any) => boolean;
    message: string;
}