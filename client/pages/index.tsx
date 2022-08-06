import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CSSTransition } from "react-transition-group";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styles from "./styles/Index.module.css";

// https://codesandbox.io/s/wy4rnqly2k

function Index() {
  const router = useRouter();
  const [showWelcomeMessage,setShowWelocemMessage] = useState(false);

  useEffect(() => {

  },[]);

  const goToRegister = (e:any) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#C8C8C8",
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <CSSTransition
        in={true}
        timeout={1000}
        classNames={"text-transition"}
        unmountOnExit
        appear
      >
        <Container maxWidth="lg">
          <Box sx={{ height: '100vh' }}>
            <Typography className={styles.welcome} variant="h1" component="div" gutterBottom>
              Welcome!!
            </Typography>
            <div className={styles.titleContainer}>
              <Typography className={styles.customer} variant="h2" gutterBottom component="div">
                Customer
              </Typography>
              <Typography className={styles.preflight} variant="h2" gutterBottom component="div">
                Preflight
              </Typography>
            </div>
            <div className={styles.registrationContainer}>
              <Typography className={styles.registration} variant="h2" gutterBottom component="div">
                Registration
              </Typography>
              <Stack sx={{marginTop: "20px",marginLeft: "40px",width: "100px", height: "40px"}} direction="row" spacing={2}>
                <Button variant="contained" onClick={goToRegister}>Sign In</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </CSSTransition>
    </Box>
  )
}

export default Index;
