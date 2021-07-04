import React from 'react';
import { Form as BootstrapForm, InputGroup, Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import type { Input } from '../../../types';
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
    submitLabel?: string,
    isProcessing?: boolean
}

export default function Form({
    className = '', data, structure, onSubmitForm, schema, isShowLabels = true, formSize, submitLabel = 'Submit',
    isProcessing
}: Props): React$Element<any> {
    const { register, control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: Object) => {
        onSubmitForm(data);
    };

    console.log(errors);

    const renderInvalidFeedback = (name: string, label: string) =>
        (errors[name] && errors[name].message)
            ? <BootstrapForm.Control.Feedback type='invalid' className='text-left'>
                {errors[name].message.replace(`"${name}"`, `"${label}"`)}
                {/* {label} invalid */}
            </BootstrapForm.Control.Feedback>
            : null;

    const renderControl = (control: any) => {
        console.log(control.name, data[control.name]);

        return (
            <>
                <BootstrapForm.Control
                    size={formSize}
                    as={control.formControl || 'input'}
                    type={control.inputType || 'text'}
                    value={data[`${control.name}`]}
                    placeholder={control.placeholder}
                    defaultValue={data.hasOwnProperty(control.name) ? data[control.name] : null}
                    {...register(control.name, control.validationConfig)}
                    isInvalid={(errors[control.name])}>
                    {control.formControl === 'select'
                        ? <>
                            <option disabled={true}>-- Select --</option>
                            {control.options && control.options.map((option: any, o: number) => <option value={option.value} key={o}>{option.label}</option>)}
                        </>
                        : null}
                </BootstrapForm.Control>
                {(!control.append && !control.prepend) && (
                    renderInvalidFeedback(control.name, control.label)
                )}
            </>
        );
    };

    return (
        <form className={`app-form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            {structure.map((row, r) =>
                <BootstrapForm.Row key={r} className='app-form__row'>
                    {row.map((col, c) =>
                        <BootstrapForm.Group as={Col} md={col.portion} key={c}>
                            {isShowLabels &&
                                <BootstrapForm.Label>{col.label}</BootstrapForm.Label>
                            }

                            {col.formControl === 'datePicker'
                                ? <div>
                                    <Controller
                                        control={control}
                                        name={col.name}
                                        render={({ field }) => (
                                            <DatePicker
                                                placeholderText={col.placeholder}
                                                onChange={(date) => field.onChange(date)}
                                                selected={field.value} />
                                        )} />
                                    {renderInvalidFeedback(col.name, col.label)}
                                </div>
                                : (col.append || col.prepend)
                                    ? <InputGroup size='sm'>
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
                                        {renderInvalidFeedback(col.name, col.label)}
                                    </InputGroup>
                                    : renderControl(col)
                            }
                            {/* <BootstrapForm.Control.Feedback tooltip>Looks good!</BootstrapForm.Control.Feedback> */}
                        </BootstrapForm.Group>
                    )}
                </BootstrapForm.Row>
            )}
            <Button
                label={submitLabel}
                type='submit'
                className='app-form__submit'
                isProcessing={isProcessing} />
        </form>
    );
}
