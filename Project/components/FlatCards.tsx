import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View >
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style= {styles.container}> 
        <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.card3]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 2,
        color: "white",
    },
    container:{
        flex:1,
        flexDirection: 'row',
        padding:8,
        
        
    },
    card : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        width: 100,
        height: 100,
        borderRadius:4,
    },
    card1:{
        backgroundColor: "red"
    },
    card2 :{
        backgroundColor: "green"
    },
    card3 :{
        backgroundColor: "blue"
    }
})