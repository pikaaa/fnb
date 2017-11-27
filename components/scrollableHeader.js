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
import AnimatedDetailedView from './animatedDetailedView';

class ScrollableHeader extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: ['ALL','COMBO', 'SNACKS', 'BEVERAGES'],
      selectedIndex: 0,
      // panResponder: panResponder,
      // position: position
    };
  }

  handleSelection = (item) => {
    console.log(item.item);
    this.setState({selectedIndex: item.index});
    this.listRef.scrollToIndex({index: item.index, animated: true, viewPosition: 1});
  }
captureRef = (ref) => { this.listRef = ref; };
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          extraData={this.state}
          ref={this.captureRef}
            data = {this.state.data}
            renderItem = {(item) => {
              debugger;
              return(
              <TouchableOpacity onPress={this.handleSelection.bind(this,item)}>
                <View style = {styles.headerElement}>
                    <View style={styles.headerItem}>
                      <Text>{item.item}</Text>
                    </View>
                    {item.index == this.state.selectedIndex ? <View style={styles.selectedElement}/> : null}
                  </View>
              </TouchableOpacity>
            )}}
          />
          </View>
        <AnimatedDetailedView style = {styles.detailedView} selectedIndex = {this.state.selectedIndex}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flexDirection: 'column',
    marginTop: 16,
    flex: 1,
  },
  header: {
    height: 46,
    // flex: 1,
  },
  headerElement: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  headerItem: {
    height: 40,
    width: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedElement: {
    width: 98,
    height: 2,
    backgroundColor: '#E6324B',
  },
  detailedView: {
    // flex: 1,
    backgroundColor: 'blue',
    // marginBottom: 20,
    // marginTop: 10,
  }
});

export default ScrollableHeader;
