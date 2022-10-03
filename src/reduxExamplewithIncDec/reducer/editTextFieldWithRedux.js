const initialTextValueState="null";
const editTextFieldWithRedux=(state=initialTextValueState,action)=>{
    switch(action.type){
      case "TEXTFIELD-USERNAME":
        return {...state,
                initialTextValueState:action.payload
              }
        default: return state      
    }
}

export default editTextFieldWithRedux;