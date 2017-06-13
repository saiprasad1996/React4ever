import React, {Component} from 'react';
import {
  View,
  AsyncStorage,
} from 'react-native';
import {
  Input,
  Item,
  Button,
  Text,
} from 'native-base';
import StorageHelper from './StorageHelper';

export default class SaveData extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:"",
      fromDB:"From Db",
      userInfo:"info",
    }
  }
  componentWillMount(){
    AsyncStorage.getItem("sample").then(
      (value)=>{
        this.setState({fromDB:value})
      }
    ).done();
    AsyncStorage.getItem("profile").then(
      (values)=>{
        const val = JSON.parse(values)

        this.setState({userInfo:val.email})
      }
    ).catch((error)=>{
      alert("Hey no profile info is stored")
    })
    .done();
  }
  _textChanged(data){
      this.setState({inputValue:data})
  }
  _saveData(){
    console.log(this.state.inputValue)
    AsyncStorage.setItem("sample",this.state.inputValue);
  }
  _retriveData(){
    AsyncStorage.getItem("sample").then(
      (value)=>{
        this.setState({fromDB:value})
      }
    ).done();
  }

  render(){
    return(
      <View style={{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Item>
        <Input onChangeText={(data)=>this._textChanged(data)} style={{width:200}} placeholder="Enter text here"/>
        </Item>
        <Button onPress={()=>this._saveData()}><Text>Save</Text></Button>
        <Button onPress={()=>this._retriveData()}><Text>Show</Text></Button>
        <Text style={{marginTop:10,color:"black",width:200}}>{this.state.fromDB}</Text>
        <Text style={{marginTop:10,color:"black",width:200}}>{this.state.userInfo}</Text>
      </View>
    )
  }
}
