import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
export default class Map extends Component{
  constructor(props){
    super(props)
    this.state = {
      current_latitude:null,
      current_longitude:null,
      error:null,
      markers:[],
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({
          current_latitude:position.coords.latitude,
          current_longitude:position.coords.longitude,
          error:null,
        });
        alert("Latitude "+postion.coords.latitude+"\nLongitude"+postion.coords.longitude)
      },
      (error)=>this.setState({error:error.message}),
      {enableHighAccuracy:true,timeout:20000,maximumAge:1000},)
  }

  handlePress(e){
    console.log(e.nativeEvent.coordinate);
    this.setState({
      markers:[
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          cost:`$${80}`
        }
      ]
    })
  }
  render(){

  const { region } = this.props;
    console.log(region);
      return (

        <MapView
          style={styles.map}
          region={{
            latitude: 20.296,
            longitude: 85.824,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onPress={this.handlePress}
        >
        {this.state.markers.map((marker,i)=>
           <Marker {...marker} key={i}/>
        )}
        </MapView>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
