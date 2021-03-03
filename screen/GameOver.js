import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Computer guessed in {props.rounds} rounds.</Text>
      <Button title={'New Game?'} onPress={props.newGame} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GameOver;