import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../Route/Navbar'
import Home from './Home'
import axios from 'axios'
import MainRoute from '../Route/MainRoute'
import RightSidebar from './RightSidebar'

const MainPage = () => {

  return (
    <Flex w='100%' px='60px'>
      <Box w={{basea:'',md:'auto',lg:'24%'}}>
        <Navbar />
      </Box>
      <Box w={{base:'100%',md:'77%',lg:'48%'}} position={'relative'}>
        <MainRoute />
      </Box>
      <Box w="28%" display={{ base: 'none', md: 'none', lg: 'block' }} position={'relative'}>
        <RightSidebar />
      </Box>
    </Flex>
  )
}

export default MainPage