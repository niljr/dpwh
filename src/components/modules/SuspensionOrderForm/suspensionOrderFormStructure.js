const form = [
    [
        { label: 'Suspension Order No.', name: 'orderNumber', formControl: 'input', isReadOnly: true, portion: 6 },
        {
            label: 'Status',
            name: 'status',
            formControl: 'select',
            portion: 6,
            options: [
                { value: 'For Approval', label: 'For Approval' },
                { value: 'Approved', label: 'Approved' },
                { value: 'Disapproved', label: 'Disapproved' }
            ]
        }
    ],
    [
        {
            label: 'Reason of Suspension',
            name: 'reasonForSuspension',
            placeholder: 'Select',
            formControl: 'select',
            portion: 6,
            options: [
                { value: 'Due to Rainy/Unworkable Days', label: 'Due to Rainy/Unworkable Days' },
                { value: 'Due to Road Right of Way Problem', label: 'Due to Road Right of Way Problem' },
                { value: 'Due to Peace and Order', label: 'Due to Peace and Order' },
                { value: 'Due to Delay in Payment of Contractor\'s Claim for Progress Billing\'s', label: 'Due to Delay in Payment of Contractor\'s Claim for Progress Billing\'s' },
                { value: 'Due to Failure of the Government to Provide Necessary Construction Plans and /or Drawings', label: 'Due to Failure of the Government to Provide Necessary Construction Plans and /or Drawings' },
                { value: 'Due to Non-Availability of Construction Materials', label: 'Due to Non-Availability of Construction Materials' },
                { value: 'Due to Effect of Force Majeure', label: 'Due to Effect of Force Majeure' },
                { value: 'Due to Inaccessibility to Project', label: 'Due to Inaccessibility to Project' },
                { value: 'Due to Obstruction', label: 'Due to Obstruction' },
                { value: 'Due to Absence of MMDA Permit/Clearance for Road Repair/Excavation/Traffic Clearance', label: 'Due to Absence of MMDA Permit/Clearance for Road Repair/Excavation/Traffic Clearance' },
                { value: 'Due to Absence of LGU Permit/Clearance / Homeowners Association Clearance/Permit', label: 'Due to Absence of LGU Permit/Clearance / Homeowners Association Clearance/Permit' },
                { value: 'Due to DENR Clearance/Permit to Cut/Remove Trees within the Road-Right-of-Way', label: 'Due to DENR Clearance/Permit to Cut/Remove Trees within the Road-Right-of-Way' },
                { value: 'Delayed Delivery of imported Materials due to Truck Ban and/or Port Congestion', label: 'Delayed Delivery of imported Materials due to Truck Ban and/or Port Congestion' },
                { value: 'Due to Revision of Plan/Design', label: 'Due to Revision of Plan/Design' },
                { value: 'Epidemic(s)', label: 'Epidemic(s)' },
                { value: 'Due to Meritorious Circumstances', label: 'Due to Meritorious Circumstances' },
                { value: 'Due to Non-release or Insufficient release of funds for contracts with MYOA or MYCA only', label: 'Due to Non-release or Insufficient release of funds for contracts with MYOA or MYCA only' }
            ]
        },
        { label: 'Date Approved', name: 'dateApproved', placeholder: '', formControl: 'datePicker', isReadOnly: true, portion: 6 }
    ],
    [
        { label: 'Suspension Effectivity Date', name: 'suspensionEffectivityDate', formControl: 'datePicker', placeholder: 'Select', portion: 6 },
        {
            label: 'Approval Level',
            name: 'approvalLevel',
            formControl: 'select',
            portion: 6,
            options: [
                { value: '1', label: 'Level 1' },
                { value: '2', label: 'Level 2' },
                { value: '3', label: 'Level 3' },
                { value: '4', label: 'Level 4' },
                { value: '5', label: 'Level 5' }
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
                { value: 'Total', label: 'Total' },
                { value: 'Partial', label: 'Partial' }
            ]
        },
        { label: 'Approved By', name: 'approvedBy', placeholder: '', isReadOnly: true, portion: 6 }
    ],
    [
        { label: 'Cumulative C.D. Suspended to Date', name: 'suspendedToDate', placeholder: '', inputType: 'number', portion: 6, validationConfig: { min: 1 } },
        { label: 'Designation', name: 'designation', placeholder: '', isReadOnly: true, portion: 6 }
    ],
    [
        { label: 'Description', name: 'description', formControl: 'textarea', placeholder: '', portion: 6 }
    ]
];

export default form;
