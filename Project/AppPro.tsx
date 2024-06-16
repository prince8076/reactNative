import React from 'react';
import { View, Text, StyleSheet, useColorScheme, Button } from 'react-native';
function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'grey',
        justifyContent: 'center',

    },
    whiteText:{
        color:'#ffffff'
    },
    darkText:{
        color:'#000000'
    }
});
//   return (
//     <View>
//       <Text>Hello</Text>
//     </View>
//   );
// }
export default AppPro;
