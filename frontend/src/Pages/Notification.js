import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Spinner, Tab, TabList, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import SearchUserList from '../Component/SearchUserList'
import { NavLink } from 'react-router-dom'
import MobileNavbar from '../Component/navComponent/MobileNavbar'

const Notification = () => {

  const trendingArr = new Array(6).fill(0)
  const followArr = new Array(3).fill(0)
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const token = JSON.parse(localStorage.getItem('twitteruser'))

  const searchUser = async (search) => {
    if (search === "") {
      search = '12ab@#$%+-))(("@#!acnca))>>:"P{}+_)('
    }
    try {
      setLoading(true)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.get(`http://localhost:8080/user/searchuser?search=${search}`, config)
      setSearchResult(data)
      setLoading(false)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  return (
    <Flex w='100%'>
      <Flex direction='column' w={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }} px={{base:'20px',md:'50px'}}>
        <Flex w='100%' gap='40px' alignItems={'center'} justifyContent={'space-between'} h='70px'>
        <Box display={{base:'block',md:'none'}}>
        <MobileNavbar><Avatar h='33px' w='33px' src={token.user.pic}  /></MobileNavbar>
        </Box>
          <Heading fontSize={{base:'20px',md:'26px'}}>Notification</Heading>
          <FiSettings fontSize={{base:'22px',md:'25px'}} />
        </Flex>

        {/* tab panal  */}

        <Tabs position={'relative'}>
          <TabList display={'flex'} justifyContent={'space-around'} variant="unstyled" >
            <Tab>All</Tab>
            <Tab>Verified</Tab>
            <Tab>Mentions</Tab>
          </TabList>

          <TabPanels>
          </TabPanels>
        </Tabs>
      </Flex>

      <Box w='40%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}>
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
            <Input type='text' placeholder='search' borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.300' onChange={(e) => searchUser(e.target.value)} />
          </InputGroup>
          {/* searching here  */}
          <Flex direction={'column'} position={'fixed'} zIndex={12} w='container.xl' bg='white' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} mt='40px' >
            {
              loading ? <Flex justify={'center'}><Spinner size='md' /> </Flex> :
                searchResult?.map(el => (
                  <NavLink to={`profile/${el._id}`}><SearchUserList el={el} key={el._id} /></NavLink>
                ))
            }
          </Flex>

          {/* what is happenning secttion her  */}
          <Flex direction={'column'} justifyContent={'flex-start'} bg='gray.100'>
            <Heading fontSize='22px' color='#0F1419 ' fontFamily={'revert'} p='15px'>What is happening</Heading>
            <Flex direction={'column'} >
              {
                trendingArr.map((el, ind) => (
                  <Flex direction={'column'} _hover={{ backgroundColor: 'gray.200' }} px='15px' py='10px' w='100%' key={ind}  >
                    <Flex justifyContent={'space-between'} w='100%' >
                      <Text color="gray.600" fontSize={'13px'}>This is text</Text>
                      <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                    </Flex>
                    <Heading fontSize={'15px'}>#Gopi vishwakarma</Heading>
                    <Text color="gray.600" fontSize={'13px'}>25.5k tweets</Text>
                  </Flex>
                ))
              }
              <Heading fontSize={'18px'} color='blue.400' px='15px' py='10px' w='100%' _hover={{ backgroundColor: 'gray.200' }} cursor={'pointer'} >Show more</Heading>
            </Flex>
          </Flex>

          {/* who to follow section here  */}

          <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
            <Heading fontSize={'22px'}>Who to follow</Heading>
            {
              followArr.map((el, ind) => (
                <Flex justifyContent={'space-between'} key={ind}>
                  <Flex gap='10px'>
                    <Avatar />
                    <Flex direction={'column'}>
                      <Heading fontSize="16px">gopi hii</Heading>
                      <Text fontSize={'14px'}>@gopi hii</Text>
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