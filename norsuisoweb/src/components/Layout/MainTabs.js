import {  Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react'

const MainTabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newTab) => {
        setValue(newTab);
      };
    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
            >
                <Tab label="Tab 1" />
                <Tab label="Tab 2" />
                <Tab label="Tab 3" />
            </Tabs>
        </div>
    )
}

export default MainTabs
