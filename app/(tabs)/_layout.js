import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';


export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="announcements"
                options={{
                    tabBarLabel: 'Announcements',
                    tabBarActiveBackgroundColor: '#FF3F00',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="home" size={20} />
                    }
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarActiveBackgroundColor: '#FF3F00',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="user" size={30} />
                    }

                }} />
            <Tabs.Screen name="challans"
                options={{
                    tabBarLabel: 'Challans',
                    tabBarActiveBackgroundColor: '#FF3F00',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="file" size={20} />
                    }
                }}
            />
            <Tabs.Screen name="attendance"
                options={{
                    tabBarLabel: 'Attendance',
                    tabBarActiveBackgroundColor: '#FF3F00',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="calendar" size={20} />
                    }
                }}
            />
            <Tabs.Screen name="Teacherdashboard"
                options={{
                    tabBarLabel: 'Teacher',
                    tabBarActiveBackgroundColor: '#FF3F00',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="dashboard" size={20} />
                    }
                }}
            />
        </Tabs>
    )
}