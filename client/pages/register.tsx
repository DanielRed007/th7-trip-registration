import React, { useState, SyntheticEvent } from 'react';
import { FormProvider, useForm } from "react-hook-form";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextInput } from "./components/shared/TextInput";
import { InputDropdown } from "./components/shared/InputDropdown";
import { DateInput } from "./components/shared/DateInput";
import { RadioInput } from "./components/shared/RadioInput";

// Basic info
// Name - string
// Last mane - string
// Type of document - Select
// Document number - string
// Date of birth - date
// Gender - radio - string

// Contact Info
// Email - string
// Address - string
// Country of Residence - Select
// Mobile Number

// Travel Info
// Country of departure - Select
// Country of destination - Select
// Travel duration - Data picker

// Additional
// Additional comments

// Enviar
// Submit

type FormValues = {
  firstName: string;
  lastName: string;
};

interface IFormInput {
  // textValue: string;
  // radioValue: string;
  // checkboxValue: string[];
  // dateValue: Date;
  // dropdownValue: string;
  // sliderValue: number;
  firstName: string;
  lastName: string;
  typeOfDocument: string;
  documentNumber: number;
  dateOfBirth: string;
  gender: string
}

const defaultValues = {
  firstName: "",
  lastName: "",
  typeOfDocument: "",
  documentNumber: 0,
  dateOfBirth: "",
  gender: "",
  // checkboxValue: [],
  // dateValue: new Date(),
  // dropdownValue: "",
  // sliderValue: 0,
};

// https://github.com/Mohammad-Faisal/react-hook-form-material-ui/blob/master/src/FormDemo.tsx

function Register() {
  const [expanded, setExpanded] = useState(false);
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch, formState } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
    console.log(formState, "My Control");
  };

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    // setExpanded(isExpanded ? panel : false);
  };

  const step1Valid = ():boolean => {
    console.log(formState);

    return formState.isValid;
  }

  const validateStep = () => {
    

    return !expanded;
  };

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

            <Accordion sx={{padding: "1rem"}} expanded={true} onChange={handleChange('panel1')}>
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
                </Grid>

              </AccordionDetails>
            </Accordion>

            <Accordion sx={{padding: "1rem"}} expanded={true} onChange={handleChange('panel2')}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
              >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Contact Information</Typography>
                  {/* <Typography sx={{ color: 'text.secondary' }}>
                  You are currently not an owner
                  </Typography> */}
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                  varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                  laoreet.
                  </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{padding: "1rem"}} expanded={false} onChange={handleChange('panel3')}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
              >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Travel Information
                  </Typography>
                  {/* <Typography sx={{ color: 'text.secondary' }}>
                  Filtering has been entirely disabled for whole web server
                  </Typography> */}
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                  amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion sx={{padding: "1rem"}} expanded={false} onChange={handleChange('panel4')}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
              >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Additional Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                  amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{padding: "1rem"}} expanded={true} onChange={handleChange('panel4')}>
              <AccordionDetails>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{marginTop: "1.4rem"}}
                >
                  <Button variant="contained" type="submit" >Submit</Button>
                </Grid>   
              </AccordionDetails>
            </Accordion>
   
          </form>
        </Box>
      </Container>
    </Box>
  )
}

export default Register
