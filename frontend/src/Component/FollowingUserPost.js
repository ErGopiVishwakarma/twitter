import { Box, Flex, Heading, SkeletonCircle, SkeletonText, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './homeComponent/Post'

const FollowingUserPost = () => {

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
            const { data } = await axios.get(`http://localhost:8080/post/followinguserpost`, config)
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
    }, [])

    return (
        <Flex w='100%'>
            <Flex direction={'column'} pb={{base:'60px',md:'10px'}} >
                <Box >
                    {
                        loading ? <Box padding='6' boxShadow='lg' bg='white' w='100%'>
                            <SkeletonCircle size='20' />
                            <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
                            <SkeletonCircle size='20' />
                            <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='200' />
                        </Box> : <VStack spacing={'20px'}>
                            {
                                post?.map(el => (
                                    <Post el={el} key={el?._id} />
                                ))
                            }
                            <Heading textAlign={'center'} fontSize='15px'>you reached till end.</Heading>
                        </VStack>
                    }
                </Box>
            </Flex>
        </Flex>
    )
}

export default FollowingUserPost