import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from '@gorhom/animated-tabbar';
import {theme} from '../components';
import ExploreStack from './ExploreStack';
import SettingStack from './SettingStack';

import {MainTabsParams} from '../types';
import {
  JobSVG,
  ReportSVG,
  NotificationSVG,
  SettingSVG,
} from './NavigationBarIcon';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ScreenB from '../containers/ScreenB/ScreenB';

const Tab = createBottomTabNavigator<MainTabsParams>();
const bubbleBackground = theme.colors.secondary;
const tabs: TabsConfig<BubbleTabBarItemConfig, MainTabsParams> = {
  TabA: {
    labelStyle: {
      color: theme.colors.primary,
    },
    icon: {
      component: JobSVG,
      activeColor: theme.colors.primary,
      inactiveColor: theme.colors.primary,
    },
    background: {
      activeColor: bubbleBackground,
      inactiveColor: theme.colors.background2,
    },
  },
  TabB: {
    labelStyle: {
      color: theme.colors.primary,
    },
    icon: {
      component: ReportSVG,
      activeColor: theme.colors.primary,
      inactiveColor: theme.colors.primary,
    },
    background: {
      activeColor: bubbleBackground,
      inactiveColor: theme.colors.background2,
    },
  },
  TabC: {
    labelStyle: {
      color: theme.colors.primary,
    },
    icon: {
      component: NotificationSVG,
      activeColor: theme.colors.primary,
      inactiveColor: theme.colors.primary,
    },
    background: {
      activeColor: bubbleBackground,
      inactiveColor: theme.colors.background2,
    },
  },
  TabD: {
    labelStyle: {
      color: theme.colors.primary,
    },
    icon: {
      component: SettingSVG,
      activeColor: theme.colors.primary,
      inactiveColor: theme.colors.primary,
    },
    background: {
      activeColor: bubbleBackground,
      inactiveColor: theme.colors.background2,
    },
  },
};

export default function TabsNavigator() {
  const setTabBarVisible = (route: any): 'none' | 'flex' => {
    let displayTab: 'none' | 'flex' = 'flex';
    if (Array.isArray(route)) {
      for (let i = 0; i < route.length; i++) {
        const routeName = getFocusedRouteNameFromRoute(route[i]);
        const hideOnScreens = ['ScreenB'];
        if (hideOnScreens.indexOf(routeName || '') > -1) {
          displayTab = 'none';
          break;
        }
        displayTab = 'flex';
      }
    }
    return displayTab;
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabA"
        initialParams={{
          backgroundColor: tabs.TabA.labelStyle.color,
          nextScreen: 'TabB',
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => <JobSVG size={size} color={color} />,
        }}
        component={ScreenB}
      />
      <Tab.Screen
        name="TabB"
        initialParams={{
          backgroundColor: tabs.TabB.labelStyle.color,
          nextScreen: 'TabC',
        }}
        options={{
          tabBarIcon: ({size, color}) => (
            <ReportSVG size={size} color={color} />
          ),
        }}
        component={SettingStack}
      />
      <Tab.Screen
        name="TabC"
        initialParams={{
          backgroundColor: tabs.TabC.labelStyle.color,
          nextScreen: 'TabD',
        }}
        options={{
          tabBarIcon: ({size, color}) => (
            <NotificationSVG size={size} color={color} />
          ),
        }}
        component={SettingStack}
      />
      <Tab.Screen
        name="TabD"
        initialParams={{
          backgroundColor: tabs.TabD.labelStyle.color,
          nextScreen: 'TabA',
        }}
        options={{
          tabBarIcon: ({size, color}) => (
            <SettingSVG size={size} color={color} />
          ),
        }}
        component={SettingStack}
      />
    </Tab.Navigator>
  );
}
