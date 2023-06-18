import React, { useEffect, useState } from 'react'
import { FaRegComment, FaRetweet, FaStreetView, FaShare } from 'react-icons/fa'
import { BsHeart, BsFillHeartFill, BsHeartFill } from 'react-icons/bs'
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import {GrFormView} from 'react-icons/gr'
import axios from 'axios'
import { VscHeart } from 'react-icons/vsc'
// import CommentModal from '../CommentModal'

const PostDetailLike = () => {
    // const token = JSON.parse(localStorage.getItem('twitteruser'))
    const [like, setLike] = useState(0)
    const [likeColor, setLikeColor] = useState()
    // const likeFun = async () => {
    //     try {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${token.token}`
    //             }
    //         }
    //         const data = await axios.put(`http://localhost:8080/post/like`, {
    //             postId
    //         }, config)
    //         if (data?.status === 200) {
    //             setLikeColor(false)
    //         } else {
    //             setLikeColor(true)
    //         }
    //         let length = data.data.likes.length
    //         setLike(length)
    //     } catch (error) {
    //         console.log(error.message)
    //         alert('ohh something went wrong')
    //     }
    // }

    // const likeRenderFun = async () => {
    //     try {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${token.token}`
    //             }
    //         }
    //         const data = await axios.post(`http://localhost:8080/post/likerender`, {
    //             postId
    //         }, config)
    //         if (data?.status === 200) {
    //             setLikeColor(false)
    //         } else {
    //             setLikeColor(true)
    //         }
    //         let length = data.data.likes.length
    //         setLike(length)
    //     } catch (error) {
    //         console.log(error.message)
    //         alert('ohh something went wrong')
    //     }
    // }
    // console.log(likeColor)
    // useEffect(() => {
    //     likeRenderFun()
    // }, [])

    return (
        <Flex gap='50px'>
            <Tooltip label="reply" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#17A589' }} >
               
                    <Box p="10px" _hover={{ backgroundColor: '#D5F5E3' }} borderRadius={'50%'}><FaRegComment fontSize={"16px"} /></Box>
          
                    <Text>34</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="like" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#943126 ' }}>
                    <Box p="10px" borderRadius={'50%'}  _hover={{ backgroundColor: 'red.100' }}>
                        {
                            likeColor ? <BsHeartFill color='red' fontSize={"16px"} /> : <BsHeart fontSize={"16px"} />
                        }
                    </Box>
                    <Text>{like}</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="retweet" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#2874A6' }}>
                    <Box p="10px" _hover={{ backgroundColor: '#AED6F1' }} borderRadius={'50%'}><FaRetweet fontSize={"16px"} /></Box>
                    <Text>34</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="views" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: 'green' }}>
                    <Box p="10px" _hover={{ backgroundColor: '#AED6F1' }} borderRadius={'50%'}><GrFormView p="10px" fontSize={"16px"} /></Box>
                    <Text>34</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="share" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#17A589' }}>
                    <FaShare fontSize={"16px"} />
                </Flex>
            </Tooltip>
        </Flex>
    )
}

export default PostDetailLike