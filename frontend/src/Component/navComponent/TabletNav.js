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

const LinkItems = [
    { name: 'Home', icon: FiHome,link:'/' },
    { name: 'Explore', icon: FiSearch,link:'/explore' },
    { name: 'Notifications', icon: FiBell,link:'/notification' },
    { name: 'Messages', icon: FiMessageSquare,link:'/message' },
    { name: 'Lists', icon: FiList ,link:'/list'},
    { name: 'Bookmarks', icon: FiBookmark ,link:'/bookmark'},
    { name: 'Veirfied', icon: FiCheck ,link:'/verified'},
    { name: 'Profile', icon: FiUser,link:'/profile' },
    { name: 'More', icon: FiMenu ,link:'/more'},
];

export default function TabletNav() {
    return (
        <Box maxH="100vh" overflowY={'scroll'} w='100%'>
            <Flex direction={'column'} overflow={'srcoll'} w='100%'>
                <Flex alignItems="center" mx="8" justifyContent="space-between" >
                    <Box p='11px' _hover={{ bg: 'pink' }} borderRadius={'50%'}>
                        <VscTwitter color='#1D9BF0' fontSize={'35px'} />
                    </Box>
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} link={link.link}>
                        {link.name}
                    </NavItem>
                ))}

                {/* extra added code for identification  */}
                <Button p='6' mx='8' bg='blue.400' borderRadius={'50px'}>tweet</Button>
                
                    <Box>
                        <Avatar w='35px' h='35px' src="" name='gopi vish' />
                    </Box>
                {/* till here ..... */}
            </Flex>
        </Box>
    );
}


const NavItem = ({ icon,link}) => {
    return (
        <NavLink to={link} style={{ textDecoration: 'none' }} >
            <Flex
                fontSize={'20px'}
                align="center"
                px="4"
                py='3'
                mx="8"
                role="group"
                cursor="pointer">
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="20"
                        as={icon}
                        color={'blackAlpha.900'}
                    />
                )}
              
            </Flex>
        </NavLink>
    );
};