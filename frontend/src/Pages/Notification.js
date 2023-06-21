import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

const Notification = () => {

  const trendingArr = new Array(6).fill(0)
  const followArr = new Array(3).fill(0)

  return (
    <Flex w='100%'>
      <Flex direction='column' w={{base:'100%',sm:'100%',md:'60%',lg:'60%'}} px='50px'>
        <Flex w='100%' gap='40px' alignItems={'center'} justifyContent={'space-between'} h='70px' alignItems='center'>
           <Heading fontSize='26px'>Notification</Heading>
          <FiSettings fontSize={'25px'} />
        </Flex>

        {/* tab panal  */}

        <Tabs position={'relative'}>
          <TabList display={'flex'} justifyContent={'space-evenly'} variant="unstyled" >
            <Tab>All</Tab>
            <Tab>Verified</Tab>
            <Tab>Mentions</Tab>
          </TabList>

          <TabPanels>
          </TabPanels>
        </Tabs>
      </Flex>

      <Box w='40%' display={{base:'none',sm:'none',md:'block',lg:'block'}}>
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'} ml='15px' gap='20px' h='100vh' overflowY={'scroll'}
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
          {/* search part here  */}
          <InputGroup w="100%"  >
            <InputLeftElement pointerEvents='none'>
              <BiSearch color='gray.500' />
            </InputLeftElement>
            <Input type='text' placeholder='search' borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.300' />
          </InputGroup>

          {/* what is happenning secttion her  */}
          <Flex direction={'column'} justifyContent={'flex-start'} bg='gray.100'>
            <Heading fontSize='25px' color='#0F1419 ' fontFamily={'revert'} p='15px'>What is happening</Heading>
            <Flex direction={'column'} >
              {
                trendingArr.map(el => (
                  <Flex direction={'column'} _hover={{ backgroundColor: 'gray.200' }} px='15px' py='10px' w='100%'  >
                    <Flex justifyContent={'space-between'} w='100%' >
                      <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>This is text</Text>
                      <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                    </Flex>
                    <Heading fontSize={'18px'}>#Gopi vishwakarma</Heading>
                    <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>25.5k tweets</Text>
                  </Flex>
                ))
              }
              <Heading fontSize={'18px'} color='blue.400' px='15px' py='10px' w='100%' _hover={{ backgroundColor: 'gray.200' }} cursor={'pointer'} >Show more</Heading>
            </Flex>
          </Flex>
          {/* who to follow section here  */}
          <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
            <Heading fontSize={'25px'}>Who to follow</Heading>
            {
              followArr.map(el => (
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
              ))
            }
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Notification