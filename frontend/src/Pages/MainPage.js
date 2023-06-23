import { Avatar, Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../Route/Navbar'
import Home from './Home'
import axios from 'axios'
import MainRoute from '../Route/MainRoute'
import RightSidebar from './RightSidebar'
import MobileNavbar from '../Component/navComponent/MobileNavbar'
import { VscTwitter } from 'react-icons/vsc'
import { BiMoon, BiLogoTwitter } from 'react-icons/bi'
import { FiBell, FiHome, FiMessageSquare, FiSearch, FiTwitter } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa'
import TweetModal from '../Component/TweetModal'
import { CgTwitter } from 'react-icons/cg'

const MainPage = () => {
  let obj = { base: '30px', sm: '36px' }
  let navFont = {base:'35px',sm:'40px'}

  return (
    <Flex w='100%' px={{ base: "", sm: "", md: "30px", lg: "50px" }} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} position={'relative'}>
      <Box w={{ base: '', sm: "", md: '10%', lg: '20%' }} display={{ base: 'none', sm: "none", md: 'block', lg: 'block' }}>
        <Navbar />
      </Box>

      {/* <Flex display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent={'space-between'} w='100%' px='20px' h='70px' alignItems={'center'}>
        <MobileNavbar>
          <Avatar h={obj} w={obj} />
        </MobileNavbar>
        <Box >
          <VscTwitter color='#1D9BF0' fontSize={obj} />
        </Box>
        <BiMoon fontSize={obj} />
      </Flex> */}

      <Box w={{ base: '100%', md: '90%', lg: '80%' }} position={'relative'} >
        <MainRoute />
      </Box>

      {/* tweetpage icon twitter  */}
      <Box position={'fixed'} bottom={'60px'} right='20px' bg='cyan.400' p='10px' borderRadius={'50%'} textColor={'white'} display={{base:'block',md:'none'}}>
        <NavLink to='/tweetpage'>
          <CgTwitter fontSize={'30px'} />
        </NavLink>
      </Box>

      {/* bottom navbar  */}
      <Flex py='10px' textColor={'blackAlpha.900'} boxShadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} justifyContent={'space-around'} alignItems={'center'}  w='100%' bg='white' zIndex={22} position={'fixed'} bottom={0} display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
        <NavLink to='/'><FiHome fontSize={'28px'} /></NavLink>
        <NavLink to='/explore'><FiSearch fontSize={'28px'} /></NavLink>
        <NavLink to='/notification'><FiBell fontSize={'28px'} /></NavLink>
        <NavLink to='/message'><FiMessageSquare fontSize={'28px'} /></NavLink>
      </Flex>

    </Flex>
  )
}

export default MainPage