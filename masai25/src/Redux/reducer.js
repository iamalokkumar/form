

let oldValue={
    login:false,
    success:false,
    error:false

}

export const reducer=(initialValue=oldValue,action)=>{
    switch(action.type){
        case 'PENDING':{
          return {
            ...initialValue,login:false,success:false,error:false
          }
        }
        case 'SUCCESS':{
            return {
                ...initialValue,login:true,success:true,error:false
            }
        }
        case 'REJECT':{
            return {
                ...initialValue,login:false,success:false,error:true
            }
        }
        default:{
            return initialValue
        }
    }
}