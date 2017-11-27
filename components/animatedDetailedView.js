import React, { Component } from 'react';
import { View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  ScrollView,
  Dimensions } from 'react-native';
import FnBTableCell from './fnbtablecell';

class AnimatedDetailedView extends Component{
  constructor(props) {
    super(props);
    // const position = new Animated.ValueXY();
    // const panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: () => true,
    //   onPanResponderMove: (event, gesture) => {
    //     console.log(gesture);
    //     position.setValue({x: gesture.dx, y: 16});
    //   },
    //   onPanResponderRelease: () => {}
    // })
    this.state = {
      data: ['ALL','COMBO', 'SNACKS', 'BEVERAGES'],
      selectedIndex: 0,
      // panResponder: panResponder,
      // position: position
    };
  }
captureRef = (ref) => { this.scrollViewRef = ref;};
  render(){
    console.log('scrollViewRef: ' + this.scrollViewRef +', index: ' + this.props.selectedIndex);
    return(
      <View style={{ flex: 1 }}>
    { this.scrollViewRef != null ? this.scrollViewRef.scrollTo({x: this.props.selectedIndex * Dimensions.get('window').width,  animated: true}) : null}
       <ScrollView
       contentContainerStyle={styles.scrollStyle}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        ref={this.captureRef}
        >

         <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}} id = {0}>
            <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
            <FnBTableCell/>
          </View>
          <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}} id = {1}>
             <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
             <FnBTableCell/>
           </View>
           <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}}>
              <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
              <FnBTableCell/>
            </View>
            <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}} id = {3}>
               <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
               <FnBTableCell/>
             </View>
       </ScrollView>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
detailedView: {
  // flex: 20,
  // backgroundColor: 'blue',
  // marginBottom: 20,
  // marginTop: 10,
}
});

export default AnimatedDetailedView;
