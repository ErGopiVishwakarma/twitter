import { Avatar, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { memo, useEffect, useState } from 'react'
import PostDetailLike from '../Component/PostDetailLike'
import LCSF from '../Component/homeComponent/LCSF'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RightSidebar from './RightSidebar'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PostDetail = () => {
    const { id } = useParams()
    const [post, setPost] = useState([])
    const token = JSON.parse(localStorage.getItem('twitteruser'))
    const getPost = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            const { data } = await axios.get(`https://social-world.onrender.com/post/getallpost`, config)
            //   console.log(data)
            const value = data.filter(el => el._id === id)
            setPost(value)
        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }

    useEffect(() => {
        getPost()
        // console.log(post)
    }, [])
    console.log(post[0]?.comments)
    return (
        <Flex w='100%'>
            <Flex px='15px' w={{base:'100%',sm:'100%',md:'100%',lg:'65%'}} direction={'column'} gap='20px' position={'relative'}
         
        >
            <Flex alignItems={'center'} w='100%' justifyContent={'center'} h='70px' bg="white"  gap='50px'>
            <Box onClick={()=>window.history.back()} p='10px' pb='20px' cursor={'pointer'} fontSize={'20px'} display={{ base: 'block', sm: 'block', md: 'none' }} position={'absolute'} left={'10px'} top ='15px'><FaLongArrowAltLeft /></Box>
                <Heading fontSize={'20px'}>Tweet</Heading>
            </Flex>
            <Flex w='100%' alignItems={'center'}>
                <Flex justifyContent={'space-between'} w='100%' alignItems={'start'} >
                    <Flex gap='15px' w='100%'>
                        <Avatar src={post[0]?.postedBy.pic} h='40px' w='40px' />
                        <Flex direction={'column'}>
                            <Heading fontSize={'18px'}>{post[0]?.postedBy.name}</Heading>
                            <Text>@{token.username}</Text>
                        </Flex>
                    </Flex>
                    <Button display={'flex'} alignContent={'center'} justifyContent={'center'} variant={'unstyled'} p={'10px'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={'50%'} fontWeight={'bolder'} fontSize="20px">...</Button>
                </Flex>
            </Flex>
            <Text>{post[0]?.content}</Text>
            <Text color='blue.500'>#somelink@123by</Text>
            <Box w='100%'>
                <Image src={post[0]?.picture} w='100%' borderRadius={'20px'} />
            </Box>
            {/* <LCSF /> */}
            {/* something will came here  */}


            {/* comments  */}
            <Flex direction={'column'} gap="20px" pb='10px'>
                {
                    post[0]?.comments?.map(el => (
                        <Flex gap='20px'>
                            <Avatar src={el.postedBy.pic} h='40px' w='40px' />
                            <Flex w='100%' direction={'column'}>
                                <Flex justifyContent={'space-between'} w='100%' alignItems={'center'}>
                                    <Flex gap="10px" alignItems={'center'}>
                                        <Heading fontSize={'16px'} fontWeight={'bolder'}>{el.postedBy.name}</Heading>                                       
                                    </Flex>
                                    <Button display={'flex'} alignContent={'center'} justifyContent={'center'} variant={'unstyled'} px={'10px'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={'50%'} fontWeight={'bolder'} fontSize="20px">...</Button>
                                </Flex>
                                <Text pt='4px'>{el.text}</Text>
                                <PostDetailLike />
                            </Flex>

                        </Flex>
                    ))
                }
            </Flex>
        </Flex>

        <Box w='35%' display={{base:'none',sm:'none',md:'none',lg:'block'}}>
            <RightSidebar />
        </Box>
        </Flex>
    )
}

export default memo(PostDetail)