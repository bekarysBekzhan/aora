import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'; // Adjust the path as needed
import { images } from '../constants'; // Adjust the path as needed
import { colors, fonts, sizes, spacing } from '../constants/styles'

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={styles.container}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            style={styles.cards}
            resizeMode='contain'
          />
          <View style={styles.textView}>
            <Text style={styles.mainText}>
              Discover Endless Possibilities with {' '}
              <Text style={styles.highlightText}>Aora</Text>
            </Text>
            <Image 
              source={images.path}
              style={styles.pathImage}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.subText}>
            Where creativity meets innovation:
            embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton
            title="Continue with email"
            handlePress={() => {}}
            containerStyles={styles.buttonContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16, // Adjust as needed
  },
  logo: {
    width: 130,
    height: 84,
  },
  cards: {
    maxWidth: 380,
    width: '100%',
    height: 300,
  },
  textView: {
    position: 'relative',
    marginTop: 20,
  },
  mainText: {
    fontSize: 24,
    color: '#FFFFFF', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highlightText: {
    color: colors.secondary[200], // Replace with your secondary color
  },
  pathImage: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -10,
    right: -20,
  },
  subText: {
    fontSize: 14,
    fontFamily: fonts.pregular, // Ensure the font is loaded correctly
    color: colors.gray[100], // Replace with your color
    marginTop: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});
