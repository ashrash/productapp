/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import * as R from 'ramda';
import Op from '../../constants/operations';
import './Popup.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Popup({
  title, open, handleClose, data, handleSubmit,
}) {
  const [nameField, setName] = React.useState('');
  const [priceField, setPrice] = React.useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  React.useEffect(() => {
    const { name, price } = data;
    if (open) {
      setName(name);
      setPrice(price);
    }
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Box className="title">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
          </Box>
          {title !== Op.DELETE ? (
            <>
              <Box className="text-fields">
                <TextField
                  label="Name"
                  id="outlined-size-small"
                  size="small"
                  defaultValue={nameField}
                  onChange={handleNameChange}
                />
                <TextField
                  label="Price"
                  id="outlined-size-small"
                  size="small"
                  defaultValue={priceField}
                  onChange={handlePriceChange}
                />
              </Box>
            </>
          ) : (
            <>
              <Typography className="delete" variant="h6" component="h2">
                Are you sure to delete this data?
              </Typography>
            </>
          )}
          <Button
            className="submit"
            variant="outlined"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            color={R.pathOr('primary', ['modalConfig', title, 'color'], Op)}
            variant="contained"
            onClick={() => handleSubmit(title, {
              _id: data._id,
              name: nameField,
              price: priceField,
            })}
          >
            {R.pathOr('Submit', ['modalConfig', title, 'text'], Op)}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

Popup.defaultProps = {
  data: {},
};

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }),
};
