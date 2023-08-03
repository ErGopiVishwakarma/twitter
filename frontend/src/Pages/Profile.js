import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React, { memo, useEffect, useState } from 'react'
import Post from '../Component/homeComponent/Post'
import axios from 'axios'
import { BiSearch } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import WhoToFollow from '../Component/miscellaneous/WhoToFollow'
import Trending from '../Component/miscellaneous/Trending'

const Profile = () => {
  const trendingArr = new Array(5).fill(0)
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const [post, setPost] = useState([])
  const { userId } = useParams()
  const [profile, setProfile] = useState({})
  const [followText, setFollowText] = useState('following')
  const [againRender, setAgainRender] = useState(false)
  const [follower, setFollower] = useState(0)
  const [following, setFollowing] = useState(0)


  const postDate = new Date(`${profile.createdAt}`)
  let b = postDate.getFullYear()
  let a = postDate.toLocaleString('default', { month: 'long' })


  const changeText = () => {
    setFollowText('unfollow')
  }
  const previousText = () => {
    setFollowText('following')
  }

  // getting data of user 
  const userProfile = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.get(`https://social-world.onrender.com/user/profile/${userId}`, config)
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
  }, [againRender, userId])

  // logic for follow user 
  const followUser = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.put(`https://social-world.onrender.com/user/follow`, {
        followerId: profile._id
      }, config)
      setAgainRender(prev => !prev)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  // logic for unfollow user 
  const unfollowUser = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.put(`https://social-world.onrender.com/user/unfollow`, {
        unfollowId: profile._id
      }, config)
      setAgainRender(prev => !prev)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  // change background functionality
  const changeBg = async (parameter) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.put(`https://social-world.onrender.com/user/bgpicchange`, {
        bgpic: parameter
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
    if (value.data.url) {
      changeBg(value.data.url)
    }
  }
  return (
    <Flex w='100%'>
      {/* this is left part  */}
      <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '65%' }} px={{ base: 'none', md: '20px' }}
        position={'relative'} pt='10px'

      >
        <Box w="100%" h="60px" bg="white" display={{ base: 'block', sm: 'block', md: 'block' }} px={{ base: '10px', md: 'none' }} >
          <Flex gap='50px' justifyContent={'center'}>
            <Box onClick={() => window.history.back()} p="10px" _hover={{ backgroundColor: 'gray.200' }} borderRadius={'50%'}
              cursor={'pointer'} fontSize={'20px'} position={'absolute'} left={'10px'} top='15px'><FaLongArrowAltLeft />
            </Box>
            <Flex direction={'column'}>
              <Text fontSize={'16px'} fontWeight={'bolder'} color="gray.700">{profile.name}</Text>
              <Text fontSize={'13px'} fontWeight={'bold'} color="gray.500">{post.length} Tweets</Text>
            </Flex>
          </Flex>
        </Box>
        {/* <Box onClick={() => window.history.back()} p='10px' pb='20px' cursor={'pointer'}
          fontSize={'20px'} display={{ base: 'block', sm: 'block', md: 'none' }}><FaLongArrowAltLeft /></Box> */}

        {/* ===================setting up background and user profile pare from here to */}
        {
          !profile?.backgroundpic ? <Box h={{ base: '150px', sm: '200px', md: '250px' }} w='100%' bg="gray.300" pt='60px' position={'relative'}>
            {
              profile?._id === token._id ? <Box p='15px'
                borderRadius={'50%'} position={'absolute'} bottom={0} right={0} cursor={'pointer'}>
                <Input type='file' id="image-media" accept='image/*' display={'none'} onChange={(e) => setBackground(e.target.files[0])} />
                <label for="image-media"><BsFillCameraFill fontSize={'35px'} cursor={'pointer'} color='white' /></label>
              </Box> : ""
            }
            <Avatar src={profile?.pic} h={{ base: '60px', md: '120px' }} w={{ base: '60px', md: '120px' }} position={'absolute'} bottom={{ base: '-30px', md: '-60px' }} left={{ base: '20px', md: '30px' }} />
          </Box> : <Box h={{ base: '150px', sm: '200px', md: '250px' }} w='100%' pt='60px' position={'relative'}
            bgImage={profile.backgroundpic} bgSize={'cover'} bgRepeat={'no-repeat'}>
            {
              profile?._id === token._id ? <Box p='15px' borderRadius={'50%'} position={'absolute'}
                bottom={0} right={0} cursor={'pointer'}>
                <Input type='file' id="image-media" accept='image/*' display={'none'}
                  onChange={(e) => setBackground(e.target.files[0])} />
                <label for="image-media"><BsFillCameraFill fontSize={'35px'} cursor={'pointer'} color='white' /></label>
              </Box> : ""
            }
            <Avatar src={profile?.pic} h={{ base: '60px', md: '120px' }} w={{ base: '60px', md: '120px' }} position={'absolute'} bottom={{ base: '-30px', md: '-60px' }} left={{ base: '20px', md: '30px' }} />
          </Box>
        }
        {/* ===============================till here  */}


        {/* f==========ollow and unfollow button from here to  */}
        <Flex justifyContent={'flex-end'} pt="15px">
          {
            profile?._id === token._id ? <Button borderRadius={'50px'} mr='10px' border={'1px solid black'}
              px="25px" py='10px'>Edit Profile</Button> :
              profile.followers?.includes(token._id) ?
                <Button mr='10px' borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'
                  color={followText === 'unfollow' ? 'red' : 'black'} onMouseOver={changeText}
                  onMouseOut={previousText} onClick={unfollowUser}>{followText}</Button> :
                <Button mr='10px' borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'
                  bg='black' colorScheme='white' onClick={followUser}>Follow</Button>
          }
        </Flex>
        {/* =============till here  */}

        {/* ============followers and unfollowers  */}
        <Flex direction={'column'} pt="30px" gap="10px" pl={{ base: '20px', md: 'none' }}>
          <Heading fontSize={'18px'}>{profile?.name}</Heading>
          <Text fontSize={'14px'} fontWeight={'bold'} color="gray.600">@{profile?.username?.toLowerCase().replaceAll(" ", "")}</Text>
          <Text fontSize={'14px'} fontWeight={'bold'} color="gray.600">joined {`${a} ${b}`}</Text>
          <Flex gap="30px">
            <Button variant={'unstyled'}>{follower} Followers</Button>
            <Button variant={'unstyled'}>{following} Following</Button>
          </Flex>
        </Flex>

        {/* =====showing data of logged user from here to  */}
        <VStack pt="30px" pb={{ base: '10px', md: '10px' }}>
          {
            post?.map(el => (
              <Post el={el} key={el._id} />
            ))
          }
        </VStack>
        {/* ==========till here  */}
      </Box>

      {/* this is right part  */}
      <Box w='35%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}
        h='100vh' position={'sticky'} top='0' overflowY={'scroll'}
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
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'}
          gap='20px' pt='10px'
          fontFamily={'regulare.400'}
        >
          {/* search part here  */}
          <InputGroup w="100%"  >
            <InputLeftElement pointerEvents='none'>
              <BiSearch color='gray.500' />
            </InputLeftElement>
            <Input type='text' placeholder='search' borderRadius={'50px'}
              fontSize={'18px'} variant={'filled'} bg='gray.300' />
          </InputGroup>

          {/* who to follow section here  */}
          <WhoToFollow />

          {/* what is happenning secttion her  */}
          <Trending />

        </Flex>
      </Box>
    </Flex>
  )
}

export default memo(Profile)