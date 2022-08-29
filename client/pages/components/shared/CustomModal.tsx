import React, { useState, MouseEventHandler } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px'
};

export interface CustomModalProps{
    open: boolean;
    handleOpenModal?(): void;
    handleCloseModal?(): void;
}

export const CustomModal = ({ open, handleOpenModal, handleCloseModal }: CustomModalProps) => {
    
  return (
    <div>
      <Modal
        open={open}
        onClose={() => console.log("Closed!!")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Do you want to Submit your Preflight Request?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Click Send to Process the request
            </Typography>

            <Grid item xs={12}>
                <Button variant="outlined" sx={{marginRight: "1rem"}} onClick={() => handleCloseModal()} >Close</Button>
                <Button variant="contained" onClick={() => handleOpenModal()} >Send</Button>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}