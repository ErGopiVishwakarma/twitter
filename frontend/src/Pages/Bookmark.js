import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import RightSidebar from './RightSidebar'
import { memo } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const Bookmark = () => {


  return (
    <Flex w='100%'>
      <Box onClick={() => window.history.back()} p="20px" w='25px'
        cursor={'pointer'} fontSize={'20px'}><FaLongArrowAltLeft />
      </Box>
      <Box px="20px" position={'relative'} pt='10px'
        w={{ base: '100%', sm: '100%', md: '100%', lg: '65%' }}>
        <Flex w="100%" h="60px" bg="white" display={{ base: 'none', sm: 'none', md: 'block' }} >
          <Heading fontSize={'22px'}>Bookmarks</Heading>
          <Text>@gopi12345</Text>
        </Flex>
        <Flex p={{ base: '15px', md: '100px' }} direction={'column'} gap='30px' w='100%' >
          <Image src='https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-400x200.v1.366bcfc9.png' />
          <Flex direction={'column'} gap='20px' w='100%'>
            <Heading>
              Save Tweet For Later
            </Heading>
            <Text>
              Don’t let the good ones fly away! Bookmark <br /> Tweets to easily find them again in the future.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box w='35%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}>
        <RightSidebar />
      </Box>
    </Flex>
  )
}

export default memo(Bookmark)