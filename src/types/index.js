// @flow

// Typography
export type TypographyVariant = 'size-40' | 'size-34' | 'size-26' | 'size-24' | 'size-22' | 'size-20' | 'size-18' | 'size-16' | 'size-14' | 'size-12' | 'size-11';
export type Color = 'color-blue' | 'color-dark' | 'color-light' | 'color-danger';
export type Weight = 'light' | 'regular' | 'semi-bold' | 'bold';

// Button
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger' | 'light' | 'dark' | 'link' |
    'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-info' | 'outline-danger' | 'outline-light' | 'outline-dark';

// ModalContainer
export type ModalSize = 'sm' | 'md' | 'lg';

// Collapsible sidebar menu
export type Menu = {
    label: string,
    onClick?: Function,
    icon: any,
    subMenu?: Array<{
        key: string,
        label: string,
        onClick?: Function
    }>
}

// Searh Options
export type SearchOption = {
    title: string,
    key: string
};

// Form input
export type Input = {
    label: string,
    name: string,
    inputType?: 'text' | 'password' | 'number' | 'datetime' | 'datetime-local' | 'date' | 'month' | 'time' | 'week' | 'email' | 'url' | 'search' | 'tel' | 'color',
    formControl?: 'input' | 'textarea' | 'select' | 'datePicker',
    placeholder?: string,
    portion: number,
    options?: Array<{
        value: string | number,
        label: string
    }>,
    prepend?: string,
    append?: string,
    isReadOnly?: boolean
}
