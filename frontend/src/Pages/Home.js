import { Box, Flex, Heading, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'
import axios from 'axios'
import { ContextProvider } from '../Route/ContextApi'
import RightSidebar from './RightSidebar'

const Home = () => {
  const { homeUpdate } = useContext(ContextProvider)
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState([])
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const getPost = async () => {
    try {
      setLoading(true)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.get(`http://localhost:8080/post/getallpost`, config)
      console.log(data)
      setPost(data)
      setLoading(false)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  useEffect(() => {
    getPost()
  }, [homeUpdate])


  return (
    <Flex>
      <Box px="20px" overflowY={'auto'} h="100vh" position={'relative'}
        w={{base:'100%',sm:'100%',md:'60%',lg:'60%'}}
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
          <Heading fontSize={'22px'}>Home</Heading>
        </Box>
        <HomeTweet />
        {
          loading ? <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='20' />
            <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
            <SkeletonCircle size='20' />
            <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
          </Box> : <VStack spacing={'20px'}>
            {
              post?.map(el => (
                <Post el={el} key={el._id} />
              ))
            }
          </VStack>
        }

      </Box>
      <Box w='40%' display={{base:'none',sm:'none',md:'block',lg:'block'}}>
        <RightSidebar />
      </Box>
    </Flex>
  )
}

export default Home