import React,{Component} from 'react'
import {View} from 'react-native';
import {Checkbox,CheckboxList} from 'ReactNative-checkbox';

export default class Checklist extends Component{
  render() {
    const Items = [
      {name:'', done: true},
      {name: 'Item2', done: true},
      {name: 'Item4', done: false}
    ];

    return (
      <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
        <CheckboxList
          data={Items}
          checked='done'
          iconColor='#4078c0'
          iconChecked='check-box'
          iconUnchecked='check-box-outline-blank'
          onChange = {()=>alert()}
        />
      </View>
    );
  }
}
