//import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";


export default function Tabs({tabsContent, onChange}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    //console.log("Tabs content is",tabsContent)
    function handleClick(index) {
       setCurrentTabIndex(index);
       onChange(index); 
    } 

    return (
        <div className="tabs-wrapper">
            <div className="tabs-header">
                {
                   tabsContent.map((tabItem, index) => {
                    return (
                        <div className={`tab-item ${currentTabIndex === index ? 'active' : ""}`} onClick={() => handleClick(index)} key={tabItem.label}>
                            <span className="label">{tabItem.label}</span>
                        </div>
                    )
                   }) 
                }
            </div>
            <div className="content" style={{color: 'red'}}>
                {
                    tabsContent[currentTabIndex] && 
                        tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    );
}