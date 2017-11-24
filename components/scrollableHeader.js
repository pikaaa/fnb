import React, { Component } from 'react';
import { View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image } from 'react-native';
import FnBTableCell from './fnbtablecell';

class ScrollableHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ['ALL','COMBO', 'SNACKS', 'BEVERAGES'],
      selectedIndex: 0
    };
  }

  handleSelection = (item) => {
    console.log(item.item);
    this.setState({selectedIndex: item.index});
  }

  render(){
    return(
      <View style = {styles.container}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={this.state}
        style={styles.header}
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
        <View style={styles.detailedView}>
          <Text style={{color: 'white'}}>{this.state.data[this.state.selectedIndex]} </Text>
          <FnBTableCell/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 16,
    flex: 1,
  },
  header: {
    // height: 56,
    flex: 1,
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
    flex: 14,
    backgroundColor: 'blue',
    // marginBottom: 20,
    // marginTop: 10,
  }
});

export default ScrollableHeader;
