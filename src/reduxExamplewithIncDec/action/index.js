export const incNumber=(number)=>{
    return{
        type:"INCREMENT",
        payload:number
    }
}

export const decNumber=(number)=>{
    return{
        type:"DECREMENT",
        payload:number
    }
}

export const textField_UserName=(name)=>{
    return{
        type:"TEXTFIELD-USERNAME",
        payload:name
    }
}