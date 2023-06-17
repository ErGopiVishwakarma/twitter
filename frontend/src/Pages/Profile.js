import { Avatar, Box, Button, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'

const Profile = () => {
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
      <Heading fontSize={'22px'}>Profile</Heading>
    </Box>
       <Box h="250px" w='100%' bg="gray.300" pt='60px' position={'relative'}>
        <Avatar h='120px' w='120px' position={'absolute'} bottom={'-60px'} left="30px"/>
       </Box>
      <Flex justifyContent={'flex-end'} pt="15px">
      <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'>Edit Profile</Button>
      </Flex>
      <Flex direction={'column'} pt="30px" gap="10px">
        <Heading fontSize={'18px'}>gopi vishwakarma</Heading>
        <Text>joinded june 2023</Text>
        <Flex gap="30px">
          <Button variant={'unstyled'}>5  Followers</Button>
          <Button variant={'unstyled'}>0  Following</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Profile