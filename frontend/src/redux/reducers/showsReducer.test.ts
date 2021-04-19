import actionTypes from '../actions/actionTypes'
import initialState from '../initialState'
import showsReducer from './showsReducer'

describe('Given a showsReducer function', () => {
  let fakeShowList: [{ name: string }]
  beforeEach(() => {
    fakeShowList = [{ name: 'fakeTitle' }]
  })

  describe('When an undefined state is passed', () => {
    test('Then should return the initialState', () => {
      const reducerResult = showsReducer(undefined, { type: '' })

      expect(reducerResult).toEqual(initialState.showsReducer)
    })
  })

  describe('When an action with type LOAD_POPULAR_SHOWS is passed', () => {
    test('Then should return the showList in a property called popularShows', () => {
      const fakeAction = {
        type: actionTypes.LOAD_POPULAR_SHOWS,
        showList: fakeShowList
      }

      const reducerResult = showsReducer(undefined, fakeAction)

      expect(reducerResult).toEqual({ popularShows: fakeShowList })
    })
  })
})
