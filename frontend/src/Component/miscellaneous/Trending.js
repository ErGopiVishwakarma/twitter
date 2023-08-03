import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Trending = () => {
    const trendingArr = new Array(5).fill(0)
  return (
    <Flex direction={'column'} justifyContent={'flex-start'} bg='gray.100' >
    <Heading fontSize='22px' color='#0F1419 ' fontFamily={'revert'} p='15px'>What is happening</Heading>
    <Flex direction={'column'} >
      {
        trendingArr.map((el, ind) => (
          <Flex direction={'column'} _hover={{ backgroundColor: 'gray.200' }} px='15px' py='10px' w='100%' key={ind}  >
            <Flex justifyContent={'space-between'} w='100%' >
              <Text fontSize={'13px'} fontWeight={'bold'} color="gray.600">This is text</Text>
              <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
            </Flex>
            <Heading fontSize={'15px'}>#social world</Heading>
            <Text fontSize={'13px'} fontWeight={'bold'} color="gray.600">25.5k tweets</Text>
          </Flex>
        ))
      }
      <Heading fontSize={'18px'} color='blue.400' px='15px' py='10px' w='100%'
        _hover={{ backgroundColor: 'gray.200' }} cursor={'pointer'} >Show more</Heading>
    </Flex>
  </Flex>
  )
}

export default Trending