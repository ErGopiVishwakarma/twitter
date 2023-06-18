import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const RightSidebar = () => {
    return (
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'} bg='gray.100' h='100vh' ml='15px'>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <BiSearch color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='search' />
            </InputGroup>
            <Flex direction={'column'} justifyContent={'flex-start'} p='15px'>
                <Box>What is happening</Box>
                <Flex gap='25px' direction={'column'} pt='20px'>
                    <Flex direction={'column'} gap='3px'>
                        <Flex justifyContent={'space-between'}>
                        <Text>this is text</Text>
                        <Text>...</Text>
                        </Flex>
                        <Heading fontSize={'18px'}>@gopi vishwakarma</Heading>
                        <Text>25.5k tweets</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text>this is text</Text>
                        <Heading fontSize={'18px'}>@gopi vishwakarma</Heading>
                        <Text>25.5k tweets</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text>this is text</Text>
                        <Heading fontSize={'18px'}>@gopi vishwakarma</Heading>
                        <Text>25.5k tweets</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text>this is text</Text>
                        <Heading fontSize={'18px'}>@gopi vishwakarma</Heading>
                        <Text>25.5k tweets</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default RightSidebar