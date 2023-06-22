import { Avatar, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import React from 'react'
import LCSF from './LCSF'
import { NavLink } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiUserPlus } from 'react-icons/bi'
import { RiFlag2Line } from 'react-icons/ri'
import { BsCodeSlash } from 'react-icons/bs'
import DeleteModal from '../DeleteModal'


const Post = ({ el }) => {
    const token = JSON.parse(localStorage.getItem('twitteruser'))
    return (
        <Flex gap="20px" w="100%">
            <Box>
                <NavLink to={`profile/${el.postedBy._id}`}>
                    <Avatar src={el.postedBy.pic} h={{ base: '30px', sm: '40px', md: "40px" }} w={{ base: '30px', sm: '40px', md: "40px" }} />
                </NavLink>
            </Box>
            <Flex w='100%' direction={'column'} alignItems={'flex-start'} gap="8px">
                <Flex justifyContent={'space-between'} w="100%" >
                    <NavLink to={`profile/${el.postedBy._id}`}>
                        <Heading fontSize="18px">{el.postedBy.name}</Heading>
                    </NavLink>
                    {/* delete functionality here  */}
                    <Menu>
                        <MenuButton>
                            <Heading fontSize={'20px'}>...</Heading>
                        </MenuButton>
                        <MenuList>
                            <MenuItem color='red' display={el.postedBy._id === token.user._id ? "block" : 'none'}>
                                <DeleteModal postId={el._id} />
                            </MenuItem>
                            <MenuItem>
                                <Flex gap='10px' alignItems={'center'}>
                                    <BiUserPlus fontSize={'22px'} />
                                    <Text>Follow</Text>
                                </Flex>
                            </MenuItem>
                            <MenuItem >
                                <Flex gap='10px' alignItems={'center'}>
                                    <BsCodeSlash fontSize={'22px'} />
                                    <Text>Emmbed</Text>
                                </Flex>
                            </MenuItem>
                            <MenuItem>
                                <Flex gap='10px' alignItems={'center'}>
                                    <RiFlag2Line fontSize={'22px'} />
                                    <Text>Report</Text>
                                </Flex>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    {/* till here  */}

                </Flex>
                <NavLink to={`post/${el._id}`}>
                    
                        <Text w='100%' display={'flex'} wordBreak={'break-all'}>{el.content}</Text>
                  
                </NavLink>
                <Box borderRadius={{ base: "15px", md: '25px' }} w="100%">
                    <Image src={el.picture} borderRadius={{ base: "15px", md: '25px' }} />
                </Box>
                <LCSF postId={el._id} user={el} />
            </Flex>
        </Flex>
    )
}

export default Post