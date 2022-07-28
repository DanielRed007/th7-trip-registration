// import Navbar from "./Navbar";
import Box from '@mui/material/Box';

interface LayoutProps {
    children: any
}

export default function Layout(layoutProps: LayoutProps) {

    return (
        <Box
            sx={{
                backgroundColor: '#f7f7f7'
            }}
        >
            { layoutProps.children }
        </Box>
    )
}