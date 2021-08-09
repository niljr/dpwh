const form = [
    [
        { label: 'Revision #', name: 'revision_number', formControl: 'input', portion: 12 }
    ],
    [
        { label: 'Date of Entry', name: 'date_entry', isReadOnly: true, portion: 12 }
    ],
    [
        { label: 'Date Approved', name: 'date_approved', isReadOnly: true, portion: 12 }
    ],
    [
        {
            label: 'Reason for Revision',
            name: 'reason_revision',
            formControl: 'select',
            portion: 12,
            options: [
                { value: 1, label: 'Suspension of Work' },
                { value: 2, label: 'Extension of Contract Time(Time Extension)' },
                { value: 3, label: 'Extension of Contract Time(Variant Order with Time Extension)' },
                { value: 4, label: 'Variation Order without Time Extension' },
                { value: 5, label: 'To reflect approved original implementation Schedule' },
                { value: 6, label: 'Compliance to Agency Targets' }
            ]
        }
    ],
    [
        {
            label: 'Status',
            name: 'status',
            formControl: 'select',
            portion: 12,
            options: [
                { value: 1, label: 'For Updating' },
                { value: 2, label: 'Pending Receipt of Required Document\'s' }
            ]
        }
    ]
];

export default form;
