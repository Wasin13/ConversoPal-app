import React from 'react';
import { Tabs } from 'expo-router';
import { Image, ImageStyle, TextStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type TabBarIconProps = {
  name: string;
  focused: boolean;
};

const TabBarIcon = ({ name, focused }: TabBarIconProps) => {
  const icons: Record<string, any> = {
    home: require('@/assets/images/house icon 3d.png'),
    lessons: require('@/assets/images/lesson icon 3d.png'),
    roommate: require('@/assets/images/yunjin fade.png'),
    progress: require('@/assets/images/progress icon 3d.png'),
    profile: require('@/assets/images/hannah avatar.png'),
  };

  const iconStyle: ImageStyle = {
    height: name === 'roommate' ? (focused ? 60 : 35) : (focused ? 30 : 25), // Adjust size for focused and specific icons
    width: name === 'roommate' ? (focused ? 60 : 35) : (focused ? 30 : 25),
  };

  return <Image source={icons[name]} style={iconStyle} />;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Set active tab label color to blue
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: 'white' }, // Set taskbar background to white
        tabBarLabelStyle: { fontSize: 12 }, // Adjust font size if needed
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Lessons"
        options={{
          title: 'Lessons',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="lessons" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Roommate"
        options={{
          title: 'Your roommate',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="roommate" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="progress" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
