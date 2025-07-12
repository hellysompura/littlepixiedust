// components/MuiLink.jsx
import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function CustomMuiLink({ to, children, ...props }) {
    return (
        <MuiLink
            component={RouterLink}
            to={to}
            underline="none"
            color="inherit"
            {...props}
        >
            {children}
        </MuiLink>
    );
}
