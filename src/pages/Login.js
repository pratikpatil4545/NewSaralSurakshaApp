// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet, Dimensions, StatusBar, Alert } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const LoginScreen = ({ navigation }) => {
//     const [mobile, setMobile] = useState('');

//     const OTPScreen = () => {

//         const [otp, setOtp] = useState(['', '', '', '']);
//         const navigation = useNavigation();
//         const correctOtp = '1702';

//         const handleChange = (text, index) => {
//             const updatedOtp = [...otp];
//             updatedOtp[index] = text;
//             setOtp(updatedOtp);
//         };

//         const handleAuthorize = () => {
//             const enteredOtp = otp.join('');
//             if (enteredOtp === correctOtp) {
//                 navigation.navigate('SuccessScreen');
//             } else {
//                 Alert.alert('Wrong OTP', 'Try again.');
//             }
//         };

//         return (
//             <View style={styles.container}>
//                 <Image source={require('../assets/saralSuraksha2x.png')} style={styles.logo} />
//                 <Text style={styles.label}>Enter OTP here</Text>
//                 <View style={styles.otpContainer}>
//                     {otp.map((digit, index) => (
//                         <TextInput
//                             key={index}
//                             value={digit}
//                             onChangeText={(text) => handleChange(text, index)}
//                             maxLength={1}
//                             keyboardType="number-pad"
//                             style={styles.otpInput}
//                         />
//                     ))}
//                 </View>
//                 <TouchableOpacity style={styles.button} onPress={handleAuthorize}>
//                     <Text style={styles.buttonText}>Authorise</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }; 

//     return (
//         <LinearGradient colors={['#83BCFF', '#D9ECFFDE', '#FFFFFF']} style={styles.container}>

//             <StatusBar barStyle={'dark-content'} />

//             <View style={{ width: '100%', height: 265, backgroundColor: 'white', zIndex: 2, position: 'absolute', borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%' }}>
//             </View>
//             <View style={{ width: '100%', height: 265, backgroundColor: '#ffffff70', zIndex: 1, top: 25, left: 15, position: 'absolute', borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%' }}>
//             </View>
//             <View style={{ width: '100%', height: 265, backgroundColor: '#ffffff70', zIndex: 1, top: 25, left: -15, position: 'absolute', borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%' }}>
//             </View>

//             <View style={styles.topSection}>
//                 <Image source={require('../assets/saralSuraksha2x.png')} style={styles.logo} /> 
//             </View>

//             <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Mobile Number</Text>
//                 <TextInput
//                     value={mobile}
//                     onChangeText={setMobile}
//                     keyboardType="phone-pad"
//                     placeholder="Enter mobile here"
//                     placeholderTextColor={'#00000040'}
//                     style={styles.input}
//                 />
//                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OTP')}>
//                     <Text style={styles.buttonText}>Generate OTP</Text>
//                 </TouchableOpacity>
//             </View>

