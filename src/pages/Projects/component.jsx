import { useState } from "react";
import {Tab, Tabs} from '@mui/material';
import InnerPageBanner from "../../components/InnerPageBanner";
import TabPanel from "../../components/TabPanel";
import ProjectsList from "./components/ProjectsList";

export default function ProjectsPage() {

    const [tabValue, setTabValue] = useState(0);
    
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    return(
        <section className="projects-page">
            <InnerPageBanner title="Projects"/>
            <div className="content-section">
                <div className="projects-page__tab-header">
                    <Tabs 
                        value={tabValue} 
                        onChange={handleTabChange} 
                        centered  
                        sx={{"& button.Mui-selected": {color: '#F54E4E'} }}
                        indicatorColor='#F54E4E'
                        TabIndicatorProps={{
                            style: {
                              backgroundColor: "#F54E4E",
                            }
                          }}
                    >
                        <Tab label="CODING"/>
                        <Tab label="DESIGN"/>
                    </Tabs>
                </div>
                <div className="projects-page__tab-contents">
                    <TabPanel value={tabValue} index={0}>
                        <ProjectsList/>
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        ITEM TWO
                    </TabPanel>
                </div>
            </div>
        </section>
    )
}