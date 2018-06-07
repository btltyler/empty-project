const Immutable = require('seamless-immutable')

const { actionTypes, actionCreators } = require('./actions')

const initialState = Immutable.from({
  chainMetadata: {
    chainName: 'Sample Project Chain'
  }
})

const reducer = (state = initialState, action) => {
  if (action.type.endsWith('STROBE')) {
    return state
  }
  console.log(action)

  switch (action.type) {
    case '@@interbit/INIT':
      console.log('INIT REACHED!')
      return state
    case actionTypes.TEST:
      return state
    default:
      return state
  }
}

module.exports = {
  actionTypes,
  actionCreators,
  initialState,
  reducer
}

