import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

export default class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: "Lorem Ipsum",
        email: "mail@mail.com",
        image: require("../../assets/img/project_background.png"),
        comments: [
          {
            nickname: "Lorem",
            comment: "Lorem Ipsum",
          },
          {
            nickname: "Ipsum",
            comment: "Lorem Ipsum",
          },
        ],
      },
      {
        id: Math.random(),
        nickname: "Ipsum Lorem",
        email: "mail2@mail.com",
        image: require("../../assets/background_image_3.jpg"),
        comments: [],
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
