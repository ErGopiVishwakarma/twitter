import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LCSF from './LCSF'


const Post = () => {
    return (
        <Flex gap="20px" w="100%">
            <Box>
                <Avatar />
            </Box>
            <Flex w='100%' direction={'column'} gap="8px" alignItems={'flex-start'}>
                <Flex justifyContent={'space-between'} w="100%">
                    <Text>name</Text>
                    <Text>...</Text>
                </Flex>
                <Text>
                    this is anajana yadav abp new anchor
                </Text>
                <Box borderRadius={'25px'} w="100%">
                    <Image src="https://pbs.twimg.com/media/FykDKk_aEAAt8hM?format=jpg&name=360x360" borderRadius={'25px'} />
                </Box>
                <LCSF />
            </Flex>
        </Flex>
    )
}

export default Post