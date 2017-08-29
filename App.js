//These imports were installed with an NPM module, so we don't need to
//provide a pathway to them
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//We created these files, we we need to specify a pathway
import Header from './components/header';
import AlbumList from './components/AlbumList';
import AlbumDetail from './components/AlbumDetail';

export default class App extends React.Component {
  render() {
    return (
      <View> 
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}