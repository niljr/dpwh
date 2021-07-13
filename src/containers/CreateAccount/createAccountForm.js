const form = [[
    { label: 'Name', placeholder: 'Name', name: 'name', portion: 12 }
], [
    { label: 'Username', placeholder: 'Username', name: 'username', portion: 12 }
], [
    { label: 'Position', placeholder: 'Position', name: 'position', portion: 12 }
], [
    {
        label: 'Role',
        name: 'role',
        portion: 12,
        formControl: 'select',
        options: [
            { value: 'engineer', label: 'Engineer' },
            { value: 'admin', label: 'Admin' }
        ]
    }
], [
    { label: 'Password', placeholder: 'Password', name: 'password', portion: 12, inputType: 'password' }
], [
    { label: 'Confirm Password', placeholder: 'Confirm Password', name: 'confirm_password', portion: 12, inputType: 'password' }
]];

export default form;
