import { Avatar, Box, Button, Flex, Input, Textarea, Tooltip, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdPermMedia } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import axios from 'axios'

const HomeTweet = () => {
    const [text,setText] = useState("")
    let [pic,setPic] = useState("")
    const toast = useToast()
    const token = JSON.parse(localStorage.getItem('twitteruser'))

    const setProfile=async(pics)=>{
        if (pics === undefined) {
          alert('field are required')
          return;
        }
        // if (pics.type === "image/jpeg" || pics.type === "image/jpg" || pics.type === "image/png" || pics.type === "image/gif") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "chat-app");
          data.append("cloud_name", "dr2fwpzbx");
          const config={
            mode:'no-cors',
          }
          const value= await axios.post('https://api.cloudinary.com/v1_1/dr2fwpzbx/image/upload',data,config)
          setPic(value.data.url)
           
        // } else {
        //   alert('image should be jpg/png formate')
        //   return;
        // }
    }
  
const makePost = async() =>{
    if(!text && !pic){
        alert('please write something')
        return;
    }
    if(!pic){
        pic = ""
    }
    try {
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${token.token}`
            }
        }
       
        // setNewMessage('')
        const data = await axios.post(`http://localhost:8080/post/createpost`,{
            content:text,
            picture:pic,
        },config)
        console.log(data)
    } catch (error) {
        console.log(error.message)
        alert('ohh something went wrong')
    }
 }

    return (
        <Flex w='100%' pt="70px" pb="20px" gap="20px">
            <Box>
                <Avatar h="40px" w='40px' />
            </Box>
            <Flex w='100%' direction={'column'} gap='10px'>
                <Textarea  placeholder='what is happening' fontSize={'22px'} value={text} onChange={(e)=>setText(e.target.value)} />
                <Flex justifyContent={'space-between'} >
                    <Flex gap='30px'>
                        <Tooltip label="media" aria-label='A tooltip' placement='bottom' hasArrow>
                            <Box color="blue.400" >
                            <Input type='file' id="image-media" accept='image/*' display={'none'} onChange={(e)=>setProfile(e.target.files[0])}/>                                
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
                    <Button bg={'blue.400'} colorScheme={'white'} borderRadius={'50px'} onClick={makePost} >
                        tweet
                    </Button>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomeTweet