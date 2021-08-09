const form = [
    [
        {
            label: 'Reason of Suspension',
            name: 'reason_of_suspension',
            placeholder: 'Select',
            formControl: 'select',
            portion: 6,
            options: [
                { value: 1, label: 'Due to Rainy/Unworkable Days' },
                { value: 2, label: 'Due to Road Right of Way Problem' },
                { value: 3, label: 'Due to Peace and Order' },
                { value: 4, label: 'Due to Delay in Payment of Contractor\'s Claim for Progress Billing\'s' },
                { value: 5, label: 'Due to Failure of the Government to Provide Necessary Construction Plans and /or Drawings' },
                { value: 6, label: 'Due to Non-Availability of Construction Materials' },
                { value: 7, label: 'Due to Effect of Force Majeure' },
                { value: 8, label: 'Due to Inaccessibility to Project' },
                { value: 9, label: 'Due to Obstruction' },
                { value: 10, label: 'Due to Absence of MMDA Permit/Clearance for Road Repair/Excavation/Traffic Clearance' },
                { value: 11, label: 'Due to Absence of LGU Permit/Clearance / Homeowners Association Clearance/Permit' },
                { value: 12, label: 'Due to DENR Clearance/Permit to Cut/Remove Trees within the Road-Right-of-Way' },
                { value: 13, label: 'Delayed Delivery of imported Materials due to Truck Ban and/or Port Congestion' },
                { value: 14, label: 'Due to Revision of Plan/Design' },
                { value: 15, label: 'Epidemic(s)' },
                { value: 16, label: 'Due to Meritorious Circumstances' },
                { value: 17, label: 'Due to Non-release or Insufficient release of funds for contracts with MYOA or MYCA only' }
            ]
        },
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
        { label: 'Suspension Effectivity Date', name: 'suspension_effectivity_date', formControl: 'datePicker', placeholder: 'Select', portion: 6 },
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
        { label: 'Date Approved', name: 'date_approved', placeholder: '', isReadOnly: true, portion: 6 },
        { label: 'Approved By', name: 'approved_by', placeholder: '', isReadOnly: true, portion: 6 }
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
        { label: 'Designation', name: 'designation', placeholder: '', isReadOnly: true, portion: 6 },
        { label: 'Description', name: 'description', formControl: 'textarea', placeholder: '', portion: 6 }
    ]
];

export default form;
