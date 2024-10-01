import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const StarRating = (props: any) => {
  let stars = [];
  for (var i = 1; i <= 5; i++) {
    let name = 'ios-star';
    if (i > props.ratings) {
      name = 'ios-star-outline';
    }

    stars.push(
      <View style={styles.star}>
        <Image source={require('../assets/maps/star.png')} />
      </View>,
    );
  }

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>({props.reviews})</Text>
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#FF8C00',
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    color: '#444',
  },
});
