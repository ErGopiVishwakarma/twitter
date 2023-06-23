import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Post from '../Component/homeComponent/Post'
import HomeTweet from '../Component/homeComponent/HomeTweet'
import axios from 'axios'
import RightSidebar from './RightSidebar'
import { BiSearch } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const Profile = () => {
  const followArr = new Array(3).fill(0)
  const trendingArr = new Array(6).fill(0)
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const [post, setPost] = useState([])
  const { userId } = useParams()
  const [profile, setProfile] = useState({})
  const [followText, setFollowText] = useState('following')
  const [againRender, setAgainRender] = useState(false)
  const [follower, setFollower] = useState(0)
  const [following, setFollowing] = useState(0)
  const [bgImage, setBgImage] = useState('')

console.log(profile)
  const changeText = () => {
    setFollowText('unfollow')
  }
  const previousText = () => {
    setFollowText('following')
  }

  const userProfile = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.get(`http://localhost:8080/user/profile/${userId}`, config)
      console.log(data.user[0])
      setPost(data.posts)
      setProfile(data.user[0])
      setFollower(data.user[0].followers.length)
      setFollowing(data.user[0].following.length)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  useEffect(() => {
    userProfile()
  }, [againRender])

  const followUser = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.put(`http://localhost:8080/user/follow`, {
        followerId: profile._id
      }, config)
      setAgainRender(prev => !prev)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  const unfollowUser = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.put(`http://localhost:8080/user/unfollow`, {
        unfollowId: profile._id
      }, config)
      setAgainRender(prev => !prev)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

const changeBg=async(parameter)=>{
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.token}`
      }
    }
    const { data } = await axios.put(`http://localhost:8080/user/bgpicchange`, {
      bgpic:parameter
    }, config)
    setAgainRender(prev => !prev)

  } catch (error) {
    console.log(error.message)
    alert('ohh something went wrong')
  }
}

  // setup background image 
  const setBackground = async (pics) => {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dr2fwpzbx");
    const config = {
      mode: 'no-cors',
    }
    const value = await axios.post('https://api.cloudinary.com/v1_1/dr2fwpzbx/image/upload', data, config)
    if(value.data.url){
      changeBg(value.data.url)
    }
  }

  console.log(profile)

  return (
    <Flex w='100%'>
      <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }} px="20px" overflowY={'auto'} h="100vh" position={'relative'} pt='10px'
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
        <Box w="100%" h="60px"  bg="white" display={{ base: 'none', sm: 'none', md: 'block' }} >
          <Heading fontSize={'22px'}>Profile</Heading>
        </Box>
        <Box onClick={()=>window.history.back()} p='10px' pb='20px' cursor={'pointer'} fontSize={'20px'} display={{ base: 'block', sm: 'block', md: 'none' }}><FaLongArrowAltLeft /></Box>
        {/* backgroundpic setup  */}
        {
          !profile?.backgroundpic ? <Box h="250px" w='100%' bg="gray.300" pt='60px' position={'relative'}>
            {
              profile?._id === token._id ? <Box p='15px' _hover={{ backgroundColor: 'red.100' }} borderRadius={'50%'} position={'absolute'} bottom={0} right={0} cursor={'pointer'}>
                <Input type='file' id="image-media" accept='image/*' display={'none'} onChange={(e) => setBackground(e.target.files[0])} />
                <label for="image-media"><BsFillCameraFill fontSize={'35px'} cursor={'pointer'} /></label>
              </Box> : ""
            }
            <Avatar src={profile?.pic} h='120px' w='120px' position={'absolute'} bottom={'-60px'} left="30px" />
          </Box> : <Box h={{base:'150px',sm:'200px',md:'250px'}} w='100%' pt='60px' position={'relative'} bgImage={profile.backgroundpic} bgSize={'cover'} bgRepeat={'no-repeat'}>
            {
              profile?._id === token._id ? <Box p='15px'  bg='red.100' borderRadius={'50%'} position={'absolute'} bottom={0} right={0} cursor={'pointer'}>
                <Input type='file' id="image-media" accept='image/*' display={'none'} onChange={(e) => setBackground(e.target.files[0])} />
                <label for="image-media"><BsFillCameraFill fontSize={'35px'} cursor={'pointer'} /></label>
              </Box> : ""
            }
            <Avatar src={profile?.pic} h='120px' w='120px' position={'absolute'} bottom={'-60px'} left="30px" />
          </Box>
        }

        <Flex justifyContent={'flex-end'} pt="15px">
          {
            profile?._id === token._id ? <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'>Edit Profile</Button> :
              profile.followers?.includes(token._id) ?
                <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px' color={followText === 'unfollow' ? 'red' : 'black'} onMouseOver={changeText} onMouseOut={previousText} onClick={unfollowUser}>{followText}</Button> :
                <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px' bg='black' colorScheme='white' onClick={followUser}>Follow</Button>
          }

        </Flex>
        <Flex direction={'column'} pt="30px" gap="10px">
          <Heading fontSize={'18px'}>{profile?.name}</Heading>
          <Text>joinded june 2023</Text>
          <Flex gap="30px">
            <Button variant={'unstyled'}>{follower} Followers</Button>
            <Button variant={'unstyled'}>{following} Following</Button>
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

      <Box w='40%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}>
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'} ml='15px' gap='20px' h='100vh' overflowY={'scroll'} pt='10px'
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