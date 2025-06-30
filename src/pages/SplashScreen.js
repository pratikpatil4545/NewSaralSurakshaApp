// import { View, Text } from 'react-native'
// import React from 'react'

// export default function SplashScreen() {
//   return (
//     <View>
//       <Text>SplashScreen</Text>
//     </View>
//   )
// }



import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // Or any screen name you have
    }, 2000);
  }, []);

  return (
    <LinearGradient
      colors={['#FFA143', '#FFFFFF', '#54e654']}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={require('../assets/saralSuraksha2x.png')} style={styles.logo} resizeMode="contain" />
        {/* <Text style={styles.title}>saral</Text>
        <Text style={styles.subtitle}>SURAKSHA</Text> */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 160,
    width: 180,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: 'OpenSans-Regular',
    color: '#F26522', // Match exact color from XD
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: '#000000',
  },
});

export default SplashScreen;
