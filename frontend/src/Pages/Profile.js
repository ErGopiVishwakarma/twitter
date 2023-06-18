import { Avatar, Box, Button, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'
import axios from 'axios'

const Profile = () => {
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const [post, setPost] = useState([])
  const getPost = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }

      // setNewMessage('')
      const { data } = await axios.get(`http://localhost:8080/post/getpost`, config)
      console.log(data)
      setPost(data)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  useEffect(() => {
    getPost()
  }, [])


  return (
    <Box w="100%" px="20px" overflowY={'auto'} h="100vh" position={'relative'}
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
        <Avatar src={token.user?.pic} h='120px' w='120px' position={'absolute'} bottom={'-60px'} left="30px" />
      </Box>
      <Flex justifyContent={'flex-end'} pt="15px">
        <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'>Edit Profile</Button>
      </Flex>
      <Flex direction={'column'} pt="30px" gap="10px">
        <Heading fontSize={'18px'}>{token.user.name}</Heading>
        <Text>joinded june 2023</Text>
        <Flex gap="30px">
          <Button variant={'unstyled'}>5  Followers</Button>
          <Button variant={'unstyled'}>0  Following</Button>
        </Flex>
      </Flex>
      <VStack pt="30px">
        {
          post?.map(el => (
            <Post el={el} key={el._id}/>
          ))
        }
      </VStack>
    </Box>
  )
}

export default Profile