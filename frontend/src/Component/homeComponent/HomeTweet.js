import { Avatar, Box, Button, Flex, Input, Textarea, Tooltip, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { MdPermMedia } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import axios from 'axios'
import { ContextProvider } from '../../Route/ContextApi'

const HomeTweet = () => {
    const [text, setText] = useState("")
    let [pic, setPic] = useState("")
    const toast = useToast()
    const [loading, setLoading] = useState(true)
    const [imageSelect, setImageSelect] = useState(false)
    const token = JSON.parse(localStorage.getItem('twitteruser'))
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
        <Flex w='100%'  pb="20px" gap="20px" display={{base:'none',md:'flex'}}>
            <Box>
                <Avatar src={token.user?.pic} h="40px" w='40px' />
            </Box>
            <Flex w='100%' direction={'column'} gap='10px'>
                <Textarea placeholder='what is happening' fontSize={'22px'} value={text} minH="80px" onChange={(e) => setText(e.target.value)}
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
                <Flex justifyContent={'space-between'} >
                    <Flex gap={{base:'20px',sm:'30px'}}>
                        <Tooltip label="media" aria-label='A tooltip' placement='bottom' hasArrow>
                            <Box color="blue.400" >
                                <Input type='file' id="image-media" accept='image/*' display={'none'} onChange={(e) => setProfile(e.target.files[0])} />
                                <label for="image-media"><MdPermMedia fontSize="22px" cursor={'pointer'} /></label>
                            </Box>
                        </Tooltip>
                        <Tooltip label="gif" aria-label='A tooltip' placement='bottom' hasArrow>
                            <Box color="blue.400">
                                <AiOutlineFileGif fontSize="22px" />
                            </Box>
                        </Tooltip>
                        <Tooltip label="poll" aria-label='A tooltip' placement='bottom' hasArrow>
                            <Box color="blue.400">
                                <BiPoll fontSize="22px" />
                            </Box>
                        </Tooltip>
                        <Tooltip label="emoji" aria-label='A tooltip' placement='bottom' hasArrow>
                            <Box color="blue.400">
                                <BsEmojiSmile fontSize="22px" />
                            </Box>
                        </Tooltip>
                    </Flex>
                    <Button bg={'blue.400'} colorScheme={'white'} borderRadius={'50px'} onClick={makePost} isDisabled={loading} >
                        tweet
                    </Button>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomeTweet