const form = [
    [
        {
            label: 'Approval Level',
            name: 'approval_level',
            formControl: 'select',
            portion: 6,
            options: [
                { label: 'Level 1', value: '1' },
                { label: 'Level 2', value: '2' },
                { label: 'Level 3', value: '3' },
                { label: 'Level 4', value: '4' },
                { label: 'Level 5', value: '5' }
            ]
        },
        {
            label: 'Reason for Time Extension',
            name: 'reason_for_extension',
            formControl: 'select',
            portion: 6,
            options: [
                { label: 'Due to Rainy/Unworkable Days', value: 'Due to Rainy/Unworkable Days' },
                { label: 'Due to Road Right of Way Problem', value: 'Due to Road Right of Way Problem' },
                { label: 'Due to Peace and Order', value: 'Due to Peace and Order' },
                { label: 'Due to Delay in Payment of Contractor\'s Claim for Progress Billing/s', value: 'Due to Delay in Payment of Contractor\'s Claim for Progress Billing/s' },
                { label: 'Due to Failure of the Government to Provide Necessary Contruction Plans and/or Drawings', value: 'Due to Failure of the Government to Provide Necessary Contruction Plans and/or Drawings' },
                { label: 'Due to Non-Availability of Construction Materials', value: 'Due to Non-Availability of Construction Materials' },
                { label: 'Due to Effect of Force Majeure', value: 'Due to Effect of Force Majeure' },
                { label: 'Due to Inaccessibility to Project', value: 'Due to Inaccessibility to Project' },
                { label: 'Due to Obstruction', value: 'Due to Obstruction' },
                { label: 'Due to Absence of MMDA Permit/Clearance for Road Repair/Excavation/Traffic Clearance', value: 'Due to Absence of MMDA Permit/Clearance for Road Repair/Excavation/Traffic Clearance' },
                { label: 'Due to Absence of LGU Permit/Clearance / Homeowners Association Clearance/Permit', value: 'Due to Absence of LGU Permit/Clearance / Homeowners Association Clearance/Permit' },
                { label: 'Due to DENR Clearance/Permit to Cut/Remove Trees within the Road-Right-of-Way', value: 'Due to DENR Clearance/Permit to Cut/Remove Trees within the Road-Right-of-Way' },
                { label: 'Delayed Delivery of Imported Materials due to Truck Ban and/or Port Congestion', value: 'Delayed Delivery of Imported Materials due to Truck Ban and/or Port Congestion' },
                { label: 'Due to Revision of Plan/Design', value: 'Due to Revision of Plan/Design' },
                { label: 'Epidemic(s)', value: 'Epidemic(s)' },
                { label: 'Due to Meritorious Cirmcumstances', value: 'Due to Meritorious Cirmcumstances' },
                { label: 'Due to Non-release or Insufficient release of funds for contracts with MYOA or MYCA only', value: 'Due to Non-release or Insufficient release of funds for contracts with MYOA or MYCA only' }
            ]
        }
    ],
    [
        {
            label: 'Approved By',
            name: 'approved_by',
            formControl: 'select',
            portion: 6,
            options: [
                { label: 'One', value: 'One' },
                { label: 'Two', value: 'Two' },
                { label: 'Three', value: 'Three' }
            ]
        },
        { label: 'Duration (CDs)', name: 'duration', portion: 6, isReadOnly: true, inputType: 'number' }
    ],
    [
        {
            label: 'Designation',
            name: 'designation',
            formControl: 'select',
            portion: 6,
            options: [
                { label: 'One', value: 'One' },
                { label: 'Two', value: 'Two' },
                { label: 'Three', value: 'Three' }
            ]
        },
        { label: 'Additonal Duration (CDs)', name: 'additional_duration', portion: 6, inputType: 'number' }
    ],
    [
        { label: 'Date Approved', name: 'date_approved', portion: 6, isReadOnly: true },
        {
            label: 'Status',
            name: 'status',
            formControl: 'select',
            portion: 6,
            options: [
                { label: 'One', value: 'One' },
                { label: 'Two', value: 'Two' },
                { label: 'Three', value: 'Three' }
            ]
        }
    ],
    [
        { label: 'In lieu of Suspension Order', name: 'with_suspension_order', formControl: 'checkbox', portion: 6 }
    ]
];

export default form;
