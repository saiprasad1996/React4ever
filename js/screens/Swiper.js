import React, { Component } from 'react'
import {

  View,
  Image,
  Dimensions
} from 'react-native'
import {Input,Text} from 'native-base';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

export default class SwiperPage extends Component {
  static navigationOptions = {
    title:'Swiper Screen'
  };

  render () {
    return (
      <View>
        <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <Input placeholder="Hello" style={{height:40}} />
        <Swiper style={styles.wrapper} height={240}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop>
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://images.pexels.com/photos/38902/pexels-photo-38902.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://images.pexels.com/photos/281649/pexels-photo-281649.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:"https://images.pexels.com/photos/48716/pexels-photo-48716.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:"https://images.pexels.com/photos/160185/pexels-photo-160185.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"}} />
          </View>

        </Swiper>
        <Input rounded placeholder="Search" style={{height:40}} />
      </View>
    )
  }
}
