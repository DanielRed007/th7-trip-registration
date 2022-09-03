import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { PreflightOrderPdf } from "./PreflightOrderPdf";
import { PDFViewer } from '@react-pdf/renderer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  display: "flex",
  flexDirection: "column",
  alignContent: "stretch",
  justifyContent: "center",
  alignItems: "center"
};
export interface CustomModalProps{
    open: boolean;
    handleOpenModal?(): void;
    handleCloseModal?(): void;
    pdfData: any;
}

export const CustomModal = ({ open, handleOpenModal, handleCloseModal, pdfData }: CustomModalProps) => {
    
  return (
    <div>
      <Modal
        open={open}
        onClose={() => console.log("Closed!!")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" style={{paddingTop: "1rem", fontFamily: "'Poiret One', cursive"}} variant="h4">
                <strong>Do you want to Submit your Preflight Request?</strong>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{paddingBottom: "1rem", fontFamily: "'Poiret One', cursive"}} variant="h5">
                <strong>Click Send to Process the request</strong>
            </Typography>

            {pdfData && 
              <PDFViewer showToolbar={false} style={{width: "600px", height: "400px"}}>
                <PreflightOrderPdf data={pdfData} />
              </PDFViewer>
            }

            <Grid item xs={12} style={{paddingTop: "1rem"}}>
                <Button variant="outlined" sx={{marginRight: "1rem"}} onClick={() => handleCloseModal()} >Close</Button>
                <Button variant="contained" onClick={() => console.log("Descargar!!!")} >Send</Button>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}