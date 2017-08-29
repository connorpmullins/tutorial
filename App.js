//These imports were installed with an NPM module, so we don't need to
//provide a pathway to them
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//We created these files, we we need to specify a pathway
import Header from './components/header';
import AlbumList from './components/AlbumList';
import AlbumDetail from './components/AlbumDetail';


/*Note: giving the View the prop of flex:1 means that it takes up the entire screen
  We need this for scrolling.*/
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}> 
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}