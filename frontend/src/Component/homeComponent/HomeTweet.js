import { Avatar, Box, Button, Flex, Input, Textarea, Tooltip, useToast } from '@chakra-ui/react'
import React from 'react'
import { MdPermMedia } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'

const HomeTweet = () => {
    const toast = useToast()

    const setProfile=async(pics)=>{

        if (pics === undefined) {
          toast({
            title: "Please Select an Image!",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/jpg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "chat-app");
          data.append("cloud_name", "dr2fwpzbx");
          const config={
            mode:'no-cors',
          }
          const value= await axios.post('https://api.cloudinary.com/v1_1/dr2fwpzbx/image/upload',data,config)
          setPic(value.data.url)
           
        } else {
          toast({
            title: "failed",
            description:'image should be jpeg/png formate',
            status: "warning",
            duration: 3000,
            isClosable: true,            
            position:'top'
          });
          return;
        }
    }

    return (
        <Flex w='100%' pt="70px" pb="20px" gap="20px">
            <Box>
                <Avatar h="40px" w='40px' />
            </Box>
            <Flex w='100%' direction={'column'} gap='10px'>
                <Textarea wordBreak={"break-all"} wordWrap="break-word" placeholder='what is happening' fontSize={'22px'} />
                <Flex justifyContent={'space-between'} >
                    <Flex gap='30px'>
                        <Tooltip label="media" aria-label='A tooltip' placement='bottom' hasArrow>
                            <Box color="blue.400">
                            {/* <Input type='file'  /> */}
                                <MdPermMedia fontSize="22px" />
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
                    <Button bg={'blue.400'} colorScheme={'white'} borderRadius={'50px'} >
                        tweet
                    </Button>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomeTweet