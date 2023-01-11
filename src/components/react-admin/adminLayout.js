// in src/components/react-admin/adminLayout.js
import { Layout } from 'react-admin';

import { AdminAppBar } from './adminAppBar';

export const AdminLayout = props => <Layout {...props} appBar={AdminAppBar} />;
