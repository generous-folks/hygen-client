import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import { FileSystemNavigator } from './tree.component';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  dialog: {
    root: {
      maxHeight: 'auto',
      height: 'inherit',
      minWidth: '400px',
    },
  },
});

function SimpleDialog(props) {
  const { onClose, open } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  //   const handleListItemClick = value => {
  //     onClose(value);
  //   };

  return (
    <Dialog
      classes={{ root: classes.dialog.route }}
      maxWidth="lg"
      onClose={handleClose}
      open={open}
    >
      <FileSystemNavigator />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={open ? handleClose : handleClickOpen}>
        Open file
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
