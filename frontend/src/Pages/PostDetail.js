import { Avatar, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PostDetailLike from '../Component/PostDetailLike'
import LCSF from '../Component/homeComponent/LCSF'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RightSidebar from './RightSidebar'

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
            const { data } = await axios.get(`http://localhost:8080/post/getallpost`, config)
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
    return (
        <Flex w='100%'>
            <Flex px='20px' w={{base:'100%',sm:'100%',md:'60%',lg:'60%'}}direction={'column'} h='100vh' overflowY={'scroll'} gap='20px' position={'relative'}
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
            <Flex alignItems={'center'} w='100%' justifyContent={'flex-start'} h='70px' bg="white" position={'fixed'} zIndex={1}>
                <Heading fontSize={'23px'}>detail page</Heading>
            </Flex>
            <Flex w='100%' pt='80px' alignItems={'center'}>
                <Flex justifyContent={'space-between'} w='100%' >
                    <Flex gap='15px' w='100%'>
                        <Avatar src={post[0]?.postedBy.pic} h='40px' w='40px' />
                        <Flex direction={'column'}>
                            <Heading fontSize={'18px'}>{post[0]?.postedBy.name}</Heading>
                            <Text>@hii gopi</Text>
                        </Flex>
                    </Flex>
                    <Button display={'flex'} alignContent={'center'} justifyContent={'center'} variant={'unstyled'} p={'10px'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={'50%'} fontWeight={'bolder'} fontSize="20px">...</Button>
                </Flex>
            </Flex>
            <Text>{post[0]?.content}</Text>
            <Text color='blue.500'>#somelink@123bygopivishwakarma</Text>
            <Box w='100%'>
                <Image src={post[0]?.picture} w='100%' borderRadius={'20px'} />
            </Box>
            {/* <LCSF /> */}
            {/* something will came here  */}


            {/* comments  */}
            <Flex direction={'column'} gap="20px">
                {
                    post[0]?.comments?.map(el => (
                        <Flex gap='20px'>
                            <Avatar src={el.postedBy.pic} h='40px' w='40px' />
                            <Flex w='100%' direction={'column'}>
                                <Flex justifyContent={'space-between'} w='100%' alignItems={'center'}>
                                    <Flex gap="10px" alignItems={'center'}>
                                        <Heading fontSize={'18px'}>{el.postedBy.name}</Heading>
                                        <Text>5h</Text>
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

        <Box w='40%' display={{base:'none',sm:'none',md:'block',lg:'block'}}>
            <RightSidebar />
        </Box>
        </Flex>
    )
}

export default PostDetail