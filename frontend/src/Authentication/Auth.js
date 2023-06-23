import { Avatar, Box, Button, Center, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { VscTwitter } from 'react-icons/vsc'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import axios from 'axios'

const Auth = () => {

  const googleAuth = () =>{
    window.open('http://localhost:8080/auth/google/callback','_self')
  }
  return (
    <Flex w="100%" h='100vh' direction={{ base: 'column', md: 'column', lg: 'row' }}  >
      <Box w={{ base: '%', md: '', lg: '50%' }} px={{ base: '50px', md: '100px', lg: '170px' }} py={{ base: '50px', md: '100px', lg: '50px' }} m={{ base: 'auto' }} boxShadow={{ base: 'none', md: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', lg: 'none' }}>
        <Flex direction='column'>
          <Box>
            <VscTwitter color='#1D9BF0' fontSize={'60px'} />
          </Box>
          <Heading>
            welcom to twitter
          </Heading>
          <Heading fontSize={'20px'} pt='10px'>join twitter today</Heading>
          <Flex direction={'column'} gap='15px' w={{ base: '300px', md: '400px', lg: '300px' }} pt='20px' justifyContent={'center'}>
            
            <Button variant={'outline'} p='10px' borderRadius={'20px'} onClick={googleAuth}>
              {/* <Link href="http://localhost:8080/auth/google/callback"> */}
              <Flex gap='20px' alignItems={'center'} justifyContent={'center'} fontSize='18px'>
                <FcGoogle />
                <Text>
                  sign up with google
                </Text>
              </Flex>
              {/* </Link> */}
            </Button>
           
            <Button variant={'outline'} p='10px' borderRadius={'20px'}>
              <Flex gap='20px' alignItems={'center'} justifyContent={'center'} fontSize='18px'>
                <BsApple />
                <Text>
                  sign up with apple
                </Text>
              </Flex>
            </Button>
            <Text textAlign={'center'}>or</Text>
            <Button variant={'outline'} p='10px' borderRadius={'20px'} bg='blue.400' colorScheme='white' textColor={'white'}>
              sign in with phone number
            </Button>
            <Text fontSize={'13px'}>
              By signing up, you agree to the <Link href='https://twitter.com/en/tos' color='blue.400'>Terms of service</Link> and <Link href='https://twitter.com/en/privacy' color='blue.400'>Privacy Policy</Link> including <Link href='https://help.twitter.com/en/rules-and-policies/twitter-cookies' color='blue.400'>Cookie Use</Link>
            </Text>
            <Text textAlign={'center'} fontSize={'18px'} fontWeight={'bolder'}>
              already have an account?
            </Text>
            <Button variant={'outline'} p='10px' borderRadius={'20px'} border='1px solid black' fontSize={'20px'} textColor={'blue.400'}>
              sign in
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
        <Image src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" h='100%' w={'100%'} />
      </Box>
    </Flex >
  )
}

export default Auth