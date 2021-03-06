import axios from 'axios'
export const CreateCL = (obj, id) => async (dispatch) => {
  try {
    let url = '/api/cl/'
    await axios.put(url, { cl: obj, id: id }).then((res) => {
      console.log( res)
      dispatch({
        type: 'CREATE_cl',
        payload: res.data,
      })
    })
  } catch {
    dispatch({
      type: 'Error',
    })
  }
}
export const GetOneCL = (id) => async (dispatch) => {
  await axios.get('/api/ci/' + id, { id: id }).then((res) => {
    // console.log("dispatchingggggggg");
    dispatch({
      type: 'GET_CL',
      payload: res.data.cl,
    })
  })
}
export const Reset = () => async (dispatch) => {
   
    dispatch({
      type: 'RESET_CL',
      
    })
   
}
