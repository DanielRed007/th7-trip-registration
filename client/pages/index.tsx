import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Index() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh' }}>
          <Typography style={{fontSize: "240px"}} variant="h1" component="div" gutterBottom>
            Welcome!!
          </Typography>
          <Typography variant="h2" gutterBottom component="div">
            Customer
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            Preflight
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            Registration
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Index;
