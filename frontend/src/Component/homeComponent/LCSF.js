import React from 'react'
import { FaRegComment, FaRetweet, FaStreetView, FaShare } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'

const LCSF = () => {
    return (
        <Flex gap='50px'>
            <Tooltip label="reply" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#17A589' }} >
                    <Box p="10px" _hover={{ backgroundColor: '#D5F5E3' }} borderRadius={'50%'}><FaRegComment /></Box>
                    <Text>34</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="like" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#943126 ' }}>
                    <Box p="10px" _hover={{ backgroundColor: '#FADBD8' }} borderRadius={'50%'}>
                        <BsHeart values={{ color: 'blue' }} />
                    </Box>
                    <Text>34</Text>
                </Flex>
            </Tooltip>



            <Tooltip label="retweet" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#2874A6' }}>
                    <Box p="10px" _hover={{ backgroundColor: '#AED6F1' }} borderRadius={'50%'}><FaRetweet /></Box>
                    <Text>34</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="views" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: 'green' }}>
                    <Box p="10px" _hover={{ backgroundColor: '#AED6F1' }} borderRadius={'50%'}><FaStreetView p="10px" /></Box>
                    <Text>34</Text>
                </Flex>
            </Tooltip>


            <Tooltip label="share" aria-label='A tooltip'>
                <Flex cursor={'pointer'} alignItems={'center'} _hover={{ textColor: '#17A589' }}>
                    <FaShare />
                </Flex>
            </Tooltip>
        </Flex>
    )
}

export default LCSF