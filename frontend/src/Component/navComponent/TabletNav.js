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

const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Explore', icon: FiSearch },
    { name: 'Notifications', icon: FiBell },
    { name: 'Messages', icon: FiMessageSquare },
    { name: 'Lists', icon: FiList },
    { name: 'Bookmarks', icon: FiBookmark },
    { name: 'Veirfied', icon: FiCheck },
    { name: 'Profile', icon: FiUser },
    { name: 'More', icon: FiMenu },
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
                    <NavItem key={link.name} icon={link.icon}>
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


const NavItem = ({ icon, children }) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} >
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
        </Link>
    );
};