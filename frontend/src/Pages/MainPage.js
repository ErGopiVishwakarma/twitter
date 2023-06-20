import { Avatar, Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../Route/Navbar'
import Home from './Home'
import axios from 'axios'
import MainRoute from '../Route/MainRoute'
import RightSidebar from './RightSidebar'
import MobileNavbar from '../Component/navComponent/MobileNavbar'
import { VscTwitter } from 'react-icons/vsc'
import { BiMoon } from 'react-icons/bi'

const MainPage = () => {
  let obj = { base: '30px', sm: '36px' }

  return (
    <Flex w='100%' px={{ base: "", sm: "", md: "30px", lg: "50px" }} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
      <Box w={{ base: '', sm: "", md: '10%', lg: '20%' }} display={{ base: 'none', sm: "none", md: 'block', lg: 'block' }}>
        <Navbar />
      </Box>
      <Flex display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent={'space-between'} w='100%' px='20px' h='70px' alignItems={'center'}>
        <MobileNavbar>
          <Avatar h={obj} w={obj} />
        </MobileNavbar>
        <Box >
          <VscTwitter color='#1D9BF0' fontSize={obj} />
        </Box>
        <BiMoon fontSize={obj} />
      </Flex>
      <Box w={{ base: '100%', md: '90%', lg: '80%' }} position={'relative'}>
        <MainRoute />
      </Box>
      {/* <Box w={{ base: "", sm: "", md: "30%", lg: "30%" }} display={{ base: 'none', sm: "none", md: 'block', lg: 'block' }} position={'relative'}>
        <RightSidebar />
      </Box> */}
    </Flex>
  )
}

export default MainPage