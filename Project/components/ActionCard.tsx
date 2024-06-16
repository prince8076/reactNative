import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in React Native 0.64</Text>
        </View>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            React Native 0.64 brings a lot of new features to the table. We have added support for the new iPad Pro and MacBook Pro, as well as the new Apple Silicon M1 chip. We have also added support for the new iPhone 13 and iPhone 13 Pro. We have also added support for the new iPadOS 15. We have also added support for the new Apple TV 4K. We have also added support for the new Apple Watch Series 7. We have also added support for the new Apple Watch Series 8. We have
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/functions-in-typescript')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/functions-in-typescript')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    borderRadius: 6,
    marginVertical: 12,
  },
  elevatedCard: {
    backgroundColor: '#E0E0E0',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  cardImage: {
    height: 190,
    width: '100%', // Ensure the image takes the full width of the card
    borderRadius: 6, // Add border radius to the image to match the card
  },
  bodyContainer: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
