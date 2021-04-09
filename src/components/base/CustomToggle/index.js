import React from 'react';
import './custom-toggle.scss';

const CustomToggle = React.forwardRef(({ children, onClick, className }, ref) => (
    <div ref={ref} onClick={onClick} className={className}>
        {children}
    </div>
));

export default CustomToggle;
