import React, { Component } from 'react';
import { View, Modal, Text, TouchableOpacity, Button, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
const ModalOptions = (props) => {
	const { modal } = styles;
	const { isVisible, setVisibility } = props;
	const _share = {
		whatsApp: () => Alert.alert('you clicked to whatsapp share menu'),
		facebook: () => Alert.alert('you clicked to facebook share menu'),
		pinterest: () => Alert.alert('you clicked to pinterest share menu'),
		mail: () => Alert.alert('you clicked to mail share menu'),
		twitter: () => Alert.alert('you clicked to twitter share menu')
	};
	return (
		<Modal animationType="slide" transparent={true} visible={isVisible}>
			<View style={modal.content}>
				<TouchableOpacity style={modal.item}>
					<Button
						title="Share via Pinterest"
						onPress={() => _share.pinterest()}
						style={modal.btn}
						color="#F29938"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={modal.item}>
					<Button
						title="Share Post Via Facebook"
						onPress={() => _share.facebook()}
						style={modal.btn}
						color="#F29938"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={modal.item}>
					<Button title="Via WhatsApp" onPress={() => _share.whatsApp()} style={modal.btn} color="#F29938">
						<Icon name="logo-whatsapp" size={20} />
					</Button>
				</TouchableOpacity>
				<TouchableOpacity style={modal.item}>
					<Button title="Mail" onPress={() => _share.mail()} style={modal.btn} color="#F29938" />
				</TouchableOpacity>
				<TouchableOpacity style={modal.item}>
					<Button title="Twitter" onPress={() => _share.twitter()} style={modal.btn} color="#F29938" />
				</TouchableOpacity>

				<TouchableOpacity style={modal.closeBtn}>
					<Button
						title="Close"
						onPress={() => setVisibility()}
						style={modal.btn}
						color="#FAFAFA"
						accessibilityLabel="back to home"
					/>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

const styles = {
	modal: {
		content: {
			width: 250,
			backgroundColor: '#F5F5F5',
			opacity: 0.9,
			marginTop: 200,
			marginBottom: 200,
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
			borderRadius: 20,
			padding: 10
		},
		item: {
			margin: 5
		},
		btn: {
			color: 'teal',
			padding: 10,
			fontSize: 20
		},
		closeBtn: {
			width: '100%',
			borderRadius: 20,
			opacity: 0.9,
			backgroundColor: '#F29938'
		}
	}
};
export default ModalOptions;
