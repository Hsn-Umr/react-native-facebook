import React from 'react'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import Avatar from './Reusable/Avatar'
import images from '../Assets/Images'
import { styles } from './ComponetStyles'
import User from './Reusable/User'


function CreateRoom() {
	return (
		<View style={{backgroundColor: '#fff'}}>
			<Text style={styles.roomHeadingText}>Audio and Video Rooms</Text>
			<View style={styles.createRoomContainer}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ paddingLeft: 11 }}>
					<TouchableOpacity style={styles.room}>
						<Text style={styles.roomText}>Create Room</Text>
					</TouchableOpacity>
					<User source={images.User2} />
					<User source={images.User3} />
					<User source={images.User4} />
					<User source={images.User5} />
					<User source={images.User2} />
					<User source={images.User3} />
					<User source={images.User4} />
					<User source={images.User5} />

				</ScrollView>
			</View>
			<View style={styles.bottomDivider} />
		</View>
	)
}

export { CreateRoom }
