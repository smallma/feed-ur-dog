// const update = (state = {}, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return
//     default:
//       return state
//   }
// }
//


const initState = {
  list: []
}

const UpdateBirth = (state=initState, action) => {
  switch (action.type) {
    case 'UPDATE_BIRTH':
      console.log('action.payload.birth: ', action.payload.birth)
      return {
          ...state,
          list: [{ birth: action.payload.birth }]
      }

    default:
      return state
  }
}

export default UpdateBirth