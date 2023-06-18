import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LCSF from './LCSF'
import { NavLink } from 'react-router-dom'


const Post = ({ el }) => {

    return (
        <Flex gap="20px" w="100%">
            <Box>
                <Avatar src={el.postedBy.pic} h="40px" w='40px' />
            </Box>
            <Flex w='100%' direction={'column'} alignItems={'flex-start'} gap="8px">
                <Flex justifyContent={'space-between'} w="100%" >
                    <Heading fontSize="18px">{el.postedBy.name}</Heading>
                    <Heading fontSize="18px" cursor={'pointer'} >...</Heading>
                </Flex>
                <NavLink to={`post/${el._id}`}>
                    <Text>
                        {el.content}
                    </Text>
                </NavLink>
                <Box borderRadius={'25px'} w="100%">
                    <Image src={el.picture} borderRadius={'25px'} />
                </Box>
                <LCSF postId={el._id} user={el} />
            </Flex>
        </Flex>
    )
}

export default Post