// in src/components/react-admin/adminAppBar.js
import * as React from 'react';
import { AppBar } from 'react-admin';

import Navigation from 'components/Layouts/Navigation'
import { useAuth } from 'hooks/auth'

export const AdminAppBar = (props) => {
    const { user } = useAuth({ middleware: 'auth' })    
    return (
        <Navigation user={user} />
    )
}
