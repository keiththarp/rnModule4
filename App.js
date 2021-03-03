import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartScreen from './screen/StartScreen';
import GameScreen from './screen/gameScreen';
import GameOver from './screen/GameOver';

export default function App() {

  const [userNumber, setUserNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  }

  let content = <StartScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOver rounds={guessRounds} newGame={newGameHandler} />;
  };

  return (
    <View style={styles.screen}>
      <Header title={'Number Guesser'} />
      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  }
});
