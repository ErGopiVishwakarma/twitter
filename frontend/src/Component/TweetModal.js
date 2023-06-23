
import React, { useContext, useEffect, useState } from 'react'
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
    Select,
} from '@chakra-ui/react'

import { MdPermMedia } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import axios from 'axios'
import '../Style/comment.css'
import { ContextProvider } from '../Route/ContextApi'

const TweetModal = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = JSON.parse(localStorage.getItem('twitteruser'))
    const [text, setText] = useState()
    const [pic, setPic] = useState("")
    const [loading, setLoading] = useState(true)
    const [imageSelect, setImageSelect] = useState(false)
    const {setHomeUpdate} = useContext(ContextProvider)

    const setProfile = async (pics) => {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "dr2fwpzbx");
        const config = {
            mode: 'no-cors',
        }
        setImageSelect(true)
        const value = await axios.post('https://api.cloudinary.com/v1_1/dr2fwpzbx/image/upload', data, config)
        setPic(value.data.url)
        setImageSelect(false)
    }

    const makePost = async () => {
        if (!text && !pic) {
            alert('please write something')
            return;
        }
        if (!pic) {
            pic = ""
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            const data = await axios.post(`http://localhost:8080/post/createpost`, {
                content: text,
                picture: pic,
            }, config)
            setHomeUpdate(prev=>!prev)
            setText('')
            setPic('')
        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }
    useEffect(() => {
        if (imageSelect) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [imageSelect])

    useEffect(() => {
        if (text) {
            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [text])


    return (
        <>
            <Box onClick={()=>onOpen()} >{children}</Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <Flex gap="20px">
                            <Box>
                                <Avatar src={token?.pic} h="40px" w='40px' />
                            </Box>
                            <Flex direction={'column'} w='100%'>
                                <Select h={'25px'} w="150px" display={'flex'} alignItems={'center'} justifyContent={'center'} color={'blue.500'}>
                                    <option value="everyone">everyone</option>
                                    <option value="twitter circle">twitter circle</option>
                                </Select>
                                <Textarea w="100%" placeholder='what is happening' fontSize={'22px'} value={text} minH="100px" onChange={(e) => setText(e.target.value)}
                                    variant={'unstyled'}
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
                        <Text color={'blue.500'} >everyone can reply</Text>
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

                        <Button colorScheme='blue' mr={3} borderRadius={'50px'} onClick={makePost} isDisabled={loading}>
                            tweet
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TweetModal