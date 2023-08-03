import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { memo } from 'react'
import { FiMessageSquare, FiSettings } from 'react-icons/fi'
import MobileNavbar from '../Component/navComponent/MobileNavbar'

const Message = () => {

  const token = JSON.parse(localStorage.getItem('twitteruser'))

  return (
    <Flex >
      <Flex w={{ base: '100%', sm: '100%', md: '100%', lg: '45%' }} px={{ base: '0px', md: "40px" }} direction={'column'} gap='50px' justifyContent={{ md: 'center' }}>
        <Flex w='100%' justifyContent={'space-between'} h='60px' alignItems={'center'} px={{base:'10px',md:"none"}}>
          <Box display={{ base: 'block', md: 'none' }}>
            <MobileNavbar><Avatar h='33px' w='33px' src={token.pic} /></MobileNavbar>
          </Box>
          <Heading fontSize='22px'>Message</Heading>
          <Flex gap={'40px'}>
            <FiSettings fontSize={'22px'} />
            <Box display={{ base: 'none', md: 'block' }}> <FiMessageSquare fontSize={'25px'} /></Box>
          </Flex>
        </Flex>
        <Flex gap='15px' direction={'column'} ml={{base:'20px',md:'40px'}}>
          <Heading fontSize={'25px'}>
            Welcome to your<br /> inbox!
          </Heading>
          <Text>Drop a line, share Tweets and more with <br />private conversations between you and others<br /> on Twitter. </Text>
          <Button bg='blue.400' colorScheme='white' borderRadius={'50px'} w='170px'>Write a message</Button>
        </Flex>
      </Flex>


      <Flex w='55%' alignItems='center' justifyContent={'center'} pt='300px' display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
        <Flex gap='15px' direction={'column'}>
          <Heading fontSize={'25px'}>
            Select a Message
          </Heading>
          <Text>Choose from your existing conversations, start a <br /> new one, or just keep swimming.</Text>
          <Button bg='blue.400' colorScheme='white' borderRadius={'50px'} w='170px'>New message</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default memo(Message)