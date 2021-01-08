const intialState = {};
const GET="GET_DATA"
const SEARCH="SEARCH_DATA"

var boxReducer=(state = intialState, action)=>{
  console.log("readucer called");
  switch (action.type) {
    case GET:
      state = action.payload;
      break;
    case SEARCH:
      state = action.payload;
      break;
  }
  return state;
}
export default boxReducer;



