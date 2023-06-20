import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const ExploreTabPanal = () => {
    return (
        <Tabs position={'relative'}>
            <TabList display={'flex'} justifyContent={'space-evenly'} variant="unstyled" >
                <Tab>For You</Tab>
                <Tab>Trending</Tab>
                <Tab>News</Tab>
                <Tab>Sports</Tab>
                <Tab>Entertainment</Tab>
            </TabList>

            <TabPanels>
                {/* <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel> */}
            </TabPanels>
        </Tabs>
    )
}

export default ExploreTabPanal