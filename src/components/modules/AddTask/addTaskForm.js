const form = [
    [
        {
            label: 'Project Engineer',
            name: 'projectEngineerId',
            placeholder: 'Name',
            portion: 6,
            formControl: 'select',
            options: []
        },
        { label: 'Contract Effectivity Date', name: 'effectivityDate', formControl: 'datePicker', portion: 3, inputType: 'date' },
        { label: 'Contract Expiry Date', name: 'expiryDate', formControl: 'datePicker', portion: 3, inputType: 'date' }
    ],
    [
        { label: 'Project ID', name: 'projectId', portion: 6 },
        { label: 'Contractor Name', name: 'contractorName', portion: 6 }
    ],
    [
        { label: 'Project Component ID', name: 'componentId', portion: 6 },
        { label: 'Contract Cost', name: 'cost', prepend: 'PhP', portion: 6, inputType: 'number' }
    ],
    [
        {
            label: 'Type of Project',
            name: 'typeOfProject',
            formControl: 'select',
            portion: 6,
            options: [
                { label: 'One', value: 'One' },
                { label: 'Two', value: 'Two' },
                { label: 'Three', value: 'Three' }
            ]
        },
        { label: 'Duration (CDs)', name: 'duration', portion: 2, inputType: 'number' },
        {
            label: 'Municipality',
            name: 'municipality',
            formControl: 'select',
            portion: 4,
            options: [
                { label: 'One', value: 'One' },
                { label: 'Two', value: 'Two' },
                { label: 'Three', value: 'Three' }
            ]
        }
    ],
    [
        { label: 'Contract Name', name: 'contractName', formControl: 'textarea', portion: 6 }
    ]
];

export default form;
