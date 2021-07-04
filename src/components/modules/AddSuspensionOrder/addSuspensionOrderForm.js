const form = [
    [
        { label: 'Reason of Suspension', name: 'reason_of_suspension', placeholder: 'Select', portion: 6 },
        {
            label: 'Status',
            name: 'status',
            formControl: 'select',
            portion: 6,
            options: [
                { value: 1, label: 'For Approval' },
                { value: 2, label: 'Approved' },
                { value: 3, label: 'Disapproved' }
            ]
        }
    ],
    [
        { label: 'Suspension Effectivity Date', name: 'suspension_effectivity_date', placeholder: 'Select', portion: 6 },
        {
            label: 'Approval Level',
            name: 'approval_level',
            formControl: 'select',
            portion: 6,
            options: [
                { value: 1, label: 'Level 1' },
                { value: 2, label: 'Level 2' },
                { value: 3, label: 'Level 3' },
                { value: 4, label: 'Level 4' },
                { value: 5, label: 'Level 5' }
            ]
        }
    ],
    [
        {
            label: 'Extent',
            name: 'extent',
            formControl: 'select',
            portion: 6,
            options: [
                { value: 1, label: 'Total' },
                { value: 1, label: 'Partial' }
            ]
        },
        { label: 'Cumulative C.D. Suspended to Date', name: 'cumulative_suspended_to_date', placeholder: '', portion: 6 }
    ],
    [
        { label: 'Description', name: 'description', formControl: 'textarea', placeholder: '', portion: 6 }
    ]
];

export default form;
