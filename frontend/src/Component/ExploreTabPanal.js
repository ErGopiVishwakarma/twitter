import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const ExploreTabPanal = () => {
    return (
        <Tabs position={'relative'} w='100%'>
            <TabList display={'flex'} justifyContent={'space-evenly'} variant="unstyled" >
                <Tab>For You</Tab>
                <Tab>Trending</Tab>
                <Tab>News</Tab>
                <Tab>Sports</Tab>
                <Tab display={{base:'none',md:'block'}}>Entertainment</Tab>
            </TabList>

            <TabPanels>
            </TabPanels>
        </Tabs>
    )
}

export default ExploreTabPanal