import {
  Drawer,
  DrawerBody,
  DrawerFooter,
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
  Box,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import React from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { BsBookmark, BsList, BsTwitter } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'



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
                <NavLink to={`profile/${token.user._id}`}><Avatar /></NavLink>
                <Flex direction={'column'}>
                  <Heading fontSize={'17px'}>Gopi vishwakarma</Heading>
                  <Text>@gopi12345</Text>
                </Flex>
                <Flex gap='20px'>
                  <Text>Followers</Text>
                  <Text>Following</Text>
                </Flex>
              </Flex>

              <Flex direction={'column'} gap='20px'>
                <NavLink to={`profile/${token.user._id}`}>
                  <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                    <BiUserPlus fontSize={'30px'} />
                    <Heading fontSize='18px'>Profile</Heading>
                  </Flex>
                </NavLink>
                <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                  <BsTwitter fontSize={'30px'} color='blue.400' />
                  <Heading fontSize='18px'>twitter blue</Heading>
                </Flex>
                <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                  <BsList fontSize={'30px'} />
                  <Heading fontSize='18px'>List</Heading>
                </Flex>
                <NavLink to='/bookmark'>
                  <Flex gap='20px' alignItems={'center'} onClick={onClose}>
                    <BsBookmark fontSize={'30px'} />
                    <Heading fontSize='18px'>Bookmark</Heading>
                  </Flex>
                </NavLink>
              </Flex>

              {/* accordian  */}
              <Accordion defaultIndex={[0]} allowMultiple w='100%'>
                <AccordionItem>
                  <AccordionButton display={'flex'} justifyContent={'space-between'}>
                    <Text fontSize={'17px'}>Creater Studio</Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} >
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                  <AccordionButton display={'flex'} justifyContent={'space-between'}>
                    <Text fontSize={'17px'}>Professional Tools</Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} >
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                  <AccordionButton display={'flex'} justifyContent={'space-between'}>
                    <Text fontSize={'17px'}>Setting and Support</Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel display={'flex'} direction='column' gap='15px'>
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                    <Flex gap='25px' alignItems={'center'}>
                      <BiUserPlus fontSize={'22px'} />
                      <Text fontSize='15px'>Analytics</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}