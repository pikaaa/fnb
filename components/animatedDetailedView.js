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

  render(){
    return(
       <ScrollView
       contentContainerStyle={styles.scrollStyle}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        ref={(ref) => { this.ScrollView = ref; }}
        >

         <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}}>
            <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
            <FnBTableCell/>
          </View>
          <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}}>
             <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
             <FnBTableCell/>
           </View>
           <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}}>
              <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
              <FnBTableCell/>
            </View>
            <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}}>
               <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
               <FnBTableCell/>
             </View>
       </ScrollView>
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
