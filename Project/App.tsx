import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Button title="Press Me" onPress={() => console.log('Pressed')} />
      </View>
    </SafeAreaView>
  );
}

export default App;
