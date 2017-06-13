import React,{Component} from 'react';
//import {Root} from './config/router';
import {StackNavigator} from 'react-navigation';
import {TouchableOpacity, Image,View,AsyncStorage,Modal,TouchableHighlight} from 'react-native';
import {Container,Content,Body,Header,Label,Footer,Icon,FooterTab,Button,Text,Spinner} from 'native-base';

import Feed from './screens/Feed';
import Map from './screens/Map';
import FBSDK,{LoginManager,LoginButton,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';
import SwiperPage from './screens/Swiper';
import Checklist from './screens/Checklist'
import SaveData from './screens/SaveData';
import Prompt from 'react-native-prompt';
import AnimatedMarkers from './screens/AnimatedMarkers';

class Home extends Component{

  static navigationOptions = {
    title:'React4ever'
  };

  constructor(props){
    super(props);
    this.state={
      name:"Your name",
      picture:"picture_url",
      promptVisible:false,

    }
  }
  _fbLogin(){

      LoginManager.logInWithReadPermissions(['public_profile','email'])
      .then((result)=>{
        if(result.isCancelled){
          alert("Login is cancelled "+result.isCancelled)

        }else{
            AccessToken.getCurrentAccessToken()
            .then((data)=>{
              let accessToken = data.accessToken
              this.setState({name:data.accessToken.toString()})

              const responseInfoCallback = (error,result)=>{
                if(error){
                  console.log(error)
                  alert("Error fetching data : "+error.toString())

                }else{
                  console.log(result)
                  alert("Success fetching data : \n"+result.name.toString()+" Email : "+result.email)
                  console.log(result)
                  this.setState({picture:result.picture.data.url.toString()})
                  AsyncStorage.setItem("profile",JSON.stringify({user:result.name,email:result.email}))
                }
              }
              const infoRequest = new GraphRequest('/me',{
                accessToken:accessToken,
                parameters:{
                  fields:{
                    string:"email,name,first_name,last_name,picture"
                  }
                }
              },
              responseInfoCallback);
              new GraphRequestManager()
              .addRequest(infoRequest)
              .start()
            })

        }
      },function(error){
        alert("An error occured"+error.toString());
      }
      )
  }

_showPrompt(){

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

           <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error,result) =>{
                if(error){
                  alert("Login has error :"+result.error);

                }else if(result.isCancelled){
                  alert("Login is cancelled")
                }else{
                  AccessToken.getCurrentAccessToken().then(
                    (data)=>{
                      let accessToken = data.accessToken
                      alert(data.accessToken.toString())
                      this.setState({name:data.accessToken.toString()})
                      const responseInfoCallback = (error,result) =>{
                        if(error){
                          alert(error.toString())
                        }else{
                          console.log(result)
                          alert("Success fetching data "+result.email)
                        }

                      }
                      const infoRequest = new GraphRequest(
                        '/me',{
                          accessToken:accessToken,
                          parameters:{
                            fields:{
                              string:'email,name,first_name,last_name'
                            }
                          }
                        },
                        responseInfoCallback

                      )
                      new GraphRequestManager().addRequest(infoRequest).start()
                    }
                  )
                }
              }
            }
           />

           </View>

           <View>
           <TouchableOpacity style={{height:40,width:90,backgroundColor:"#000000"}} onPress={()=>{this._fbLogin();
           console.log("Button Pressed")}}>
            <Text style={{color:"#ffffff"}}>Login</Text>
           </TouchableOpacity>
           <Text>{this.state.name}</Text>
           <Image source={{uri:this.state.picture}} style={{height:200,width:200}} />
           </View>

           <Button onPress={()=>this.props.navigation.navigate("SwiperPage")}>
            <Text>Go to swiper</Text>
           </Button>
           <Button onPress={()=>this.props.navigation.navigate('Checklist')}>
           <Text>Checklist</Text>
           </Button>

           <Button onPress={()=>this.props.navigation.navigate('SaveData')}>
           <Text>SaveData</Text>
           </Button>

           <Button onPress={()=>this.setState({promptVisible:true})}>
           <Text>Prompt</Text>
           </Button>
       </Body>
       <Content>


       <Prompt
       title="Your password"
       placeholder="Your Password please"
       secureTextEntry={true}
       visible={ false }
       onCancel={ () => this.setState({
         promptVisible:false,
         name:"You cancelled"
       })}
       onSubmit={ (value)=> this.setState({
         promptVisible:false,

         name:value,
       })}/>
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
                        this.props.navigation.navigate("AnimatedMarkers");
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
  AnimatedMarkers:{screen:AnimatedMarkers},
  SwiperPage:{screen:SwiperPage},
  Checklist:{screen:Checklist},
  SaveData:{screen:SaveData},
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
