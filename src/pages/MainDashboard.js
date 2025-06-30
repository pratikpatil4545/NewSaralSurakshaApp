// import { View, Text } from 'react-native'
// import React from 'react'

// export default function MainDashboard() {
//   return (
//     <View style={{height: '100%'}}>
//       <Text style={{marginTop: '20%'}}>MainDashboard</Text>
//     </View>
//   )
// }

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, StatusBar, ImageBackground, TouchableOpacity, Vibration, BackHandler, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const devices = [
    {
        id: '0101440001',
        name: 'Device 1',
        status: 'Connected',
        color: '#00BA2B',
        bgColor: '#E2FFE6',
        icon: require('../assets/analytics.png'),
    },
    {
        id: '0101440420',
        name: 'Device 2',
        status: 'Not Connected',
        color: '#F44336',
        bgColor: '#FEF4F5',
        // icon: require('../assets/analytics.png'),
    },
];


const MainDashboard = () => {
    const navigation = useNavigation();
    const backPressCount = useRef(0);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
          if (backPressCount.current === 0) {
            backPressCount.current += 1;
            ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
            setTimeout(() => {
              backPressCount.current = 0;
            }, 2000);
            return true;
          } else {
            BackHandler.exitApp();
            return true;
          }
        });
    
        return () => backHandler.remove();
      }, []);

    const handleCardDetails = (deviceId) => {
        if(deviceId === '0101440420') {
            ToastAndroid.show('No device is connected', ToastAndroid.SHORT);
            return;
        }
        navigation.navigate('InnerDashboard', { deviceId });
    };

    return (
        // <LinearGradient
        //     colors={['#BDDAFA', '#FFFFFF', '#B3CDDD00']}
        //     style={styles.container}
        // >
        <ImageBackground source={require('../assets/lightBg.png')} style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={'#3470C1'} />
            <View style={styles.header}>
                <Image source={require('../assets/saralLogo.png')} style={styles.logo} />
                <View style={styles.userDetails}>
                    <Text allowFontScaling={false} style={styles.userName}>User Name</Text>
                    <Text allowFontScaling={false} style={styles.userNumber}>75000000780611</Text>
                </View>
                <View style={styles.bellWrapper}>
                    <Image source={require('../assets/notificationIcon2x.png')} style={styles.bellIcon} />
                    <View style={styles.notificationDot} >
                        <Text allowFontScaling={false} style={{ color: '#ffffff', fontSize: 12, fontFamily: 'OpenSans-SemiBold',}}>02</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={devices}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {handleCardDetails(item.id);}} style={[styles.deviceCard, { backgroundColor: '#FFFFFF' }]}>
                        <View>
                            <Text allowFontScaling={false} style={styles.deviceId}>{item.id}</Text>
                            <Text allowFontScaling={false} style={styles.deviceName}>{item.name}</Text>
                            <View style={[styles.statusContainer, { borderColor: item.color, backgroundColor: item.bgColor }]}>
                                <View style={[styles.statusDot, { backgroundColor: item.color }]} />
                                <Text allowFontScaling={false} style={[styles.statusText, { color: item.color }]}>
                                    {item.status}
                                </Text>
                            </View>
                        </View>
                        <Image source={item.icon} style={styles.graphIcon} />
                    </TouchableOpacity>
                )}
            />

            {/* <Image
                source={require('../assets/lighbgillustration2x.png')}
                style={styles.bottomImage}
            /> */}
        </ImageBackground>
        // </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%'
    },
    header: {
        backgroundColor: '#3470C1',
        height: height * 0.12, // 13% of screen height
        paddingHorizontal: width * 0.05, // 5% of screen width
        paddingTop: height * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: width * 0.06,
        borderBottomRightRadius: width * 0.06,
    },
    logo: {
        width: width * 0.14,
        height: height * 0.08,
        resizeMode: 'contain',
    },
    userDetails: {
        flex: 1,
        marginLeft: width * 0.03,
    },
    userName: {
        color: '#FFFFFF',
        fontSize: height * 0.028,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'right',
        marginRight: width * 0.07,
    },
    userNumber: {
        color: '#96BEF4',
        fontSize: height * 0.023,
        fontFamily: 'OpenSans-Regular',
        textAlign: 'right',
        marginRight: width * 0.07,
    },
    bellWrapper: {
        position: 'relative',
        right: width * 0.02,
    },
    bellIcon: {
        width: width * 0.07,
        height: width * 0.07,
        resizeMode: 'contain',
    },
    notificationDot: {
        position: 'absolute',
        top: -height * 0.01,
        right: -width * 0.01,
        borderRadius: width * 0.04,
        backgroundColor: 'red',
        borderColor: '#FFF',
        padding: width * 0.013,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deviceCard: {
        borderRadius: 35,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        elevation: 2,
        minHeight: 130,
        alignItems: 'center'
    },
    deviceId: {
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        color: '#6E7479',
    },
    deviceName: {
        fontSize: 24,
        fontFamily: 'OpenSans-SemiBold',
        color: '#4D5358',
        marginTop: 5,
        marginBottom: 5
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        paddingBottom: 2,
        paddingTop: 2,
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 6,
    },
    statusText: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
    },
    graphIcon: {
        width: 60,
        height: 40,
        resizeMode: 'contain',
    },
    bottomImage: {
        width: width,
        height: height * 0.48,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        // zIndex: 1,
    },
});

export default MainDashboard;
