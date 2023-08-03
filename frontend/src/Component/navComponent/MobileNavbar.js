import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Avatar,
  Heading,
  Text,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from '@chakra-ui/react'
import React from 'react'
import { BiUser, BiUserPlus } from 'react-icons/bi'
import { BsBookmark, BsList, BsLock, BsTwitter } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import DeleteModal from '../DeleteModal'
import Logout from '../Logout'



export default function MobileNavbar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const token = JSON.parse(localStorage.getItem('twitteruser'))


  return (
    <>
      <Button variant={'unstyled'} ref={btnRef} colorScheme='teal' onClick={onOpen}>
        {children}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Account Info</DrawerHeader>

          <DrawerBody>
            <Flex direction={'column'} gap='20px'>
              <Flex direction={'column'} gap='15px'>
                <NavLink to={`profile/${token._id}`}><Avatar src={token.pic} /></NavLink>
                <Flex direction={'column'}>
                  <Heading fontSize={'17px'}>{token.name}</Heading>
                  <Text>@{token.username}</Text>
                </Flex>
                <Flex gap='20px'>
                  <Text>{token.followers.length} Followers</Text>
                  <Text>{token.following.length} Following</Text>
                </Flex>
              </Flex>

              <Flex direction={'column'} gap='20px'>
                <NavLink to={`profile/${token._id}`}>
                  <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                    <BiUser fontSize={'28px'} />
                    <Heading fontSize='18px'>Profile</Heading>
                  </Flex>
                </NavLink>
                <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                  <FaTwitter fontSize={'28px'} color='blue.400' />
                  <Heading fontSize='18px'>twitter blue</Heading>
                </Flex>
                <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                  <BsList fontSize={'28px'} />
                  <Heading fontSize='18px'>List</Heading>
                </Flex>
                <NavLink to='/bookmark'>
                  <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                    <BsBookmark fontSize={'27px'} />
                    <Heading fontSize='18px'>Bookmark</Heading>
                  </Flex>
                </NavLink>
                
                  <Logout>
                  <Flex gap='20px' alignItems={'center'}>
                    <BsLock fontSize={'27px'} />
                    <Heading fontSize='18px'>Logout</Heading>
                  </Flex>
                  </Logout>
                
              </Flex>

              {/* accordian  */}
              <Accordion allowMultiple w='100%'>
                <AccordionItem>
                  <AccordionButton display={'flex'} justifyContent={'space-between'}>
                    <Text fontSize={'17px'}>Creater Studio</Text>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionItem>


                <AccordionItem>
                  <AccordionButton display={'flex'} justifyContent={'space-between'}>
                    <Text fontSize={'17px'}>Professional Tools</Text>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionItem>


                <AccordionItem>
                  <AccordionButton display={'flex'} justifyContent={'space-between'}>
                    <Text fontSize={'17px'}>Setting and Support</Text>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionItem>
              </Accordion>

            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}