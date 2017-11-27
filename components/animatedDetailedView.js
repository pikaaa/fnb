import React, { Component } from 'react';
import { View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  Image } from 'react-native';
import FnBTableCell from './fnbtablecell';

class AnimatedDetailedView extends Component{
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
        position.setValue({x: gesture.dx, y: 16});
      },
      onPanResponderRelease: () => {}
    })
    this.state = {
      data: ['ALL','COMBO', 'SNACKS', 'BEVERAGES'],
      selectedIndex: 0,
      panResponder: panResponder,
      position: position
    };
  }

  render(){
    return(
       <Animated.View style={this.state.position.getLayout()} {...this.state.panResponder.panHandlers}>
          <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
          <FnBTableCell/>
       </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
detailedView: {
  // flex: 20,
  // backgroundColor: 'blue',
  // marginBottom: 20,
  // marginTop: 10,
}
});

export default AnimatedDetailedView;
