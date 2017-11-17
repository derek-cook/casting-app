import constants from '../constants'

var currentUserDummy = {
    firstName: "Rick",
    lastName: "Ross",
    email: "rickross@gmail.com",
    userName: "rickross",
    agency: "Affinity Artists Agency",
    phone: "(555)012-3456",
    city: "Los Angeles",
    score: 0,
}

var initialState = {
	all: null,
	currentUser: currentUserDummy // signed in user, replace with null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
			newState['currentUser'] = action.payload
			return newState

		case constants.USERS_RECEIVED:
			newState['all'] = action.payload
			return newState

		case constants.USER_CREATED:
			let array = (newState.all) ? Object.assign([], newState.all) : []
			array.unshift(action.payload)
			newState['all'] = array
			return newState

		default:
			return state
	}
}