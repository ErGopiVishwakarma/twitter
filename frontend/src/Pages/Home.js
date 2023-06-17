import { Box, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'

const Home = () => {
  return ( 
    <Box w="100%" px="20px" overflowY={'auto'} h="100vh"   position={'relative'} 
    css={{
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '24px',
    },
  }}
    >
    <Box w="100%" h="60px" position={'fixed'} zIndex={99} bg="white">
      <Heading fontSize={'22px'}>Home</Heading>
    </Box>
    <HomeTweet />
     <VStack spacing={'20px'}>
        <Post />
        <Post />
        <Post />
        <Post />
     </VStack>
    </Box>
  )
}

export default Home