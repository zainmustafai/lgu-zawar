import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';


export default () => {
    return (
        <Tabs
        >
            <Tabs.Screen name="profile"
                options={{
                    tabBarLabel: '',
                    tabBarActiveBackgroundColor: '#eee',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="home" size={30} color={'#00AC5F'} />
                    }

                }} />

            <Tabs.Screen name="announcements"
                options={{

                    tabBarLabel: '',
                    tabBarActiveBackgroundColor: '#eee',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="bell" size={25} color={'#00AC5F'} />
                    }
                }}
            />
            <Tabs.Screen name="attendance"
                options={{
                    tabBarLabel: '',
                    tabBarActiveBackgroundColor: '#eee',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="calendar" size={25} color={'#00AC5F'} />
                    }
                }}
            />
            <Tabs.Screen name="Teacherdashboard"
                options={{
                    tabBarLabel: '',
                    tabBarActiveBackgroundColor: '#eee',
                    tabBarAllowFontScaling: true,
                    tabBarIcon: () => {
                        return <Icon name="dashboard" size={25} color={'#00AC5F'} />
                    }
                }}
            />
        </Tabs>
    )
}