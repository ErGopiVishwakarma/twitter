import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FiMessageSquare, FiSettings } from 'react-icons/fi'

const Message = () => {
  return (
    <Flex>
      <Flex w='45%' px='40px' direction={'column'} gap='50px'>
        <Flex w='100%' justifyContent={'space-between'} h='60px' alignItems={'center'}>
          <Heading fontSize='20px'>Message</Heading>
          <Flex gap={'40px'}>
            <FiSettings fontSize={'25px'} />
            <FiMessageSquare fontSize={'25px'} />
          </Flex>
        </Flex>
        <Flex gap='15px' direction={'column'}>
          <Heading fontSize={'25px'}>
            Welcome to your<br /> inbox!
          </Heading>
          <Text>Drop a line, share Tweets and more with <br />private conversations between you and others<br /> on Twitter. </Text>
          <Button bg='blue.400' colorScheme='white' borderRadius={'50px'} w='170px'>Write a message</Button>
        </Flex>
      </Flex>


      <Flex w='55%' alignItems='center' justifyContent={'center'} pt='300px'>
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

export default Message