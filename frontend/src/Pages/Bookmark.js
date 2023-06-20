import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import RightSidebar from './RightSidebar'

const Bookmark = () => {


  return (
    <Flex>
      <Box px="20px" overflowY={'auto'} h="100vh" position={'relative'}
        w='60%'
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
        <Flex w="100%" h="60px" position={'fixed'} zIndex={1} bg="white" display={{ base: 'none', sm: 'none', md: 'block' }} >
          <Heading fontSize={'22px'}>Bookmarks</Heading>
          <Text>@gopi12345</Text>
        </Flex>
        <Flex p='100px' direction={'column'} gap='30px'>
          <Image src='https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-400x200.v1.366bcfc9.png' />
          <Flex direction={'column'} gap='20px'>
            <Heading>
              Save Tweet For Later
            </Heading>
            <Text>
              Don’t let the good ones fly away! Bookmark <br /> Tweets to easily find them again in the future.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box w='40%'>
        <RightSidebar />
      </Box>
    </Flex>
  )
}

export default Bookmark