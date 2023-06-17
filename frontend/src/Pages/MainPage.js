import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../Route/Navbar'
import Home from './Home'
import axios from 'axios'
import MainRoute from '../Route/MainRoute'

const MainPage = () => {

  return (
    <Flex w='100%'>
      <Box w={{basea:'',md:'auto',lg:'23%'}}>
        <Navbar />
      </Box>
      <Box w={{base:'100%',md:'77%',lg:'48%'}}>
        <MainRoute />
      </Box>
      <Box w='31%' display={{ base: 'none', md: 'none', lg: 'block' }}>
        {/* <Navbar /> */}
      </Box>
    </Flex>
  )
}

export default MainPage