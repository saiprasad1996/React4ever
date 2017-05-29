import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import {Container,Content,Header,Left,Body,Button,Icon,Label} from 'native-base';

class Feed extends Component {

  onLearnMore = (user) => {
    this.props.navigation.navigate('UserDetail', {...user});
  };

  render() {
    return (
      <Container>
        <Header>
        <Left>
          <Icon name="ios-arrow-back-outline" style={{color:'#fff'}} onPress={()=>this.props.navigation.goBack(null)}/>
        </Left>
          <Body>
            <Label>{this.props.navigation.state.params.name}</Label>
          </Body>
        </Header>
        <Content>
          <ScrollView>
            <List>
              {users.map((user) => (
                <ListItem
                  key={user.login.username}
                  roundAvatar
                  avatar={{ uri: user.picture.thumbnail }}
                  title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                  subtitle={user.email}
                  onPress={() => this.onLearnMore(user)}
                />
              ))}
            </List>
          </ScrollView>
          </Content>
      </Container>
    );
  }
}

export default Feed;
