import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    Platform
} from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

const HealthIndex = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
              {/* Header */}
              <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/icons/back.png')}
                    style={styles.back}
                    />
                </TouchableOpacity>
              </View>
              {/* Logo */}
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        <Text>
                            Health Index
                        </Text>
                    </Text>
                    <Image source={require('../assets/images/index.png')}
                        style={styles.buttonImage}
                    />
                </View>
              </View>
              {/* Chart */}
              <View style={styles.chartContainer}>
                <View style={styles.chart}>
                  <Text style={styles.chartTitle}>
                    Daily
                  </Text>
                </View>
              </View>
            </SafeAreaView>
        </View>
    )
}

export default HealthIndex;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 50 : 15,
        alignItems: 'center',
      },
      back: {
        top: 5,
        width: 30,
        height: 30,
      },
      buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
      },
      button: {
        width: Dimensions.get("screen").width/1.08,
        height: Platform.OS === 'android' ? Dimensions.get("window").height/5.4 : Dimensions.get("screen").height/5.4,
        alignItems: 'stretch',
        backgroundColor: '#E2E0E9',
        padding: 30,
        borderRadius: 25,
        borderColor: '#EFEFEF',
        borderWidth: 5,
        justifyContent: 'center',
      },
      buttonTitle: {
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        top: 40,
        right: 5,
        color: COLORS.primary,
        fontFamily: 'Avenir-Medium',
        fontSize: 22,
      },
      buttonImage: {
        alignSelf: 'flex-end',
        left: 20,
        bottom: 15,
        width: 80,
        height: 80,
      },
      chartContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#E2E0E9',
        padding: 10,
      },
      chart: {
        width: Dimensions.get("screen").width/1.08,
        height: Platform.OS === 'android' ? Dimensions.get("window").height/1.68 : Dimensions.get("screen").height/1.68,
        alignItems: 'stretch',
        backgroundColor: '#EFEFEF',
        borderRadius: 25,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginVertical: 7,
      },
      chartTitle: {
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.primary,
        fontFamily: 'Avenir-Light',
        fontSize: 20,
        left: 20,
      },
})