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
import { FiBell, FiHome, FiMessageSquare, FiSearch } from 'react-icons/fi'

const MainPage = () => {
  let obj = { base: '30px', sm: '36px' }

  return (
    <Flex w='100%' px={{ base: "", sm: "", md: "30px", lg: "50px" }} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} position={'relative'}>
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

      <Box w={{ base: '100%', md: '90%', lg: '80%' }} position={'relative'} >
        <MainRoute />
      </Box>

      <Flex boxShadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} justifyContent={'space-around'} alignItems={'center'} h='40px' w='100%' bg='white' zIndex={22} position={'fixed'} bottom={0} display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
        <FiHome fontSize={obj}/>
        <FiSearch fontSize={obj}/>
        <FiBell fontSize={obj}/>
        <FiMessageSquare fontSize={obj}/>
      </Flex>

    </Flex>
  )
}

export default MainPage