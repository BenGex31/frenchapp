/** @format */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NewsItem = ({ author, content, description }) => {
  return (
    <TouchableOpacity

          // onPress={() => this.props.displayDetailForFilm(film.id)}
          style={styles.main_container}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'lightgrey',
            }}>
            
          </View>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title_text}>{author}</Text>
              <Text style={styles.vote_text}>Note</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.description_text} numberOfLines={4}>
                {description}
              </Text>
            </View>
            <View>

                <Text style={styles.date_text}>
                  {content}
                </Text>

            </View>
          </View>
        </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
    main_container: {
      marginTop: 25,
      height: 190,
      flexDirection: 'row',
      padding: 5,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      backgroundColor: 'lightblue',
      marginRight: 5,
      marginLeft: 5,
    },
    image: {
      width: 100,
      height: 180,
      backgroundColor: 'grey',
    },
    favorite_image: {
      width: 15,
      height: 15,
    },
    text_image: {
      color: 'red',
      alignItems: 'center',
      width: 100,
      paddingLeft: 5,
      paddingRight: 5,
      textAlign: 'center',
    },
    content: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title_text: {
      paddingLeft: 5,
      fontSize: 20,
      fontWeight: 'bold',
      flexWrap: 'wrap',
      width: 170,
    },
    vote_text: {
      fontSize: 10,
      fontWeight: 'bold',
      paddingTop: 5,
      color: 'blue',
    },
    description: {
      flex: 7,
    },
    description_text: {
      fontStyle: 'italic',
      fontSize: 11,
    },
    date_text: {
      textAlign: 'right',
    },
    no_date_text: {
      textAlign: 'right',
      color: 'red',
    },
  });
