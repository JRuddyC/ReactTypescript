export const isRequired = (value: any) => value !== undefined && value !== null && value !== ''
export const isNumber = (value: any) => new RegExp(/^[0-9]*$/).test(value)
export const isGreaterThan0 = (value: number) => value >= 0

export const validationMessage = {
    isRequired: 'El campo es requerido',
    isNumber: 'El valor debe ser numérico',
    isGreaterThan0: 'El campo debe ser mayor que 0'
}