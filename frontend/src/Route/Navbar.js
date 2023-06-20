import { Box } from '@chakra-ui/react'
import React from 'react'
import DesktopNav from '../Component/navComponent/DesktopNav'
import TabletNav from '../Component/navComponent/TabletNav'
import MobileNavbar from '../Component/navComponent/MobileNavbar'



const Navbar = () => {
    return (
        <Box w='100%'>
            <Box display={{base:'none',sm:"none",md:'none',lg:'block'}}>
                <DesktopNav />
            </Box>
            <Box display={{base:'none',sm:"none",md:'block',lg:'none'}}>
                <TabletNav />
            </Box>
            {/* <Box display={{base:'block',sm:"block",md:'none',lg:'none'}}>
                <MobileNavbar />
            </Box> */}
        </Box>
    )
}

export default Navbar