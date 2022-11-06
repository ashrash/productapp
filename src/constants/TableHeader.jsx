import * as React from 'react';
import Button from '@mui/material/Button';

// Table configuration for MUI table
const getColumns = (onEdit, onDelete) => [
  { field: 'name', headerName: 'Name', width: 250 },
  {
    field: 'price', headerName: 'Price', width: 200, sortable: true,
  },
  {
    field: 'Actions',
    headerName: 'Actions',
    width: 300,
    renderCell: function button(params) {
      const onEditClick = () => {
        const { row } = params;
        onEdit(row);
      };

      const onDeleteClick = () => {
        const { row } = params;
        onDelete(row);
      };
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '15rem',
        }}
        >
          <Button onClick={onEditClick} variant="contained">Edit</Button>
          <Button onClick={onDeleteClick} color="error" variant="contained">Delete</Button>
        </div>
      );
    },
  },
];

export default getColumns;
