import React from 'react';
import { Form as BootstrapForm, InputGroup, Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import type { Input } from '../../../types';
import { clearModalContent } from '../../../redux/modules/modalEvent';
import 'react-datepicker/dist/react-datepicker.css';
import './form.scss';

type Props = {
    className?: string,
    data?: any,
    structure: Array<Array<Input>>,
    onSubmitForm: (data: Object) => void,
    schema: any,
    isShowLabels?: boolean,
    formSize?: 'sm' | 'md' | 'lg',

    // submit button
    submitLabel?: string,
    iconSubmit?: React$Element,
    isProcessing?: boolean,

    // close button
    withCloseButton?: boolean,
    iconClose?: React$Element,
    closeLabel?: string
}

export default function Form({
    className = '', data, structure, onSubmitForm, schema, isShowLabels = true, formSize = 'sm', submitLabel = 'Submit',
    isProcessing, withCloseButton, closeLabel = 'Close', iconSubmit, iconClose
}: Props): React$Element<any> {
    const dispatch = useDispatch();
    const { register, control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(isProcessing, errors);

    const onSubmit = (data: Object) => {
        onSubmitForm(data);
    };

    const handleClose = () => {
        dispatch(clearModalContent());
    };

    const renderControl = (control: any) => {
        console.log(control.formControl);

        // CHECKBOX && RADIO
        if (/checkbox|radio|switch/.test(control.formControl)) {
            return (
                <BootstrapForm.Check
                    type={control.formControl}
                    id={control.name}
                    label={control.label}
                    readOnly={control.isReadOnly}
                    defaultValue={(data && data.hasOwnProperty(control.name)) ? data[control.name] : null}
                    {...register(control.name, control.validationConfig)} />
            );
        }

        // INPUT, TEXTAREA, SELECT
        return (
            <BootstrapForm.Control
                size={formSize}
                as={control.formControl || 'input'}
                type={control.inputType || 'text'}
                placeholder={control.placeholder}
                readOnly={control.isReadOnly}
                defaultValue={(data && data.hasOwnProperty(control.name)) ? data[control.name] : null}
                {...register(control.name, control.validationConfig)}
                isInvalid={(errors[control.name])}
                custom={control.formControl === 'select'}>
                {control.formControl === 'select'
                    ? <>
                        <option value=''>-- Select --</option>
                        {control.options && control.options.map((option: any, o: number) => <option value={option.value} key={o}>{option.label}</option>)}
                    </>
                    : null}
            </BootstrapForm.Control>
        );
    };

    return (
        <form className={`app-form ${className}`} onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            {structure.map((row, r) =>
                <BootstrapForm.Row key={r} className='app-form__row'>
                    {row.map((col, c) =>
                        <BootstrapForm.Group as={Col} md={col.portion} key={c}>
                            {(isShowLabels && !(/checkbox|radio/.test(col.formControl))) && (
                                <BootstrapForm.Label>{col.label}</BootstrapForm.Label>
                            )}

                            {/datePicker|select/.test(col.formControl) // DATEPICKER, SELECT
                                ? <div>
                                    <Controller
                                        control={control}
                                        name={col.name}
                                        defaultValue={data && data.hasOwnProperty(col.name) ? data[col.name] : null}
                                        render={({ field: { onChange, value }, fieldState: { error } }) =>
                                            col.formControl === 'datePicker'
                                                ? <DatePicker
                                                    className={`size-${formSize}${error ? ' is-invalid' : ''}`}
                                                    placeholderText={col.placeholder}
                                                    onChange={(date) => onChange(date)}
                                                    selected={value} />
                                                : <Select
                                                    classNamePrefix='app-form__select'
                                                    className={`app-form__select size-${formSize}${error ? ' is-invalid' : ''}`}
                                                    options={col.options}
                                                    defaultValue={col.options.find(c => c.value === value)}
                                                    onChange={val => onChange(val.value)} />} />
                                </div>
                                : (col.append || col.prepend) // WITH INPUT GROUP
                                    ? <InputGroup size={formSize}>
                                        {col.prepend && (
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>{col.prepend}</InputGroup.Text>
                                            </InputGroup.Prepend>
                                        )}
                                        {renderControl(col)}

                                        {col.append && (
                                            <InputGroup.Append>
                                                <InputGroup.Text>{col.append}</InputGroup.Text>
                                            </InputGroup.Append>
                                        )}
                                    </InputGroup>
                                    : renderControl(col)
                            }

                            <ErrorMessage
                                errors={errors}
                                name={col.name}
                                render={({ message }) => <Typography color='color-danger' variant='size-11'>{message}</Typography>} />
                        </BootstrapForm.Group>
                    )}
                </BootstrapForm.Row>
            )}

            <div className={withCloseButton ? 'app-form__controls' : ''}>
                <Button
                    label={submitLabel}
                    type='submit'
                    variant={withCloseButton ? 'outline-light' : 'primary'}
                    className='app-form__submit'
                    isProcessing={isProcessing}
                    icon={withCloseButton ? iconSubmit || FaCheck : null} />
                {withCloseButton && (
                    <Button
                        label={closeLabel}
                        variant='outline-light'
                        icon={iconClose || FaTimes}
                        onClick={handleClose} />
                )}
            </div>
        </form>
    );
}
