import { Avatar, Box, Flex, Heading, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'
import axios from 'axios'
import { ContextProvider } from '../Route/ContextApi'
import RightSidebar from './RightSidebar'
import MobileTopNav from '../Component/navComponent/MobileTopNav'
import { FaTwitter } from 'react-icons/fa'
import '../Style/home.css'
import MobileNavbar from '../Component/navComponent/MobileNavbar'
import FollowingUserPost from '../Component/FollowingUserPost'

const Home = () => {
  const { homeUpdate } = useContext(ContextProvider)
  const [tabChange, setTabChange] = useState(true)
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
      const { data } = await axios.get(`https://social-world.onrender.com/post/getallpost`, config)
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
    <Flex w='100%' gap='15px' >
      {/* tab panal  */}
      <Flex direction={'column'} w={{ base: '100%', sm: '100%', md: '100%', lg: '65%' }} >
        <Box w="100%" h="60px" bg="white" display={{ base: 'none', sm: 'none', md: 'block' }} >
          <Heading fontSize={'22px'} px='20px' pt='10px'>Home</Heading>
        </Box>
        <Flex gap='130px' alignContent={'center'}  textColor={'blue.400'} justifyContent={'center'}
          display={{ base: 'flex', sm: 'flex', md: 'none' }} pt='15px'>
          <Box position={'absolute'} left={'10px'} top ='15px'><MobileNavbar><Avatar src={token.pic} h='33px' w='33px' /></MobileNavbar></Box>
          <Box><FaTwitter fontSize={'28px'} /></Box>
        </Flex>
        <Tabs size='xl' px='10px' pt='20px'>
          <TabList display={'flex'} justifyContent={'space-around'} alignItems={'center'} pt='10px' bg='white'>
            <Tab onClick={() => setTabChange(true)} w='100%' h='100%' _hover={{ backgroundColor: 'gray.200' }} py={{ base: '12px', sm: '14px', md: '20px' }} fontWeight={'bold'}>For You</Tab>
            <Tab onClick={() => setTabChange(prev =>false)} w='100%' h='100%' _hover={{ backgroundColor: 'gray.200' }} py={{ base: '12px', sm: '14px', md: '20px' }} fontWeight={'bold'}>Following</Tab>
          </TabList>
        </Tabs>
        <Box w='100%' pt='10px'>
          {
            tabChange ?
              <Box w='100%'>
                <HomeTweet />
                {
                  loading ? <Box padding='6' boxShadow='lg' bg='white' w='100%'>
                    <SkeletonCircle size='20' />
                    <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
                    <SkeletonCircle size='20' />
                    <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
                  </Box> :
                    <VStack pb={{ base: '10px', md: '10px' }} spacing={0} w='100%'>
                      {
                        post?.map(el => (
                          <Post el={el} key={el?._id} />
                        ))
                      }
                      <Heading textAlign={'center'} fontSize='15px' pt='10px' display={post ? 'block' : 'none'}>you reached till end.</Heading>
                    </VStack>
                }
              </Box> :
              <Box w={'100%'}>
                <FollowingUserPost />
              </Box>
          }
        </Box>
      </Flex>

      <Box w='35%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }} id='gopi' position={'sticky'} top='0px'>
        <RightSidebar />
      </Box>
    </Flex>
  )
}

export default memo(Home)