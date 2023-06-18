import { Avatar, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import PostDetailLike from '../Component/PostDetailLike'
import LCSF from '../Component/homeComponent/LCSF'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <Flex px='20px' w='100%' direction={'column'} h='100vh' overflowY={'scroll'} gap='20px' position={'relative'}
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
                        <Avatar />
                        <Flex direction={'column'}>
                            <Heading fontSize={'18px'}>gopi singh</Heading>
                            <Text>@hii gopi</Text>
                        </Flex>
                    </Flex>
                    <Button display={'flex'} alignContent={'center'} justifyContent={'center'} variant={'unstyled'} p={'10px'} _hover={{backgroundColor:'gray.100'}} borderRadius={'50%'} fontWeight={'bolder'} fontSize="20px">...</Button>
                </Flex>
            </Flex>
            <Text>this is my first tweet in my twitter handle...</Text>
            <Text color='blue.500'>#kdfjlaksdfjkladsjfkdsajfksajfkajdskads</Text>
            <Box w='100%'>
                <Image src='http://res.cloudinary.com/dr2fwpzbx/image/upload/v1687064932/jiuvzvoekoe4tylf4zok.webp' w='100%' borderRadius={'20px'} />
            </Box>
            {/* <LCSF /> */}
            {/* something will came here  */}


            {/* comments  */}
            <Flex gap='20px'>
                <Avatar src="" h='40px' w='40px' />
                <Flex w='100%' direction={'column'}>
                    <Flex justifyContent={'space-between'} w='100%' alignItems={'center'}>
                        <Flex gap="10px" alignItems={'center'}>
                            <Heading fontSize={'18px'}>gopi</Heading>
                            <Text>@gopi vishwakarma. 5h</Text>
                        </Flex>
                        <Button display={'flex'} alignContent={'center'} justifyContent={'center'} variant={'unstyled'} px={'10px'} _hover={{backgroundColor:'gray.100'}} borderRadius={'50%'} fontWeight={'bolder'} fontSize="20px">...</Button>
                    </Flex>
                    <Text pt='4px'>this film should be bann that is my opinion</Text>
                    <PostDetailLike />
                </Flex>

            </Flex>
        </Flex>
    )
}

export default PostDetail