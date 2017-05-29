import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import MapView from 'react-native-maps';
export default class Map extends Component{
  constructor(props){
    super(props)
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
        >
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
