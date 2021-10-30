import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Lifesavers___Bust_2_link} from './assets/imageLinks.js'
const Page_Sign_Up  = ({navigation}) => {
	const [focus0, setFocus0] = useState(false);
	const [focus1, setFocus1] = useState(false);
	const [focus2, setFocus2] = useState(false);
	useEffect(() => {
	}, []);
	const onClick_Sign_Up_Button = () => {
					navigation.navigate("Page_Login")
	}
	const onClick_Sign_Up = () => {
					navigation.navigate("Page_Login_1")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page2]}    >
			<View style = {noneModeStyles._Sign_Up_Data}    >
				<View style = {noneModeStyles._Lifesavers___Bust_2_container}    >
					<View style = {noneModeStyles._Lifesavers___Bust_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers___Bust_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Sign_Up_Form}    >
					<View style = {[noneModeStyles._Full_Name_Tex_Box, {borderColor: focus0 ? "rgb(237, 236, 244)" : "rgb(237, 236, 244)",backgroundColor: focus0 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)"}]}    >
						<View style = {noneModeStyles._Placeholder___Right_Icon}    >
							<View style={noneModeStyles._label}>
								<TextInput style = {[{flex: 1, outline: "none",color: "rgba(123,107,168,100)",}]} placeholderTextColor = {"rgb(123, 107, 168)"}  placeholder = "Full Name" onFocus = {() => setFocus0(true)} onBlur = {() => setFocus0(false)} />
							</View>
						</View>
					</View>
					<View style = {[noneModeStyles._Email_Text_Box, {borderColor: focus1 ? "rgb(237, 236, 244)" : "rgb(237, 236, 244)",backgroundColor: focus1 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)"}]}    >
						<View style = {noneModeStyles._Placeholder___Right_Icon_2}    >
							<View style={noneModeStyles._label_2}>
								<TextInput style = {[{flex: 1, outline: "none",}]} placeholderTextColor = {"rgb(123, 107, 168)"}  placeholder = "Email" onFocus = {() => setFocus1(true)} onBlur = {() => setFocus1(false)} />
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Password_Wrapper}    >
						<View style = {[noneModeStyles._Password_Text_Box, {borderColor: focus2 ? "rgb(237, 236, 244)" : "rgb(237, 236, 244)",backgroundColor: focus2 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)"}]}    >
							<View style = {noneModeStyles._Placeholder___Right_Icon_3}    >
								<View style={noneModeStyles._label_3}>
									<TextInput style = {[{flex: 1, outline: "none",color: "rgba(123,107,168,100)",}]} placeholderTextColor = {"rgb(123, 107, 168)"}  placeholder = "Password" onFocus = {() => setFocus2(true)} onBlur = {() => setFocus2(false)} />
								</View>
								<View style = {noneModeStyles._Icon_Eye}    >
									<View style = {noneModeStyles._layer_084d5f}    >
									</View>
									<View style = {noneModeStyles._layer_29cabc}    >
										<View style = {noneModeStyles._layer_d2137f}   >
											<Svg style={{height: 15, width: 22}} viewBox = "0 0 22 15">
												<Path fill = {"#A095C1"}     d = "M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"/>
											</Svg>
										</View>
									</View>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles._Forgot_Password_link}   >
							Forgot Password?
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Sign_Up_Button}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Sign_Up_Button();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._label_4}   >
						Sign Up
					</Text>
				</View>
				<View style = {noneModeStyles._Bottom_Link}    >
					<Text style = {noneModeStyles._Don_t_have_an_account_}   >
						Already have an account?
					</Text>
					<Text style = {noneModeStyles._Sign_Up} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Sign_Up();}}>
						Sign In
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Title_Lines}    >
				<Text style = {noneModeStyles._Login}   >
					Sign Up
				</Text>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Sign_Up

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Sign_Up_Data: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 152,
	right: 0,
	paddingRight: 24,
	paddingLeft: 24,
	},
_Lifesavers___Bust_2_container: {
	width: 176,
	height: 263,
	flexShrink: 0,
	marginBottom: 24,
	},
_Lifesavers___Bust_2: {
	width: "100%",
	height: "100%",
	},
_Sign_Up_Form: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 24,
	},
_Full_Name_Tex_Box: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 16,
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Email_Text_Box: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 16,
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon_2: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label_2: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Password_Wrapper: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	justifyContent: "flex-end",
	flexShrink: 0,
	},
_Password_Text_Box: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 8,
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon_3: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label_3: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 24,
	color: "rgb(123, 107, 168)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Icon_Eye: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_084d5f: {
	position: "absolute",
	},
_layer_29cabc: {
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 4},
	],
	},
_layer_d2137f: {
	},
_Forgot_Password_link: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "right",
	},
_Sign_Up_Button: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(67, 44, 129)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginBottom: 24,
	paddingTop: 12,
	paddingRight: 24,
	paddingBottom: 12,
	paddingLeft: 24,
	borderRadius: 8,
	},
_label_4: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_Bottom_Link: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	},
_Don_t_have_an_account_: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgb(130, 121, 157)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Sign_Up: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Title_Lines: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 77,
	right: 0,
	paddingRight: 24,
	paddingLeft: 24,
	},
_Login: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 32,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "center",
	},
})

