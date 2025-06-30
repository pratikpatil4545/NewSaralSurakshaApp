import { View, Text, ImageBackground, StatusBar, StyleSheet, Image, TouchableOpacity, Dimensions, BackHandler, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import { BarChart } from 'react-native-gifted-charts';

export default function InnerDashboard({ route }) {
    const { deviceId } = route.params;
    const navigation = useNavigation();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.10,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            navigation.goBack()
        });

        return () => backHandler.remove();
    }, []);

    const barData = [
        { value: 8 },
        { value: 9 },
        { value: 2 },
        { value: 6 },
        { value: 10 },
        { value: 5 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 9 },
        { value: 4 },
        { value: 8 },
        { value: 7 },
        { value: 10 },
        { value: 6 },
        { value: 8 },
        { value: 9 },
        { value: 2 },
        { value: 6 },
        { value: 10 },
        { value: 5 },
        { value: 10 },
        { value: 5 },
    ];

    return (
        <ImageBackground source={require('../assets/lightBg.png')} style={styles.container}>
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height: '100%'}}
                contentContainerStyle={{ paddingBottom: 40 }}
            > */}
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.navigate('MainDashboard'); }}>
                    <Image source={require('../assets/saralLogo.png')} style={styles.logo} />
                </TouchableOpacity>
                <View style={styles.userDetails}>
                    <Text  allowFontScaling={false}style={styles.userName}>User Name</Text>
                    <Text  allowFontScaling={false}style={styles.userNumber}>75000000780611</Text>
                </View>
                <View style={styles.bellWrapper}>
                    <Image source={require('../assets/notificationIcon2x.png')} style={styles.bellIcon} />
                    {(deviceId === '0101440001') &&
                        <View style={styles.notificationDot} >
                            <Text  allowFontScaling={false}style={{ color: '#ffffff', fontSize: 12, fontFamily: 'OpenSans-SemiBold', }}>01</Text>
                        </View>
                    }
                </View>
            </View>

            <View style={styles.container1}>
                <View style={styles.item}>
                    <Image source={require('../assets/regulator.png')} style={[styles.icon, { filter: 'grayscale(1)' }]} />
                    <View style={{ height: 25, width: '100%' }}>
                        <Text  allowFontScaling={false} style={styles.text}>REGULATOR REMOVED</Text>
                    </View>
                </View>
                <View style={styles.itemLeakage}>
                    <Image source={require('../assets/gasLeak.png')} style={styles.icon} />
                    <View style={{ height: 25, width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                        <Text  allowFontScaling={false} style={styles.textLeakage}>⚠️ LEAKAGE</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image source={require('../assets/overflow.png')} style={[styles.icon, { filter: 'grayscale(1)' }]} />
                    <View style={{ height: 25, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text  allowFontScaling={false}style={styles.text}>OVERFLOW</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image source={require('../assets/balance.png')} style={[styles.icon, { filter: 'grayscale(1)' }]} />
                    <View style={{ height: 25, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text  allowFontScaling={false}style={styles.text}>CREDIT LOW</Text>
                    </View>
                </View>
            </View>

            <View style={styles.infoView}>
            <View style={styles.gasView}>
    <View style={{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
        <Image
            source={require('../assets/gasCylinder1.png')}
            style={{
                width: '100%',
                height: height * 0.22,
                resizeMode: 'contain',
                marginLeft: -width * 0.015
            }}
        />
        <View style={{
            position: 'absolute',
            right: width * 0.06,
            height: height * 0.25,
            justifyContent: 'space-evenly',
            alignSelf: 'center'
        }}>
            <Text  allowFontScaling={false}style={styles.consumedText}>
                Paid LPG{"\n"}
                <Text  allowFontScaling={false}style={[styles.boldText, { color: '#00C936' }]}>5 </Text>Kg
            </Text>
            <Text  allowFontScaling={false}style={styles.balanceText}>
                Consumed{"\n"}
                <Text  allowFontScaling={false}style={[styles.boldText, { color: '#EA2A56' }]}>30%</Text>
            </Text>
            <Text  allowFontScaling={false}style={styles.allowedText}>
                Balance{"\n"}
                <Text  allowFontScaling={false}style={[styles.boldText, { color: '#2A99EA' }]}>70%</Text>
            </Text>
        </View>
    </View>
</View>


                <View style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '35%', justifyContent: 'space-between' }}>
                    <View style={[styles.deviceInfo, { height: height * 0.11, padding: width * 0.03 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/miniCylinder.png')} style={{ width: width * 0.05, height: width * 0.05 }} />
                            <Text  allowFontScaling={false}style={{ color: '#4D5359', fontSize: height * 0.017, fontFamily: 'OpenSans-Bold', marginLeft: width * 0.01 }}>LPG</Text>
                        </View>
                        <View style={{ width: '100%', height: '80%', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text  allowFontScaling={false}style={{ color: '#4D5359', fontSize: height * 0.014, fontFamily: 'OpenSans-Regular', }}>Paid LPG</Text>
                                <Text  allowFontScaling={false}style={{ color: '#4D5359', fontSize: height * 0.014, fontFamily: 'OpenSans-Regular', }}>
                                    <Text  allowFontScaling={false}style={{ color: '#4D5359', fontSize: height * 0.022, fontFamily: 'OpenSans-Bold', marginLeft: width * 0.01 }}>5</Text> Kg
                                </Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text  allowFontScaling={false}style={{ color: '#4D5359', fontSize: height * 0.014, fontFamily: 'OpenSans-Regular' }}>Unpaid LPG</Text>
                                <Text  allowFontScaling={false}style={{ color: '#4D5359', fontSize: height * 0.014, fontFamily: 'OpenSans-Regular' }}>
                                    <Text  allowFontScaling={false}style={{ color: '#4D5359', fontSize: height * 0.022, fontFamily: 'OpenSans-Bold', marginLeft: width * 0.01 }}>9</Text> Kg
                                </Text>
                            </View>
                        </View>
                    </View>

                    <LinearGradient
                        colors={['#F4F9FF', '#E3F8F0', '#D8FFD5']}
                        locations={[0, 0.5, 1]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.card}
                    >
                        <Animated.Image source={require('../assets/gift.png')} style={[styles.image, { transform: [{ scale: scaleAnim }] }]} />
                        <Text  allowFontScaling={false}style={styles.title}>Send a LPG Gift!</Text>
                        <Text  allowFontScaling={false}style={styles.subtitle}>Show your favourite some love.</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text  allowFontScaling={false}style={styles.buttonText}>Gift Now</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

            <View style={styles.card2}>
                <View style={styles.header2}>
                    <Text  allowFontScaling={false} style={styles.title2}>Daily Consumption</Text>
                    <View style={styles.legend}>
                        <View style={styles.legendBox} />
                        <Text allowFontScaling={false} style={styles.legendText}>Consumptions</Text>
                    </View>
                </View>
                <View style={{ width: '100%', padding: 5 }}>
                    <Image source={require('../assets/graphImage1.png')} style={{ height: '80%', width: '100%', resizeMode: 'stretch' }} />
                    {/*    <BarChart
                        height={100}
                        // width={100}
                        barWidth={10}
                        noOfSections={3}
                        barBorderRadius={4}
                        frontColor="#F5A5A5"
                        data={barData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        isAnimated
                        hideRules
                        rulesColor="#eee"
                        spacing={4}
                        // backgroundColor={'red'}
                        maxValue={12}
                        showYAxisLabels={false}
                        hideYAxisText={true}
                    />
                    */}
                </View>
                {/*   <View style={{ width: '100%', }}>
                    <BarChart
                        height={100}
                        // width={100}
                        barWidth={10}
                        noOfSections={3}
                        barBorderRadius={4}
                        frontColor="#F5A5A5"
                        data={barData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        isAnimated
                        hideRules
                        rulesColor="#eee"
                        spacing={4}
                        // backgroundColor={'red'}
                        maxValue={12}
                        showYAxisLabels={false}
                        hideYAxisText={true}
                    // yAxisTextStyle={{ fontSize: 2 }}
                    />
                </View>*/}
            </View>

            <LinearGradient
                colors={['#82C7FA', '#4BA6EB']}
                locations={[0, 0.5, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.alertHeader, { paddingLeft: 0, marginTop: '3%', }]}
            >
                <View style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', }}>
                    <Image source={require('../assets/bgDesign.png')} style={{ position: 'absolute', width: '100%', top: -10, height: '40%', resizeMode: 'cover' }} />

                    <View style={{ width: '45%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/earthHappy.png')} style={styles.earthImage} />
                    </View>
                    <View style={{ width: '55%', overflow: 'hidden', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text  allowFontScaling={false} style={styles.earthText}>You're making the Earth happy! Curious to know more?</Text>
                        {/* <Text  allowFontScaling={false}style={styles.tapHere}>Tap here</Text> */}
                        <TouchableOpacity style={[styles.tapToViewBtn, { marginTop: 10, marginLeft: 10 }]}>
                            <Text  allowFontScaling={false} style={styles.tapToViewText}>Tap here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

            {/* </ScrollView> */}
        </ImageBackground >
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    card2: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 15,
        elevation: 4,
        shadowColor: '#000',
        width: '90%',
        alignSelf: 'center',
        marginTop: '3%',
        paddingBottom: 0,
        height: '18%'
    },
    header2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title2: {
        // fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'OpenSans-Bold',
        color: '#4D5359',
    },
    legend: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendBox: {
        width: 10,
        height: 10,
        backgroundColor: '#F5A5A5',
        marginRight: 5,
        borderRadius: 2,
    },
    legendText: {
        // color: '#4D5359 ',
        color: 'black',
        fontSize: 10,
        fontFamily: 'OpenSans-Regular',
    },
    card: {
        width: '100%',
        height: height * 0.17, // 55% of screen height
        borderRadius: width * 0.06,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 5,
        shadowColor: '#000',
    },
    image: {
        position: 'absolute',
        width: width * 0.15,
        height: width * 0.15,
        resizeMode: 'contain',
        top: -height * 0.003,
        // top: 0
    },
    title: {
        color: '#EA2A56',
        fontSize: height * 0.016,
        marginTop: height * 0.070,
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
    },
    subtitle: {
        // width:'100%',
        color: '#4D5359',
        fontSize: height * 0.012,
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        lineHeight: height * 0.016,
    },
    button: {
        borderColor: '#44A03C',
        borderWidth: 1,
        borderRadius: width * 0.05,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.005,
        marginBottom: height * 0.01,
    },
    buttonText: {
        color: '#44A03C',
        fontSize: height * 0.012,
        fontFamily: 'OpenSans-SemiBold',
    },

    container1: {
        width: '90%',
        marginTop: '3%',
        flexDirection: 'row',
        borderRadius: 25,
        elevation: 5,
        height: '10%',
        backgroundColor: 'white',
        alignSelf: 'center',
        overflow: 'hidden'
    },
    item: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: 0.3,
    },
    itemLeakage: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFEBEB', // Light red background
    },
    icon: {
        width: '55%',
        height: '55%',
        resizeMode: 'contain',
        marginTop: '10%',
    },
    text: {
        color: '#4D5359',
        fontFamily: 'OpenSans-SemiBold',
        // fontSize: RFPercentage(1.12),
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 10,
        paddingVertical: 3,
        width: '100%',
    },
    textLeakage: {
        color: 'white',
        backgroundColor: '#F30104',
        width: '100%',
        fontFamily: 'OpenSans-SemiBold',
        // fontSize: RFPercentage(1.12),
        fontSize: 10,
        textAlign: 'center',
        paddingVertical: 3,
        lineHeight: 10
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
    alertHeader: {
        width: '90%',
        height: '20%',
        alignSelf: 'center',
        marginTop: '7%',
        borderRadius: 35,
        padding: 10,
        paddingRight: 0,
        elevation: 5,
        overflow: 'hidden'
    },
    alertTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        // fontWeight: 'bold',
        fontFamily: 'OpenSans-SemiBold',
    },
    countCircle: {
        width: 25,
        height: 25,
        marginLeft: '3%',
        // opacity: 0.4,
        borderRadius: 50,
        backgroundColor: "#ffffff50",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alertCount: {
        color: '#ffffff',
        fontSize: 14,
        // marginBottom: 10,
        opacity: 1,
        zIndex: 2,
        fontFamily: 'OpenSans-SemiBold',

    },
    alertText: {
        color: '#FFF',
        fontSize: 15,
        marginVertical: 0,
        // marginLeft: 10,
        marginTop: 10,
        fontFamily: 'OpenSans-SemiBold',
    },
    warnIcon: {
        width: 18,
        height: 18
    },
    infoView: {
        marginTop: '3%',
        width: '90%',
        height: '30%',
        // backgroundColor: 'red',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    gasView: {
        width: '62%',
        height: '100%',
        backgroundColor: '#FDFEFF',
        borderRadius: 35,
        elevation: 5,

    },
    consumedText: {
        textAlign: 'left',
        fontSize: height * 0.016,
        fontFamily: 'OpenSans-Regular',
        color: '#4D5358'
    },
    balanceText: {
        textAlign: 'center',
        color: '#4D5358',
        fontSize: height * 0.016,
        fontFamily: 'OpenSans-Regular',
    },
    allowedText: {
        textAlign: 'center',
        color: '#4D5358',
        fontSize: height * 0.016,
        fontFamily: 'OpenSans-Regular',
    },
    boldText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: height * 0.04,
        textAlign: 'justify'
    },
    
    allowedText: {
        textAlign: 'left',
        color: '#4D5358',
        fontSize: 12,
        textAlign: 'justify',
        fontFamily: 'OpenSans-Regular',
    },
    deviceInfo: {
        width: '100%',
        height: '30%',
        backgroundColor: '#FDFEFF',
        borderRadius: 25,
        elevation: 5,
        // justifyContent: 'center',
        padding: 20,
        overflow: 'hidden',
        // alignItems: 'center'
    },
    tapToViewBtn: {
        marginTop: 20,
        backgroundColor: '#ffffff50',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        alignSelf: 'flex-start'
    },
    tapToViewText: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'OpenSans-Regular',
    },
    earthImage: {
        width: width * 0.35,
        height: '80%',
        resizeMode: 'contain',
        // marginRight: 15
    },
    earthText: {
        color: '#FFF',
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'OpenSans-SemiBold',
        // zIndex: 50
    },
    tapHere: {
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 5,
        fontFamily: 'OpenSans-Regular',
    }
})
