import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextInput } from "./components/shared/TextInput";
import { InputDropdown } from "./components/shared/InputDropdown";
import { DateInput } from "./components/shared/DateInput";
import { RadioInput } from "./components/shared/RadioInput";
import { CustomModal } from "./components/shared/CustomModal";

interface IFormInput {
  firstName: string;
  lastName: string;
  typeOfDocument: string;
  documentNumber: number;
  dateOfBirth: string;
  gender: string;
  email: string;
  address: string;
  countryOfResidence: string;
  mobile: string;
  comments: string
}

const defaultValues = {
  firstName: "",
  lastName: "",
  typeOfDocument: "",
  documentNumber: 0,
  dateOfBirth: "",
  gender: "",
  email: "",
  address: "",
  countryOfResidence: "",
  mobile: "",
  comments: ""
};

function Register() {
  const [formStep, setFormStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [pdfData, setPdfData] = useState(null);
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch, formState } = methods;

  const onSubmit = (data: any) => {
    verifyFormSubmission(data);
  };

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const previousFormStep = () => setFormStep((currentStep) => currentStep - 1);
  
  const verifyFormSubmission = (data) => {
    setPdfData(data);
    setOpenModal(true);
  }

  const dropdownOptions = [
    {
      label: "Passport",
      value: "passport",
    },
    {
      label: "Document Id",
      value: "documentId",
    },
  ];

  const genderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#C8C8C8",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ height: '100vh' }}>
          <Typography style={{paddingTop: "3rem", fontFamily: "'Poiret One', cursive"}} variant="h3" component="div" gutterBottom>
            Customer Preflight Registration
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>

            <Accordion sx={{padding: "1rem"}} expanded={formStep === 0}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Basic Information
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextInput 
                      name="firstName" 
                      control={control} 
                      label="First Name"
                      type="text"
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput 
                      name="lastName" 
                      control={control} 
                      label="Last Name"
                      type="text"
                      required={true}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputDropdown 
                      name="typeOfDocument" 
                      control={control} 
                      label="Type of Document"
                      options={dropdownOptions}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput 
                      name="documentNumber" 
                      control={control} 
                      label="Document Number"
                      type="number"
                      required={true}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <DateInput 
                      name="dateOfBirth" 
                      control={control} 
                      label="Date of Birth"
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <RadioInput 
                      name="gender" 
                      control={control} 
                      label="Gender"
                      options={genderOptions}
                      row={true}
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={() => nextFormStep()} >Next</Button>
                  </Grid>
                </Grid>

              </AccordionDetails>
            </Accordion>

            <Accordion sx={{padding: "1rem"}} expanded={formStep === 1}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
              >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Contact Information</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <Grid container spacing={2}>

                  <Grid item xs={6}>
                    <TextInput 
                      name="email" 
                      control={control} 
                      label="Email"
                      type="text"
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput 
                      name="address" 
                      control={control} 
                      label="Address"
                      type="text"
                      required={true}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextInput 
                      name="countryOfResidence" 
                      control={control} 
                      label="Country of Residence"
                      type="text"
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput 
                      name="mobile" 
                      control={control} 
                      label="Mobile #"
                      type="number"
                      required={true}
                    />
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Button variant="outlined" sx={{marginRight: "1rem"}} onClick={() => previousFormStep()} >Back</Button>
                    <Button variant="outlined" onClick={() => nextFormStep()} >Next</Button>
                  </Grid>
                  <Grid item xs={6}>
                    
                  </Grid>
                </Grid>
                </AccordionDetails>

            </Accordion>

            <Accordion sx={{padding: "1rem"}} expanded={formStep === 2}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
              >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Travel Information
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  
                  <Grid item xs={12}>
                    <TextInput 
                      name="comments" 
                      control={control} 
                      label="Comments"
                      type="text"
                    />
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Button variant="outlined" sx={{marginRight: "1rem"}} onClick={() => previousFormStep()} >Back</Button>
                    <Button variant="outlined" onClick={() => nextFormStep()} >Next</Button>
                  </Grid>

              </AccordionDetails>
            </Accordion>

            <Accordion sx={{padding: "1rem"}} expanded={true}>
              <AccordionDetails>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{marginTop: "1.4rem"}}
                > 
                  <Grid item xs={6}>
                    <Button variant="contained" type="submit" >Preview</Button>
                  </Grid>
                </Grid>   
              </AccordionDetails>
            </Accordion>
   
          </form>
        </Box>
      </Container>

      <CustomModal
        open={openModal}
        handleOpenModal={() => console.log("Goes!!")}
        handleCloseModal={() => setOpenModal(false)}
        pdfData={pdfData}
      />      
    </Box>
  )
}

export default Register
