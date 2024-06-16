import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
    
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style= {styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Me
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            To
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            More....
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
          😀
          </Text>
        </View>
      </ScrollView>
    </View>
    
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 2,
        color: "white",
    },
    container:{
        padding:8

    },
    
    card : {
        width: 100,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:4,
        margin:8,

        
    },
    cardElevated : {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 100,
            height: 100,
        },
        shadowColor: 'red',
        shadowOpacity:0.4,
        shadowRadius: 2,
    }
})