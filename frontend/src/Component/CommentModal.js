import React, { useState } from 'react'
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
    Avatar,
    Heading,
    Text,
    Box,
    Input,
    Tooltip,
    Textarea,
} from '@chakra-ui/react'
import { MdPermMedia } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import axios from 'axios'
import '../Style/comment.css'

const CommentModal = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [pic, setPic] = useState("")

    const setProfile = async (pics) => {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "dr2fwpzbx");
        const config = {
            mode: 'no-cors',
        }
        const value = await axios.post('https://api.cloudinary.com/v1_1/dr2fwpzbx/image/upload', data, config)
        setPic(value.data.url)
    }
    return (
        <>
            <Button variant={'unstyled'} onClick={onOpen}>{children}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton textAlign={'left'} />
                    </ModalHeader>


                    <ModalBody>
                        <Flex direction={'column'} gap="50px">
                            <Flex gap="20px" w="100%">
                                <Box>
                                    <Avatar src='' h="40px" w='40px' />
                                </Box>
                                <Flex w='100%' direction={'column'} alignItems={'flex-start'} gap="8px">
                                    <Flex justifyContent={'space-between'} w="100%" >
                                        <Heading fontSize="18px">gopi</Heading>
                                    </Flex>
                                    <Text fontSize="18px">
                                        giiii
                                    </Text>
                                    <Text fontSize="18px">
                                        replying to : @gopi vishwaka
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex gap="20px" w="100%">
                                <Box>
                                    <Avatar src='' h="40px" w='40px' />
                                </Box>
                                <Flex w='100%' direction={'column'} alignItems={'flex-start'} gap="8px">
                                    <Textarea id="commentInput" placeholder='Tweet your reply!' fontSize={'20px'} variant={'unstyled'} minH={'100px'}
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
                                    />

                                </Flex>
                            </Flex>
                        </Flex>
                    </ModalBody>

                    <ModalFooter display={'flex'} justifyContent={'space-between'}>

                        <Flex gap='20px'>
                            <Tooltip label="media" aria-label='A tooltip' placement='bottom' hasArrow>
                                <Box color="blue.400" >
                                    <Input type='file' id="image-media" accept='image/*' display={'none'} onChange={(e) => setProfile(e.target.files[0])} />
                                    <label for="image-media"><MdPermMedia fontSize="20px" cursor={'pointer'} /></label>
                                </Box>
                            </Tooltip>
                            <Tooltip label="gif" aria-label='A tooltip' placement='bottom' hasArrow>
                                <Box color="blue.400">
                                    <AiOutlineFileGif fontSize="20px" />
                                </Box>
                            </Tooltip>
                            <Tooltip label="poll" aria-label='A tooltip' placement='bottom' hasArrow>
                                <Box color="blue.400">
                                    <BiPoll fontSize="20px" />
                                </Box>
                            </Tooltip>
                            <Tooltip label="emoji" aria-label='A tooltip' placement='bottom' hasArrow>
                                <Box color="blue.400">
                                    <BsEmojiSmile fontSize="20px" />
                                </Box>
                            </Tooltip>
                        </Flex>
                        <Button colorScheme='blue' mr={3} borderRadius={'50px'} >
                            Reply
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CommentModal