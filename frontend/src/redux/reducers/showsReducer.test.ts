import actionTypes from '../actions/actionTypes'
import initialState from '../initialState'
import showsReducer from './showsReducer'

describe('Given a showsReducer function', () => {
  let fakeShowList: [{ name: string }]
  let fakeShow: { name: string }
  beforeEach(() => {
    fakeShowList = [{ name: 'fakeTitle' }]
    fakeShow = { name: 'fakeTitle' }
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

      expect(reducerResult).toEqual({
        popularShows: fakeShowList,
        similarShows: []
      })
    })
  })

  describe('When an action with type LOAD_SHOW_DETAIL is passed', () => {
    test('Then should return the show object in a property called show', () => {
      const fakeAction = {
        type: actionTypes.LOAD_SHOW_DETAIL,
        show: fakeShow
      }

      const reducerResult = showsReducer(undefined, fakeAction)

      expect(reducerResult).toEqual({
        popularShows: [],
        similarShows: [],
        show: fakeShow
      })
    })
  })

  describe('When an action with type LOAD_SIMILAR_SHOWS is passed', () => {
    test('Then should return the similar show list in a property called similarShows', () => {
      const fakeAction = {
        type: actionTypes.LOAD_SIMILAR_SHOWS,
        similarShows: fakeShowList
      }

      const reducerResult = showsReducer(undefined, fakeAction)

      expect(reducerResult).toEqual({
        popularShows: [],
        similarShows: fakeShowList
      })
    })
  })
})
