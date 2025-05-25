import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { ComponentProps } from 'react';
import { useTheme } from 'styled-components/native';
import {
  StyledIcon,
  getTabBarStyle,
  getTabBarItemStyle,
  getTabBarLabelStyle,
} from './styles';

function TabBarIcon(props: {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <StyledIcon size={28} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarStyle: getTabBarStyle(theme),
        tabBarItemStyle: getTabBarItemStyle(),
        tabBarLabelStyle: getTabBarLabelStyle(theme),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Afinador',
          tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="preferences"
        options={{
          title: 'Preferências',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
} 