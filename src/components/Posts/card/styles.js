export const styles = {
	container: {
		flex: 1,
		alignContent: 'flex-start'
	},
	card: {
		content: {
			paddingTop: 10,
			paddingBottom: 10,
			borderBottomWidth: 0.2,
			shadowColor: 'rgba(255,255,255,0.3)',
			shadowOffset: { width: 1, height: 1 },
			shadowOpacity: 0.4,
			shadowRadius: 12,

			flexDirection: 'column'
		},
		head: {
			content: {
				width: '100%',
				height: 50,
				paddingLeft: 10,
				paddingRight: 10,
				borderTopColor: 'grey',
				alignItems: 'center',
				alignSelf: 'center',
				flexDirection: 'row',
				justifyContent: 'space-between'
			},
			logo: {
				width: 50,
				height: 50,
				borderRadius: 25,
				flexDirection: 'row',
				alignItems: 'center'
			}
		},
		image: {
			marginTop: 10,
			width: '100%'
		},
		actionsField: {
			content: {
				marginTop: 5,
				flexDirection: 'row'
			},
			likeIcon: {
				marginRight: 20,
				paddingLeft: 10
			},
			commentIcon: {
				marginRight: 20
			}
		},
		comments: {
			content: {
				flexDirection: 'column',
				marginTop: 10,
				paddingLeft: 10,
				width: '100%'
			},
			likes: {
				textAlign: 'left',
				alignItems: 'flex-start',
				justifyContent: 'flex-start'
			},
			comment: {
				row: {
					flexDirection: 'row'
				},
				icon: {
					width: '25%',
					alignSelf: 'center'
				},
				input: {
					marginLeft: 10,
					borderRadius: 10,
					width: '90%',
					borderWidth: 1,
					borderColor: 'grey',
					shadowOpacity: 0.2,
					padding: 2,
					fontSize: 18,
					paddingLeft: 5
				},
				col: {
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'flex-start'
				},
				txt: {
					marginTop: 10,
					marginLeft: 10,
					width: '90%',
					shadowOpacity: 0.2,
					padding: 2,
					fontSize: 16,
					paddingLeft: 5,
					alignSelf: 'center'
				}
			}
		}
	},
	modal: {
		width: 100,
		height: 100,
		backgroundColor: 'orange',
		marginTop: 150,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};
