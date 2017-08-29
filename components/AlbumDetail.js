import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';



const AlbumDetail = ({ album }) => {
	
	/*These lines allow me to cut down on the code I write if I reference a
	   certain property multiple times. See album and styles*/

	const { 
		title, 
		artist, 
		thumbnail_image,
		image,
		url 
		} = album;
	
	const { 
		thumbnailStyle, 
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle
		 } = Styles;

	return (
		<Card>
			<CardSection /*ArtistImage and info*/>
				<View style={thumbnailContainerStyle}>
					<Image 
					style= {thumbnailStyle}
					source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			
			<CardSection /*AlbumImage*/>
				<Image 
				style={imageStyle}
				source={{ uri: image}} />
			</CardSection>
			
			<CardSection /*BuyButton*/>
				<Button onPress = {() => Linking.openURL(url)}>
				Buy Now
				</Button>
			</CardSection>
		</Card>
		);
};

const Styles = {
	headerContentStyle: {
			flexDirection: 'column',
			justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;