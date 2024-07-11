import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fonts, sizes, spacing } from '../constants/styles';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        containerStyles,
        isLoading && styles.buttonLoading
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary, // Replace with your secondary color
    borderRadius: 10, // Adjust as needed
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 7, // Adjust as needed
  },
  buttonLoading: {
    opacity: 0.5,
  },
  buttonText: {
    color: colors.primary, // Replace with your primary color
    fontFamily: fonts.psemibold, // Ensure the font is loaded correctly
    fontSize: 18, // Adjust as needed
  },
});

export default CustomButton;
