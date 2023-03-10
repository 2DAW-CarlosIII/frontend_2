// in src/components/react-admin/users.tsx
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EmailField, TextInput } from 'react-admin';

// const userFilters = [
//   <TextInput source="q" label="Search" alwaysOn />
// ];

export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
        </Datagrid>
      )}
    </List>
  );
};
