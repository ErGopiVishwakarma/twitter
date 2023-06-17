import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LCSF from './LCSF'


const Post = () => {
    return (
        <Flex gap="20px" w="100%">
            <Box>
                <Avatar h="40px" w='40px'  />
            </Box>
            <Flex w='100%' direction={'column'} alignItems={'flex-start'} gap="8px">
                <Flex justifyContent={'space-between'} w="100%" >
                        <Heading fontSize="18px">gopi vishwakarma</Heading>
                        <Heading fontSize="18px" cursor={'pointer'} >...</Heading>
                </Flex>
                <Text>
                    this is anajana yadav abp new anchorhjk dhgjd jh jf hg fjhg jgfhfg  dhgg gg d hdgfhg gfhg hdghdgh gfh dh dfgh
                </Text>
                <Box borderRadius={'25px'} w="100%">
                    <Image src="https://pbs.twimg.com/media/FypJ11NaAAA3DP7?format=jpg&name=small" borderRadius={'25px'} />
                </Box>
                <LCSF />
            </Flex>
        </Flex>
    )
}

export default Post