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
  const setTabBarVisible = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['Booking'];
    if (hideOnScreens.indexOf(routeName || '') > -1) {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: theme.colors.background2,
        },
      }}
      tabBar={props => <AnimatedTabBar iconSize={20} tabs={tabs} {...props} />}>
      <Tab.Screen
        name="TabA"
        initialParams={{
          backgroundColor: tabs.TabA.labelStyle.color,
          nextScreen: 'TabB',
        }}
        component={ExploreStack}
        options={({route}) => ({
          tabBarVisible: setTabBarVisible(route),
        })}
      />
      <Tab.Screen
        name="TabB"
        initialParams={{
          backgroundColor: tabs.TabB.labelStyle.color,
          nextScreen: 'TabC',
        }}
        component={SettingStack}
      />
      <Tab.Screen
        name="TabC"
        initialParams={{
          backgroundColor: tabs.TabC.labelStyle.color,
          nextScreen: 'TabD',
        }}
        component={SettingStack}
      />
      <Tab.Screen
        name="TabD"
        initialParams={{
          backgroundColor: tabs.TabD.labelStyle.color,
          nextScreen: 'TabA',
        }}
        component={SettingStack}
      />
    </Tab.Navigator>
  );
}
