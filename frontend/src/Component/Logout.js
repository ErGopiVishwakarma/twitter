import React, { memo, useContext } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
    Text,
    Heading,
    useToast,
} from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
import { ContextProvider } from '../Route/ContextApi'
import { useNavigate } from 'react-router-dom'

const Logout = ({children}) => {
    const {setHomeUpdate} = useContext(ContextProvider)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = JSON.parse(localStorage.getItem('twitteruser'))
    const toast = useToast()
    const navigate = useNavigate()

    const logOut = async () => {
       localStorage.removeItem('twitteruser')
       window.location.reload()
       navigate('/auth')
    }

    return (
        <>
            <Flex w='100%' onClick={onOpen} gap='10px' alignItems={'center'}>
                {children}
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size={'xs'}>
                <ModalContent p='12px'>

                    <ModalBody>
                        <Flex direction={'column'}>
                            <Heading fontSize={'20px'}>Logout</Heading>
                            <Text fontSize={'14px'}>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.</Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Flex direction={'column'} w='100%' gap='10px'>
                            <Button colorScheme='red' borderRadius={'50px'} onClick={logOut}>
                              Logout
                            </Button>
                            <Button onClick={onClose} borderRadius={'50px'} borderColor={'black'} variant='outline'>Cancel</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(Logout)