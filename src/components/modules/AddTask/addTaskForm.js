const form = [
    [
        { label: 'Project Engineer', name: 'project_engineer', placeholder: 'Name', portion: 6 },
        { label: 'Contract Effectivity Date', name: 'effectivity_date', formControl: 'datePicker', portion: 3, inputType: 'date' },
        { label: 'Contract Expiry Date', name: 'expiry_date', formControl: 'datePicker', portion: 3, inputType: 'date' }
    ],
    [
        { label: 'Project ID', name: 'project_id', portion: 6 },
        { label: 'Contractor Name', name: 'contractor_name', portion: 6 }
    ],
    [
        { label: 'Project Component ID', name: 'component_id', portion: 6 },
        { label: 'Contract Cost', name: 'cost', prepend: 'PhP', portion: 6, inputType: 'number' }
    ],
    [
        {
            label: 'Type of Project',
            name: 'type_of_project',
            formControl: 'select',
            portion: 6,
            options: [
                { label: 'One', value: 1 },
                { label: 'Two', value: 2 },
                { label: 'Three', value: 3 }
            ]
        },
        { label: 'Duration (CDs)', name: 'duration', portion: 2, validationConfig: { valueAsNumber: true } },
        {
            label: 'Municipality',
            name: 'municipality',
            formControl: 'select',
            portion: 4,
            options: [
                { label: 'One', value: 1 },
                { label: 'Two', value: 2 },
                { label: 'Three', value: 3 }
            ]
        }
    ],
    [
        { label: 'Contract Name', name: 'contract_name', formControl: 'textarea', portion: 6 }
    ]
];

export default form;
