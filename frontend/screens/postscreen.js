import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../Fire";
import * as ImagePicker from "expo-image-picker";
import { getAuth } from "firebase/auth";

const firebase = require("firebase");
require("firebase/firestore");
require("firebase/auth");

Ionicons.loadFont().then();

class Post_Screen extends React.Component {

    auth = getAuth();
    user = this.auth.currentUser;

    state = {
        text: "",
        image: null
    };

    componentDidMount() {
        this.getPhotoPermission();
    }

    getPhotoPermission = async () => {
        //if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status != "granted") {
                alert("We need permission to use your camera roll if you'd like to include a photo.");
            }
        //}
    };

    handlePost = () => {
        Fire.shared
            .addPost({ text: this.state.text.trim(), localUri: this.state.image, name: this.user.displayName })
            .then(ref => {
                this.setState({ text: "", image: null });
                this.props.navigation.goBack();
            })
            .catch(error => {
                alert(error);
            });
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/icons/back.png')} color="#73788B" style={styles.postIcon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePost}>
                        <Text style={{ fontWeight: "500" }}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={require("../assets/images/profile.png")} style={styles.avatar}></Image>
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1 }}
                        placeholder="Want to share something?"
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    ></TextInput>
                </View>

                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Image source={require('../assets/icons/camera.png')} color="#73788B" style={styles.postIcon}></Image>
                </TouchableOpacity>

                <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
                    <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }}></Image>
                </View>
            </SafeAreaView>
        );
    }
}

export default Post_Screen; 

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        paddingHorizontal: 25,
        paddingVertical: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        marginTop: 5,
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    },
    postIcon: {
        width: 25,
        height: 25,
        borderRadius: 20,
    }
});
