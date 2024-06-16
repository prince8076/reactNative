import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/fancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const NewProject = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#000000' }}>
        <ScrollView>
            <FlatCards />
            <ElevatedCard />
            <FancyCard />
            <ContactList />
            <ActionCard />
            
        </ScrollView>
    </SafeAreaView>

  )
}

export default NewProject