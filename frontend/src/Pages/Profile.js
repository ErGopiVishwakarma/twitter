import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'
import axios from 'axios'
import RightSidebar from './RightSidebar'
import { BiSearch } from 'react-icons/bi'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const followArr = new Array(3).fill(0)
  const trendingArr = new Array(6).fill(0)
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const [post, setPost] = useState([])
  const { userId } = useParams()
  const [profile, setProfile] = useState({})
  console.log('userId' + userId)
  const userProfile = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.get(`http://localhost:8080/user/profile/${userId}`, config)
      console.log(data)
      setPost(data.posts)
      setProfile(data.user[0])

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }
  console.log(post, profile)
  useEffect(() => {
    userProfile()
  }, [])


  return (
    <Flex w='100%'>
      <Box w={{ base: '100%', sm: '100%', md: '60%', lg: '60%' }} px="20px" overflowY={'auto'} h="100vh" position={'relative'}
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
        <Box w="100%" h="60px" position={'fixed'} zIndex={1} bg="white" display={{ base: 'none', sm: 'none', md: 'block' }} >
          <Heading fontSize={'22px'}>Profile</Heading>
        </Box>
        <Box h="250px" w='100%' bg="gray.300" pt='60px' position={'relative'}>
          <Avatar src={profile?.pic} h='120px' w='120px' position={'absolute'} bottom={'-60px'} left="30px" />
        </Box>
        <Flex justifyContent={'flex-end'} pt="15px">
          <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'>Edit Profile</Button>
        </Flex>
        <Flex direction={'column'} pt="30px" gap="10px">
          <Heading fontSize={'18px'}>{profile?.name}</Heading>
          <Text>joinded june 2023</Text>
          <Flex gap="30px">
            <Button variant={'unstyled'}>5  Followers</Button>
            <Button variant={'unstyled'}>0  Following</Button>
          </Flex>
        </Flex>
        <VStack pt="30px">
          {
            post?.map(el => (
              <Post el={el} key={el._id} />
            ))
          }
        </VStack>
      </Box>

      <Box w='40%' display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}>
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'} ml='15px' gap='20px' h='100vh' overflowY={'scroll'}
          fontFamily={'regulare.400'}
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
          {/* search part here  */}
          <InputGroup w="100%"  >
            <InputLeftElement pointerEvents='none'>
              <BiSearch color='gray.500' />
            </InputLeftElement>
            <Input type='text' placeholder='search' borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.300' />
          </InputGroup>

          {/* who to follow section here  */}
          <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
            <Heading fontSize={'22px'}>Who to follow</Heading>
            {
              followArr.map((el, ind) => (
                <Flex justifyContent={'space-between'} key={ind}>
                  <Flex gap='10px'>
                    <Avatar />
                    <Flex direction={'column'}>
                      <Heading fontSize="16px">gopi hii</Heading>
                      <Text fontSize={'14px'}>@gopi hii</Text>
                    </Flex>
                  </Flex>
                  <Button bg="black" colorScheme='white' borderRadius={'50px'}>Follow</Button>
                </Flex>
              ))
            }

          </Flex>

          {/* what is happenning secttion her  */}
          <Flex direction={'column'} justifyContent={'flex-start'} bg='gray.100'>
            <Heading fontSize='22px' color='#0F1419 ' fontFamily={'revert'} p='15px'>What is happening</Heading>
            <Flex direction={'column'} >
              {
                trendingArr.map((el, ind) => (
                  <Flex direction={'column'} _hover={{ backgroundColor: 'gray.200' }} px='15px' py='10px' w='100%' key={ind}  >
                    <Flex justifyContent={'space-between'} w='100%' >
                      <Text color="gray.600" fontSize={'13px'}>This is text</Text>
                      <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                    </Flex>
                    <Heading fontSize={'15px'}>#Gopi vishwakarma</Heading>
                    <Text color="gray.600" fontSize={'13px'}>25.5k tweets</Text>
                  </Flex>
                ))
              }
              <Heading fontSize={'18px'} color='blue.400' px='15px' py='10px' w='100%' _hover={{ backgroundColor: 'gray.200' }} cursor={'pointer'} >Show more</Heading>
            </Flex>
          </Flex>

        </Flex>
      </Box>
    </Flex>
  )
}

export default Profile