//             <Image source={require('../assets/buildingIllustration2x.png')} style={styles.building} /> 
//         </LinearGradient>
//     );
// };

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     topSection: {
//         alignItems: 'center',
//         marginTop: 80
//     },
//     logo: {
//         width: 140,
//         height: 160,
//         resizeMode: 'contain',
//         zIndex: 3
//     },
//     title: {
//         fontSize: 24,
//         color: '#ea5c2b',
//         textAlign: 'center',
//         fontWeight: 'bold',
//         marginTop: 10
//     },
//     inputContainer: {
//         height: '65%', 
//         alignItems: 'center'
//     },
//     label: {
//         fontSize: 16, 
//         color: '#585858',
//         marginBottom: 10,
//         marginLeft: '7%',
//         fontFamily: 'OpenSans-SemiBold', 
//         alignSelf: 'flex-start',
//     },
//     input: {
//         width: width * 0.8,
//         height: 60,
//         borderRadius: 20,
//         backgroundColor: '#fff',
//         paddingHorizontal: 15,
//         fontSize: 20,
//         elevation: 3,
//         paddingLeft: 30,
//         fontFamily: 'OpenSans-SemiBold',
//         color: '#585858'
//     },
//     button: {
//         width: width * 0.8,
//         marginTop: 20,
//         height: 60,
//         backgroundColor: '#3470C1', 
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: '600',
//         fontFamily: 'OpenSans-SemiBold',
//         textAlign: 'center'
//     },
//     building: {
//         width: '100%',
//         height: height * 0.40,
//         zIndex: 1, 
//         resizeMode: 'cover',
//         position: 'absolute',
//         bottom: 0,
//         opacity: 0.4
//     },
//     otpContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '60%',
//         marginVertical: 20
//     },
//     otpInput: {
//         width: 50,
//         height: 50,
//         backgroundColor: '#FFF',
//         textAlign: 'center',
//         fontSize: 18,
//         borderRadius: 10
//     },
// });

// export default LoginScreen;



import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet, Dimensions, StatusBar, Alert, Animated, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [showOtp, setShowOtp] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const correctOtp = '1234';
    const otpRefs = [useRef(), useRef(), useRef(), useRef()];
    const [otpError, setOtpError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const isValidMobile = (num) => /^[0-9]{10}$/.test(num);

    const shakeAnim = useRef(new Animated.Value(0)).current;

    const shakeAnimation = () => {
        Animated.sequence([
            Animated.timing(shakeAnim, { toValue: 10, duration: 70, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -10, duration: 70, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 10, duration: 70, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 70, useNativeDriver: true })
        ]).start();
    };

    const handleGenerateOtp = () => {
        if (!isValidMobile(mobile)) {
            Alert.alert('Invalid Number', 'Please enter a valid 10-digit mobile number');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowOtp(true);
        }, 1000);
    };

    const handleChangeOtp = (text, index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = text;
        setOtp(updatedOtp);
        setOtpError(false);

        if (text && index < otpRefs.length - 1) {
            otpRefs[index + 1].current.focus();
        }

        if (updatedOtp.every(d => d.length === 1)) {
            handleAuthorize(updatedOtp.join(''));
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            otpRefs[index - 1].current.focus();
        }
    };

    const handleAuthorize = (enteredOtpValue) => {
        setOtpLoading(true);

        setTimeout(() => {
            const enteredOtp = enteredOtpValue || otp.join('');
            if (enteredOtp === correctOtp) {
                setOtpError(false);
                setIsSuccess(true);
            } else {
                setOtpError(true);
                shakeAnimation();
            }
            setOtpLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                navigation.navigate('MainDashboard');
            }, 1000);

            return () => clearTimeout(timer); // clean up if unmounted early
        }
    }, [isSuccess]);

    useEffect(() => {
        if (showOtp) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        }
    }, [showOtp]);

    return (
        <LinearGradient
            colors={['#83BCFF', '#D9ECFFDE', '#FFFFFF']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            
            <StatusBar barStyle="dark-content" backgroundColor={'#ffffff70'} />

            <View style={styles.curve1} />
             <View style={styles.curve2} />
            <View style={styles.curve3} /> 

            <View style={styles.topSection}>
                <Image source={require('../assets/saralSuraksha2x.png')} style={styles.logo} />
            </View>

            <View style={styles.inputContainer}>
                {!showOtp ? (
                    <>
                        <Text allowFontScaling={false} style={styles.label}>Mobile Number</Text>
                        <TextInput
                        allowFontScaling={false}
                            value={mobile}
                            onChangeText={setMobile}
                            // keyboardType="phone-pad"
                            keyboardType="number-pad"
                            placeholder="Enter mobile here"
                            placeholderTextColor="#00000040"
                            style={styles.input}
                            maxLength={10}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleGenerateOtp} disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text allowFontScaling={false} style={styles.buttonText}>Generate OTP</Text>
                            )}
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        {isSuccess ? (
                            <View style={{
                                //  marginTop: -200,
                                 marginTop: -height * 0.22, justifyContent: 'center', alignItems: 'center', display: 'flex', position: 'relative', }}>
                                <Image source={require('../assets/success.png')} style={styles.success} />
                                <Text allowFontScaling={false} style={styles.successText}>Authorisation Successful</Text>
                            </View>
                        ) : (
                            <>
                                <Text allowFontScaling={false} style={styles.label}>Enter OTP</Text>
                                {/* <View style={{padding: 20, display: 'flex', flexDirection:'row'}}> */}
                                <Animated.View style={[styles.otpContainer, { transform: [{ translateX: shakeAnim }] }]}>
                                    {otp.map((digit, index) => (
                                        <TextInput
                                        allowFontScaling={false}
                                            key={index}
                                            ref={otpRefs[index]}
                                            value={digit}
                                            onChangeText={(text) => handleChangeOtp(text, index)}
                                            onKeyPress={(e) => handleKeyPress(e, index)}
                                            maxLength={1}
                                            keyboardType="number-pad"
                                            style={[
                                                styles.otpInput,
                                                // !otpError && {elevation: 5},
                                                otpError && { borderColor: '#D65959', borderWidth: 1, color: '#D65959', elevation: 0, backgroundColor: '#FFF0F0' }
                                            ]}
                                        />
                                    ))}
                                </Animated.View>
                                {/* </View> */}
                                {otpError && (
                                    <Text allowFontScaling={false} style={{ color: '#D65959',   fontFamily: 'OpenSans-SemiBold' }}>
                                        Wrong OTP. Try again.
                                    </Text>
                                )}

                                <TouchableOpacity style={styles.button} onPress={handleAuthorize} disabled={otpLoading}>
                                    {otpLoading ? (
                                        <ActivityIndicator color="#fff" />
                                    ) : (
                                        <Text allowFontScaling={false} style={styles.buttonText}>Authorize</Text>
                                    )}
                                </TouchableOpacity>
                            </>
                        )}
                    </>
                )}
            </View>

            <Image source={require('../assets/buildingIllustration2x.png')} style={styles.building} />
        </LinearGradient>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topSection: {
        alignItems: 'center',
        // marginTop: 80,
        marginTop: height * 0.075
    },
    logo: {
        width: 140,
        // height: 160,
        height: height * 0.17,
        resizeMode: 'contain',
        zIndex: 3,
    },
    inputContainer: {
        // height: '65%',
        height: height * 0.65,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        // fontSize: RFValue(12.5),
        color: '#585858',
        marginBottom: 10,
        marginLeft: '7%',
        fontFamily: 'OpenSans-SemiBold',
        alignSelf: 'flex-start',
        zIndex:15
    },
    input: {
        width: width * 0.8,
        // height: 60,
        height: height * 0.067,
        borderRadius: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        fontSize: 20,
        // fontSize: RFValue(16),
        // fontSize: RFPercentage(2.3),
        elevation: 3,
        paddingLeft: 30,
        fontFamily: 'OpenSans-SemiBold',
        color: '#585858',
        zIndex:15
    },
    button: {
        width: width * 0.8,
        marginTop: 20,
        // height: 60,
        height: height * 0.067,
        backgroundColor: '#3470C1',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        // fontSize: RFPercentage(1.8),
        fontWeight: '600',
        fontFamily: 'OpenSans-SemiBold',
    },
    building: {
        width: '100%',
        height: height * 0.4,
        zIndex: 1,
        resizeMode: 'stretch',
        // resizeMode: 'cover',
        position: 'absolute',
        bottom: 0,
        opacity: 0.4,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginVertical: 0,
        padding: 10,
        zIndex:15

    },
    otpInput: {
        width: 70,
        // height: 60,
        height: height * 0.067,
        backgroundColor: '#FFF',
        textAlign: 'center',
        fontSize: 20,
        color: '#585858',
        // fontSize: RFPercentage(2),
        fontFamily: 'OpenSans-Regular',
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        elevation: 5,
        zIndex:15
    },
    curve1: {
        // width: '100%',
        // height: 265,
        // backgroundColor: 'white',
        // zIndex: 2,
        // position: 'absolute',
        // borderBottomLeftRadius: 1000,
        // borderBottomRightRadius: 1000,
        // width: 500,
        width: width * 1.25,
        // height: 265,
        height: height * 0.29,
        backgroundColor: 'white',
        zIndex: 2,
        position: 'absolute',
        borderBottomLeftRadius: 250,
        borderBottomRightRadius: 250
    },
    curve2: {
        // width: '100%',
        // height: 265,
        // backgroundColor: '#ffffff70',
        // zIndex: 1,
        // top: 25,
        // left: 15,
        // position: 'absolute',
        // borderBottomLeftRadius: 1000,
        // borderBottomRightRadius: 1000,
        // width: 450,
        width : width * 1.05,
        height: height * 0.29,
        // height: 265,
        backgroundColor: '#ffffff70',
        zIndex: 1,
        top: 15,
        left: 15,
        position: 'absolute',
        // borderRadius: 200,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
    },
    curve3: {
        // width: '100%',
        // height: 265,
        // backgroundColor: '#ffffff70',
        // zIndex: 1,
        // top: 25,
        // left: -15,
        // position: 'absolute',
        // borderBottomLeftRadius: 1000,
        // borderBottomRightRadius: 1000,
        // width: 450,
        width : width * 1.05,
        // height: 265,
        height: height * 0.29,
        backgroundColor: '#ffffff70',
        zIndex: 1,
        top: 15,
        left: -35,
        position: 'absolute',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
    },
    success: {
        marginTop: height * 0.017,
        // marginTop: 15,
        // marginBottom: 15,
        marginBottom: height * 0.017,
        width: width * 10,
        height: height * 0.55,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    successText: {
        color: '#3470C1',
        fontSize: 20,
        // fontSize: RFPercentage(2.3),
        fontFamily: 'OpenSans-SemiBold',
        position: 'absolute',
        top: '62%'
    }
});

export default LoginScreen;
