import Tabs from "./tabs";
import './styles.css'

export default function TabsTest() {

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for tab1</div>
        }, {
            label: 'Tab 2',
            content: <div>This is content for tab2</div>
        }, {
            label: 'Tab 3',
            content: <div>This is content for tab3</div>
        }
    ];

    return (
        <Tabs tabsContent={tabs} onChange={handleChange} />
    );
}