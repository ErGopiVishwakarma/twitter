import { Avatar, Box, Flex } from '@chakra-ui/react'
import Navbar from '../Route/Navbar'
import MainRoute from '../Route/MainRoute'
import { FiBell, FiHome, FiMessageSquare, FiSearch, FiTwitter } from 'react-icons/fi'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
import { CgTwitter } from 'react-icons/cg'
import { memo, useState } from 'react'

const MainPage = () => {
  const [nav, setNav] = useState('')

  window.addEventListener('wheel',(e)=>{
    if(e.deltaY<0){
      setNav('')
    } else {
      setNav('nav')
    }
  
  })

  return (
    <Flex w='100%' px={{ base: "1px", sm: "1px", md: "30px", lg: "50px" }}
      direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
      position={'relative'} h='100vh' overflowY='scroll' >
      <Box w={{ base: '', sm: "", md: '10%', lg: '20%' }}
        display={{ base: 'none', sm: "none", md: 'block', lg: 'block' }}
        position={'sticky'} top='0'>
        <Navbar />
      </Box>

      <Box w={{ base: '100%', md: '90%', lg: '80%' }} position={'relative'}>
        <MainRoute />
      </Box>

      {/* tweetpage icon twitter  */}
      <Box position={'fixed'} bottom={'60px'} right='20px' bg='cyan.400' p='10px'
        borderRadius={'50%'} textColor={'white'} display={{ base: 'block', md: 'none' }}>
        <NavLink to='/tweetpage'>
          <CgTwitter fontSize={'30px'} />
        </NavLink>
      </Box>

      {/* bottom navbar  */}
      <Box display={!nav?'block':'none'}>
        <Flex py='10px' textColor={'blackAlpha.900'}
          boxShadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}
          justifyContent={'space-around'} alignItems={'center'} w='100%' bg='white' zIndex={22}
          position={'fixed'} bottom={0} display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
          <NavLink to='/'>
            <FiHome fontSize={'24px'} />
          </NavLink>
          <NavLink to='/explore'>
            <FiSearch fontSize={'24px'} />
          </NavLink>
          <NavLink to='/notification'>
            <FiBell fontSize={'24px'} />
          </NavLink>
          <NavLink to='/message'>
            <FiMessageSquare fontSize={'24px'} />
          </NavLink>
        </Flex>
      </Box>

    </Flex>
  )
}

export default memo(MainPage)