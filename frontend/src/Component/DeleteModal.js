import React, { useContext } from 'react'
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

const DeleteModal = ({ postId }) => {
    const {setHomeUpdate} = useContext(ContextProvider)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = JSON.parse(localStorage.getItem('twitteruser'))
    const toast = useToast()

    const deletePost = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            axios.delete(`http://localhost:8080/post/deletepost/${postId}`, config).then(res => {
                console.log(res)
                onClose()
                setHomeUpdate(prev=>!prev)
            }).catch(err => {
                toast({
                    title: 'error',
                    description: "something went wrong",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    placement: 'top'
                })
                onClose()
            })
        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }

    return (
        <>
            <Flex w='100%' onClick={onOpen} gap='10px' alignItems={'center'}>
                <AiOutlineDelete fontSize={'22px'} />
                <Text >Delete</Text>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size={'xs'}>
                <ModalContent p='12px'>

                    <ModalBody>
                        <Flex direction={'column'}>
                            <Heading fontSize={'20px'}>Delete Tweet?</Heading>
                            <Text fontSize={'14px'}>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.</Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Flex direction={'column'} w='100%' gap='10px'>
                            <Button colorScheme='red' borderRadius={'50px'} onClick={deletePost}>
                                Delete
                            </Button>
                            <Button onClick={onClose} borderRadius={'50px'} borderColor={'black'} variant='outline'>Cancel</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteModal