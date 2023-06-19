import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const RightSidebar = () => {
    return (
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'}  ml='15px' gap='20px' h='100vh' overflowY={'scroll'}

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
            <InputGroup w="100%"  >
                <InputLeftElement pointerEvents='none'>
                    <BiSearch color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='search' borderRadius={'50px'} h='50px' variant={'filled'} />
            </InputGroup>
            <Flex direction={'column'} justifyContent={'flex-start'} p='15px'  bg='gray.100'>
                <Heading fontSize='25px'>What is happening</Heading>
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
                    <Flex direction={'column'}>
                        <Text>this is text</Text>
                        <Heading fontSize={'18px'}>@gopi vishwakarma</Heading>
                        <Text>25.5k tweets</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
                <Heading fontSize={'25px'}>Who to follow</Heading>
                <Flex justifyContent={'space-between'}>
                    <Flex gap='10px'>
                        <Avatar />
                        <Flex direction={'column'}>
                            <Heading fontSize="17px">gopi hii</Heading>
                            <Text>@gopi hii</Text>
                        </Flex>
                    </Flex>
                    <Button bg="black" colorScheme='white' borderRadius={'50px'}>Follow</Button>
                </Flex>
                <Flex justifyContent={'space-between'}>
                    <Flex gap='10px'>
                        <Avatar />
                        <Flex direction={'column'}>
                            <Heading fontSize="17px">gopi hii</Heading>
                            <Text>@gopi hii</Text>
                        </Flex>
                    </Flex>
                    <Button bg="black" colorScheme='white' borderRadius={'50px'}>Follow</Button>
                </Flex>
                <Flex justifyContent={'space-between'}>
                    <Flex gap='10px'>
                        <Avatar />
                        <Flex direction={'column'}>
                            <Heading fontSize="17px">gopi hii</Heading>
                            <Text>@gopi hii</Text>
                        </Flex>
                    </Flex>
                    <Button bg="black" colorScheme='white' borderRadius={'50px'}>Follow</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default RightSidebar