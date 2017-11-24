import React, { Component } from 'react';
import { View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image } from 'react-native';

class FnBTableCell extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [1,2,3,4,5,6,7,8,9,10],
      detailedData: {
        imagesUri: '',
        deals: 'COUPLE COMBO',
        commodities: '1 Burger+ 1300 ml Coke + 1 Pepsi can + 1 Lays',
        actualPrice: '`300',
        discountedPrice: '`55',
        discountPercent: '10'
      }
    };
  }

  render(){
    return(
      <FlatList
      showsHorizontalScrollIndicator={false}
      extraData={this.state}
        data = {this.state.data}
        renderItem = {(item) => {
          let {deals, commodities, actualPrice, discountPercent,discountedPrice} = this.state.detailedData
          return(
            <View>
            <View style={styles.cell}>
              <Image source={{uri: 'https://in.bmscdn.com/marketingspots/banner/image_1_320x128_.jpg'}} style = {styles.image}/>
              <View style={styles.fnbDetails}>
                <Text style={styles.deals}>{deals}</Text>
                <Text numberOfLines={2} style={styles.commodities}>{commodities}</Text>
                <View style= {styles.pricingRow}>
                  <Text>{discountedPrice}</Text>
                  <Text>{actualPrice}</Text>

                </View>
              </View>
            </View>
            <View style={styles.separator}/>
            </View>
        )}}
      />
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    flex: 1,
    height: 120,
  },
  image: {
    flex: 1,
    margin: 8
  },
  fnbDetails: {
    flex: 3,
    margin: 8
  },
  separator: {
    backgroundColor: '#F5F5FA',
    height: 2,
    margin: 5
  },
  deals: {
    color: '#999999'
  },
  commodities: {
    // numberOfLines: 2
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100
  }
});
export default FnBTableCell;
