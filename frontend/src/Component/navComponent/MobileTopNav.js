import { Avatar, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const MobileTopNav = () => {
    return (
        <Flex direction={'column'}>
            <Flex gap='60px' alignContent={'center'}>
                <Avatar />
                <FaTwitter />
            </Flex>
            <Tabs>
                <TabList>
                    <Tab>For You</Tab>
                    <Tab>Following</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default MobileTopNav