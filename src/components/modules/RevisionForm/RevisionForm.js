const form = [
    [
        { label: 'Revision #', name: 'revisionNumber', formControl: 'input', isReadOnly: true, portion: 12 }
    ],
    [
        { label: 'Date of Entry', name: 'dateEntry', isReadOnly: true, portion: 12 }
    ],
    [
        { label: 'Date Approved', name: 'dateApproved', isReadOnly: true, portion: 12 }
    ],
    [
        {
            label: 'Reason for Revision',
            name: 'reasonForRevision',
            formControl: 'select',
            portion: 12,
            options: [
                { value: 'Suspension of Work', label: 'Suspension of Work' },
                { value: 'Extension of Contract Time(Time Extension)', label: 'Extension of Contract Time(Time Extension)' },
                { value: 'Extension of Contract Time(Variant Order with Time Extension)', label: 'Extension of Contract Time(Variant Order with Time Extension)' },
                { value: 'Variation Order without Time Extension', label: 'Variation Order without Time Extension' },
                { value: 'To reflect approved original implementation Schedule', label: 'To reflect approved original implementation Schedule' },
                { value: 'Compliance to Agency Targets', label: 'Compliance to Agency Targets' }
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
                { value: 'For Updating', label: 'For Updating' },
                { value: 'Pending Receipt of Required Document\'s', label: 'Pending Receipt of Required Document\'s' }
            ]
        }
    ]
];

export default form;
