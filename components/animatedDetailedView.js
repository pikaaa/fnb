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

    this.state = {
      data: ['ALL','COMBO', 'SNACKS', 'BEVERAGES'],
      selectedIndex: 0,
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
        scrollEnabled = {false}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        ref={this.captureRef}
        >
        {this.state.data.map(
         () =>
            <View style = {{flexDirection: 'column', width: Dimensions.get('window').width}} >
               <Text style={{color: 'black'}}>{this.state.data[this.props.selectedIndex]} </Text>
               <FnBTableCell/>
             </View>
        )}
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
});

export default AnimatedDetailedView;
