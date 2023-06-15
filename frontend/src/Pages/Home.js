import { Box, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Post from '../Component/homeComponent/Post'

const Home = () => {
  return ( 
    <Box w="100%" px="20px" overflowY={'scroll'} h="100vh">
     <VStack>
        <Post />
        <Post />
        <Post />
        <Post />
     </VStack>
    </Box>
  )
}

export default Home