import React from 'react';
import { View, Text, modal, TouchableOpacity, Button } from 'react-native';

const PostMenu = ({ postId }) => {
	return (
		<Modal animationType="slide" transparent={false} visible={isVisible}>
			<View style={{ marginTop: 150 }}>
				<Button title={`Hide post${postId}`} onPress={() => Alert.alert('hide this post ')} />
			</View>
		</Modal>
	);
};
export default PostMenu;
