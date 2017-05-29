import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import UserDetail from '../screens/UserDetail';
import Settings from '../screens/Settings';

export const FeedStack = StackNavigator({
  Feed:{
    screen:Feed,
    navigationOptions:{
      title:'Feed',
    }
  },
  Map:{
    screen:Map,
    navigationOptions:{
      title:'Map',
    }
  },
  UserDetail:{
    screen : UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,

    })
}

});

export const Tabs = TabNavigator({
  Feed:{
    screen : FeedStack,
    navigationOptions : {
      tabBarLabel:'Feed',
      tabBarIcon : ({tintColor }) => <Icon name="list" size={35} color={tintColor} />

    }
  },
  Me:{
    screen : Me,
    navigationOptions : {
      tabBarLabel:'Me',
      tabBarIcon : ({tintColor})=> ({tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
  },


});

export const SettingsStack = StackNavigator({
  Settings:{
    screen:Settings,
    navigationOptions:{
      title:'Settings'
    }
  }
},
{
  headerMode:'none'
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
