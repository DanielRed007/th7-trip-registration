import React, { useState, SyntheticEvent } from 'react';
import { FormProvider, useForm } from "react-hook-form";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextInput } from "./components/shared/TextInput";

// Basic info
// Name - string
// Last mane - string
// Type of document - Select
// Document number - string
// Date of birth - date

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
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  firstName: "",
  lastName: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

function Register() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: any) => console.log(data);
  

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

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

            <Accordion sx={{padding: "1rem"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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

                <TextInput 
                  name="firstName" 
                  control={control} 
                  label="First Name"
                />

                <TextInput 
                  name="lastName" 
                  control={control} 
                  label="Last Name"
                />

                {/* <TextInput 
                  label={"First Name"}
                  required={true}
                />

                <TextInput 
                  label={"Last Name"}
                  required={true}
                />
                
                <TextInput 
                  label={"Last Name"}
                  required={true}
                /> */}

              </AccordionDetails>
            </Accordion>

            <Accordion sx={{padding: "1rem"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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

            <Accordion sx={{padding: "1rem"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
            
            <Accordion sx={{padding: "1rem"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
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
          </form>
        </Box>
      </Container>
    </Box>
  )
}

export default Register
