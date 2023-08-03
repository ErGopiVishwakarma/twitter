import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const WhoToFollow = () => {
  const navigate = useNavigate()
    const [userPost, setUserPost] = useState([])
    const [userLoading, setUserLoading] = useState(false)
    const token = JSON.parse(localStorage.getItem('twitteruser'))

    const getUserPost = async () => {
        try {
            setUserLoading(true)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            const { data } = await axios.get(`https://social-world.onrender.com/user/getuser`, config)
            console.log(data)
            setUserPost(data)
            setUserLoading(false)
    
        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }
    
    useEffect(() => {
        getUserPost()
    }, [])

    const changePath = (id) =>{
    navigate('/')
    navigate(`/profile/${id}`)
    }

  return (
    <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
    <Heading fontSize={'22px'}>Who to follow</Heading>
    {
      userPost.map((el, ind) => (
          <Flex justifyContent={'space-between'} key={ind} onClick={()=>changePath(el._id)} cursor={'pointer'}>
            <Flex gap='10px'>
              <Avatar src={el.pic} />
              <Flex direction={'column'}>
                <Heading fontSize="14px">{el.name}</Heading>
                <Text fontSize={'13px'}>@{el.username.toLowerCase().replaceAll(" ", "").substring(0, 10)}..</Text>
              </Flex>
            </Flex>
            <Button bg="black" colorScheme='white' borderRadius={'50px'}>Follow</Button>
          </Flex>
      ))
    }

  </Flex>
  )
}

export default WhoToFollow