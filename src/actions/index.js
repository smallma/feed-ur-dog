export const updateBirth = (payload: {birth: string}) => {
  return {
    type: 'UPDATE_BIRTH',
    payload
  }
}