import React,{Component} from 'react';
//import {Root} from './config/router';
import {StackNavigator} from 'react-navigation';
import {TouchableOpacity, Image,View} from 'react-native';
import {Container,Content,Body,Header,Label,Footer,Icon,FooterTab,Button,Text,Spinner} from 'native-base';

import Feed from './screens/Feed';
import Map from './screens/Map';
import FBSDK,{LoginManager} from 'react-native-fbsdk';
import SwiperPage from './screens/Swiper';

class Home extends Component{

  static navigationOptions = {
    title:'React4ever'
  };

  constructor(props){
    super(props);
    this.state={
      name:"Your name",
      picture:"picture_url",

    }
  }
  _fbLogin(){

      LoginManager.logInWithReadPermissions(['public_profile'])
      .then(function(result){
        if(result.isCancelled){
          console.log("Login is cancelled "+result.isCancelled)

        }else{
          console.log("Login was success "+result.name);
          this.setState({name:result.name,picture:result.picture.data.url});
        }
      },function(error){
        console.log("An error occured"+error);
      }
      )
  }

  render(){
    return(
    <Container>
      <Header>
        <Body>
          <Label>Main Screen</Label>
        </Body>
      </Header>
      <Content>
      <Body>
      <View style={{flexDirection:"row"}}>
      <Button
        onPress={()=>{this.props.navigation.navigate('Feed',{name:"FeedScreen_"})}}
        >
        <Text>Feed</Text>
        </Button>

        <Button
          onPress={()=>{this.props.navigation.navigate('Map',{name:"Map"})}}
           >
           <Text>Map</Text>
           </Button>
           </View>

           <View>
           <TouchableOpacity style={{height:40,width:90,backgroundColor:"#000000"}} onPress={()=>{this._fbLogin();
           console.log("Button Pressed")}}>
            <Text style={{color:"#ffffff"}}>Login</Text>
           </TouchableOpacity>
           <Text>{this.state.name}</Text>
           <Image source={{uri:this.state.picture}} style={{height:200}} />
           </View>

           <Button onPress={()=>this.props.navigation.navigate("SwiperPage")}>
            <Text>Go to swiper</Text>
           </Button>

       </Body>
       <Content>

       </Content>
      </Content>
      <Footer>
      <FooterTab>
                    <Button active vertical onPress={()=>{
                      this.props.navigation.navigate('Feed',{name:"FeedScreen_"})
                    }}>
                        <Icon name="ios-paper" />
                        <Text>Feed</Text>
                    </Button>
                    <Button vertical onPress={()=>{

                    }}>
                        <Icon active name="navigate" />
                        <Text>Map</Text>
                    </Button>
                    <Button vertical onPress={()=>{

                    }}>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
      </Footer>
    </Container>
);
  }
}


const React4ever = StackNavigator({
  Home:{screen:Home},
  Feed:{screen:Feed},
  SwiperPage:{screen:SwiperPage},
  Map:{
    screen:Map,
    navigationOptions:{
      title:'Map',
    }
  }
},{
  headerMode:'none'
});
export default React4ever;
