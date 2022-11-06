/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

export default function DataTable({ rows, columns }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row._id}
      />
    </div>
  );
}

DataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
