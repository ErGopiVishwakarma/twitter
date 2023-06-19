import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const RightSidebar = () => {
    return (
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'}  ml='15px' gap='20px' h='100vh' overflowY={'scroll'}
fontFamily={'regulare.400'}
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
                    <BiSearch color='gray.500' />
                </InputLeftElement>
                <Input type='text' placeholder='search' borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.300' />
            </InputGroup> 
            <Flex direction={'column'} p='15px' bg='gray.100' gap='10px'>
            <Heading fontSize="21px">Get Verified</Heading>
            <Heading fontSize='16px'>Subscribe to unlock new features</Heading>
            <Button borderRadius={'50px'} w='120px' bg={'black'} colorScheme='white'>Get Verified</Button>
            </Flex>
            <Flex direction={'column'} justifyContent={'flex-start'}  bg='gray.100'>
                <Heading fontSize='25px' color='#0F1419 ' fontFamily={'revert'}  p='15px'>What is happening</Heading>
                <Flex direction={'column'} >
                    <Flex direction={'column'} _hover={{backgroundColor:'gray.200'}}  px='15px' py='10px' w='100%'  >
                        <Flex justifyContent={'space-between'} w='100%' >
                            <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>This is text</Text>
                           <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                        </Flex>
                        <Heading fontSize={'18px'}>#Gopi vishwakarma</Heading>
                        <Text fontWeight={'bold'} color="gray.500"  fontSize={'15px'}>25.5k tweets</Text>
                    </Flex>
                    <Flex direction={'column'} _hover={{backgroundColor:'gray.200'}}  px='15px' py='10px' w='100%'>
                        <Flex justifyContent={'space-between'} w='100%' >
                            <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>This is text</Text>
                           <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                        </Flex>
                        <Heading fontSize={'18px'}>#Gopi vishwakarma</Heading>
                        <Text fontWeight={'bold'} color="gray.500"  fontSize={'15px'}>25.5k tweets</Text>
                    </Flex>
                    <Flex direction={'column'} _hover={{backgroundColor:'gray.200'}}  px='15px' py='10px' w='100%' >
                        <Flex justifyContent={'space-between'} w='100%' >
                            <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>This is text</Text>
                           <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                        </Flex>
                        <Heading fontSize={'18px'}>#Gopi vishwakarma</Heading>
                        <Text fontWeight={'bold'} color="gray.500"  fontSize={'15px'}>25.5k tweets</Text>
                    </Flex>
                    <Flex direction={'column'} _hover={{backgroundColor:'gray.200'}}  px='15px' py='10px' w='100%' >
                        <Flex justifyContent={'space-between'} w='100%' >
                            <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>This is text</Text>
                           <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                        </Flex>
                        <Heading fontSize={'18px'}>#Gopi vishwakarma</Heading>
                        <Text fontWeight={'bold'} color="gray.500"  fontSize={'15px'}>25.5k tweets</Text>
                    </Flex>
                    <Heading fontSize={'18px'} color='blue.400' px='15px' py='10px' w='100%' _hover={{backgroundColor:'gray.200'}} cursor={'pointer'} >Show more</Heading>
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