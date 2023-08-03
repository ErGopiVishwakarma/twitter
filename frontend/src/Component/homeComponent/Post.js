import { Avatar, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,} from '@chakra-ui/react'
import React, { memo } from 'react'
import LCSF from './LCSF'
import { NavLink } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiUserPlus } from 'react-icons/bi'
import { RiFlag2Line } from 'react-icons/ri'
import { BsCodeSlash } from 'react-icons/bs'
import DeleteModal from '../DeleteModal'


const Post = ({ el }) => {

    const token = JSON.parse(localStorage.getItem('twitteruser'))
    const date = new Date()
    const postDate = new Date(`${el.createdAt}`)
    let second = Math.floor(((date - postDate) / 1000) / 3600)
    let b = postDate.getDate()
    let a = postDate.toLocaleString('default', { month: 'long' }).substring(0, 3)

    return (
        <Flex gap="20px" w="100%" p={{base:'10px',sm:'15px'}} _hover={{ backgroundColor: 'gray.100' }} boxShadow={'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}>
            <Box>
                <NavLink to={`profile/${el?.postedBy?._id}`}>
                    <Avatar src={el.postedBy.pic} h={{ base: '30px', sm: '40px', md: "40px" }} w={{ base: '30px', sm: '40px', md: "40px" }} />
                </NavLink>
            </Box>
            <Flex w='100%' direction={'column'} alignItems={'flex-start'} gap="8px">
                <Flex justifyContent={'space-between'} w="100%" alignItems={'center'} >
                    <NavLink to={`profile/${el?.postedBy?._id}`}>
                        <Flex alignItems={'center'} gap='3px' display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
                            <Text fontSize={'15px'} fontWeight={'bold'} color="gray.700">{el?.postedBy.name.replaceAll(" ", "").substring(0, 8)}.</Text>
                            <Text fontSize={'14px'} fontWeight={'bold'} color="gray.500">@{el?.postedBy.name.toLowerCase().replaceAll(" ", "").substring(0, 8)}.</Text>

                            {
                                second < 24 ? <Text pl='15px' fontSize={'13px'} fontWeight={'bold'} color="gray.600">{second}h ago</Text> :
                                    <Text pl='15px' fontSize={'13px'} fontWeight={'bold'} color="gray.600">{`${a} ${b}`}</Text>
                            }
                        </Flex>
                        <Flex alignItems={'center'} gap='3px' display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
                            <Text fontSize={'15px'} fontWeight={'bold'} color="gray.700">{el?.postedBy.name.substring(0, 12)}...</Text>
                            <Text fontSize={'14px'} fontWeight={'bold'} color="gray.500">@{el?.postedBy.name.toLowerCase().replaceAll(" ", "").substring(0, 12)}</Text>

                            {
                                second < 24 ? <Text pl='15px' fontSize={'13px'} fontWeight={'bold'} color="gray.600">{second}h ago</Text> :
                                    <Text pl='15px' fontSize={'13px'} fontWeight={'bold'} color="gray.600">{`${a} ${b}`}</Text>
                            }
                        </Flex>
                    </NavLink>
                    {/* delete functionality here  */}
                    <Menu boxShadow={'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'} direction='rtl'>
                        <MenuButton p='auto'  >
                            <Heading fontWeight={'bolder'} fontSize={'20px'}>...</Heading>
                        </MenuButton>
                        <MenuList>
                            <MenuItem color='red' display={el?.postedBy?._id === token._id ? "block" : 'none'}>
                                <DeleteModal postId={el?._id} />
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
                <NavLink to={`/post/${el?._id}`}>

                    <Text w='100%' display={'flex'} wordBreak={'break-all'}>{el?.content}</Text>

                </NavLink>
                <Box borderRadius={{ base: "15px", md: '17px' }} w="100%">
                    <Image src={el?.picture} borderRadius={{ base: "15px", md: '17px' }} maxH='500px'

                    />
                </Box>
                <LCSF postId={el?._id} user={el} />
            </Flex>
        </Flex>
    )
}

export default memo(Post)