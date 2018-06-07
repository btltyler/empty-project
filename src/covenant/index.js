const Immutable = require('seamless-immutable')

const { actionTypes, actionCreators } = require('./actions')

const initialState = Immutable.from({
  chainMetadata: {
    chainName: 'Sample Project Chain'
  }
})

const reducer = (state = initialState, action) => {
  console.log('SAMPLE PROJECT REDUCER')

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

