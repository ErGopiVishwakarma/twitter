import React, { memo, useEffect, useState } from 'react'
import { FaRegComment, FaRetweet, FaStreetView, FaShare } from 'react-icons/fa'
import { BsHeart, BsFillHeartFill, BsHeartFill,BsShare } from 'react-icons/bs'
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import axios from 'axios'
import { VscHeart } from 'react-icons/vsc'
import CommentModal from '../CommentModal'

const LCSF = ({ postId,user }) => {
    const token = JSON.parse(localStorage.getItem('twitteruser'))
    const [like, setLike] = useState()
    const [likeColor, setLikeColor] = useState()
    const [comment, setComment] = useState()
    const likeFun = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            const data = await axios.put(`https://social-world.onrender.com/post/like`, {
                postId
            }, config)
            if (data?.status === 200) {
                setLikeColor(false)
            } else {
                setLikeColor(true)
            }
            let length = data.data.likes.length
            setLike(length)
        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }

    const likeRenderFun = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            const data = await axios.post(`https://social-world.onrender.com/post/likerender`, {
                postId
            }, config)
            if (data?.status === 200) {
                setLikeColor(false)
            } else {
                setLikeColor(true)
            }
            let length = data.data.likes.length
            setLike(length)
            setComment(data.data.comments.length)
        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }
    useEffect(() => {
        likeRenderFun()
    }, [])

    // comment logic here 



    return (
        <Flex  justifyContent={{base:'space-between'}} w='100%'>
            <Tooltip label="reply" aria-label='A tooltip' hasArrow>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#17A589' }} >
                    <CommentModal user={user} postId={postId} setComment={setComment}>
                    <Box p="10px" _hover={{ backgroundColor: '#D5F5E3' }} borderRadius={'50%'}><FaRegComment fontSize={{base:'16px',sm:'17px',md:'20px',lg:'20px'}} /></Box>
                    </CommentModal>
                    <Text>{comment}</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="like" aria-label='A tooltip' hasArrow>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#943126 ' }}>
                    <Box p="10px" borderRadius={'50%'} onClick={likeFun} _hover={{ backgroundColor: 'red.100' }}>
                        {
                            likeColor ? <BsHeartFill color='red' fontSize={{base:'16px',sm:'17px',md:'20px',lg:'20px'}}/> : <BsHeart fontSize={{base:'16px',sm:'17px',md:'20px',lg:'20px'}} />
                        }
                    </Box>
                    <Text>{like}</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="retweet" aria-label='A tooltip' hasArrow>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#2874A6' }}>
                    <Box p="10px" _hover={{ backgroundColor: '#AED6F1' }} borderRadius={'50%'}><FaRetweet fontSize={{base:'16px',sm:'17px',md:'20px',lg:'20px'}} /></Box>
                    <Text></Text>
                </Flex>
            </Tooltip>


            <Tooltip label="views" aria-label='A tooltip' hasArrow>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: 'green' }} display={{base:'none',md:"flex"}}>
                    <Box p="10px" _hover={{ backgroundColor: '#AED6F1' }} borderRadius={'50%'}><FaStreetView p="10px" fontSize={{base:'16px',sm:'17px',md:'20px',lg:'20px'}} /></Box>
                    <Text></Text>
                </Flex>
            </Tooltip>


            <Tooltip label="share" aria-label='A tooltip' hasArrow>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#17A589' }}>
                    <BsShare fontSize={{base:'16px',sm:'17px',md:'20px',lg:'20px'}} />
                </Flex>
            </Tooltip>
        </Flex>
    )
}

export default memo(LCSF)