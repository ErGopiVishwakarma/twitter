import { Avatar, Box, Flex, Heading, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState([])
  let [set, setClass] = useState('')
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

  // window.addEventListener('wheel', (e) => {
  //   if (e.deltaY < 0) {
  //     setClass('')
  //   } else {
  //     setClass('nav')
  //   }
  // })
  return (
    <Flex w='100%'>
      {/* tab panal  */}
      <Flex direction={'column'} w={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }}
        overflowY={'auto'} h="100vh" position={'relative'}
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
        <Box w="100%" h="60px" bg="white" display={{ base: 'none', sm: 'none', md: 'block' }} >
          <Heading fontSize={'22px'} px='20px' pt='10px'>Home</Heading>
        </Box>
        <Flex gap='130px' alignContent={'center'} px='20px' textColor={'blue.400'} display={{ base: 'flex', sm: 'flex', md: 'none' }} pt='15px'>
          <MobileNavbar><Avatar src={token.user.pic} h='33px' w='33px' /></MobileNavbar>
          <Box><FaTwitter fontSize={'28px'} /></Box>
        </Flex>
        <Tabs >
          <TabList display={'flex'} justifyContent={'space-around'} alignItems={'center'} pt='10px' bg='white' zIndex={3}>
            <Tab w='100%' h='100%' _hover={{ backgroundColor: 'gray.200' }} py={{ base: '12px', sm: '14px', md: '20px' }}>For You</Tab>
            <Tab w='100%' h='100%' _hover={{ backgroundColor: 'gray.200' }} py={{ base: '12px', sm: '14px', md: '20px' }}>Following</Tab>
          </TabList>

          <TabPanels w='100%' pt='10px'>
            <TabPanel>
              <Box
              >
                <HomeTweet />
                {
                  loading ? <Box padding='6' boxShadow='lg' bg='white' w='100%'>
                    <SkeletonCircle size='20' />
                    <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
                    <SkeletonCircle size='20' />
                    <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
                  </Box> : <VStack spacing={'20px'} pb={{base:'60px',md:'10px'}}>
                    {
                      post?.map(el => (
                        <Post el={el} key={el._id} />
                      ))
                    }
                    <Heading textAlign={'center'} fontSize='15px' pt='10px'>you reached till end.</Heading>
                  </VStack>
                }

              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <FollowingUserPost />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>


      <Box w='40%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }} >
        <RightSidebar />
      </Box>
    </Flex>
  )
}

export default Home