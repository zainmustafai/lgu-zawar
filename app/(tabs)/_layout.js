import { Tabs } from "expo-router";

export default ()=>{
    return (
        <Tabs>
            <Tabs.Screen name="profile"  />
            <Tabs.Screen name="challans"  />
            <Tabs.Screen name="attendance" />
            <Tabs.Screen name="announcements" />
        </Tabs>
    )
}