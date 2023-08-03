import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { memo } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SearchUserList = ({el}) => {
    const navigate = useNavigate()

    return (
        <Flex p='20px' justifyContent={'space-between'} _hover={{backgroundColor:'gray.200'}} alignItems={'center'}>
            <Flex gap='10px' alignItems={'center'}>
                <Avatar src={el.pic} h='40px' w='40px' />
                <Flex direction={'column'}>
                    <Heading fontSize={'18px'}>
                        {el.name}
                    </Heading>
                    <Text fontSize={'12px'}>@{el.username}</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default memo(SearchUserList)