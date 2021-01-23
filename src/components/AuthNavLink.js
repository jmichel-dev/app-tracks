import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const AuthNavLink = ({ navigation, linkText, routeName }) => {
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate({ routeName })}
      style={styles.signinLink}
      >
        <Text style={styles.signinLinkText}>
          { linkText }
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signinLink: {
    marginTop: 30,
    alignItems: 'center',
  },
  signinLinkText: {
    fontSize: 16,
    color: '#0077b6',
  }
});

export default withNavigation(AuthNavLink);