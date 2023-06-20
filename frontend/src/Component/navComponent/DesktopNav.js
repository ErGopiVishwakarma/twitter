import React, { ReactNode } from 'react';
import {
    Avatar,
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Text,
    Button,
    Heading,
} from '@chakra-ui/react';
import {
    FiHome,
    FiMenu,
    FiBell,
    FiSearch,
    FiMessageSquare,
    FiList,
    FiBookmark,
    FiUser,
    FiCheck,
} from 'react-icons/fi';
import { VscTwitter } from "react-icons/vsc"
import { NavLink } from 'react-router-dom';
import TweetModal from '../TweetModal';

const LinkItems = [
    { name: 'Home', icon: FiHome, link: '/' },
    { name: 'Explore', icon: FiSearch, link: '/explore' },
    { name: 'Notifications', icon: FiBell, link: '/notification' },
    { name: 'Messages', icon: FiMessageSquare, link: '/message' },
    { name: 'Lists', icon: FiList, link: '/list' },
    { name: 'Bookmarks', icon: FiBookmark, link: '/bookmark' },
    { name: 'Veirfied', icon: FiCheck, link: '/verified' },
    { name: 'Profile', icon: FiUser, link: '/profile' },
    { name: 'More', icon: FiMenu, link: '/more' },
];

export default function DesktopNav() {
    return (
        <Box maxH="100vh" overflowY={'auto'} w='100%' pb='20px'
            css={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'gray',
                    borderRadius: '24px',
                },
            }}
        >
            <Flex direction={'column'} overflow={'srcoll'} w='100%' pr='50px'>
                <Flex alignItems="center" justifyContent="space-between" >
                    <Box p='11px' cursor={'pointer'} _hover={{ bg: 'gray.200' }} borderRadius={'50%'}>
                        <VscTwitter color='#1D9BF0' fontSize={'35px'} />
                    </Box>
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} link={link.link}>
                        {link.name}
                    </NavItem>
                ))}

                {/* extra added code for identification  */}
                <TweetModal />
                <Flex justifyContent={'space-between'} alignItems={'center'} p="10px" _hover={{ backgroundColor: 'gray.200' }} borderRadius={'50px'} cursor={'pointer'}>
                    <Flex gap='10px'>
                        <Avatar w='35px' h='35px' src="" name='gopi vish' />
                        <Flex direction={'column'}>
                            <Heading fontSize={'15px'}>
                                Gopi
                            </Heading>
                            <Text fontSize={'15px'}>@gopi12345</Text>
                        </Flex>
                    </Flex>
                    <Link><Heading fontSize={'18px'}>...</Heading></Link>
                </Flex>
                {/* till here ..... */}
            </Flex>
        </Box>
    );
}


const NavItem = ({ icon, children, link }) => {
    return (
        <NavLink to={link} style={{ textDecoration: 'none' }} >
            <Flex
                borderRadius={'50px'}
                _hover={{ backgroundColor: 'gray.200' }}
                fontSize={'20px'}
                align="center"
                p='11px'
                role="group"
                cursor="pointer">
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="20"
                        as={icon}
                        color={'blackAlpha.900'}
                        fontWeight={'bolder'}
                    />
                )}
                {children}
            </Flex>
        </NavLink>
    );
};