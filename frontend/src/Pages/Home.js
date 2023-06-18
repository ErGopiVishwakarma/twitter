import { Box, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'
import axios from 'axios'

const Home = () => {

  const [post, setPost] = useState([])
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const getPost = async() =>{
    try {
      const config = {
          headers : {
              'Content-Type' : 'application/json',
              Authorization : `Bearer ${token.token}`
          }
      }
      const {data} = await axios.get(`http://localhost:8080/post/getallpost`,config)
      console.log(data)
      setPost(data)
      
  } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
  }
  }

  useEffect(()=>{
    getPost()
  },[])


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
    <Box w="100%" h="60px" position={'fixed'} zIndex={1}  bg="white" >
      <Heading fontSize={'22px'}>Home</Heading>
    </Box>
    <HomeTweet />
     <VStack spacing={'20px'}>
      {
        post?.map(el=>(
          <Post el={el} key={el._id} />
        ))
      }
     </VStack>
    </Box>
  )
}

export default Home