
let initialData={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

 export let reducer=(oldState=initialData,action)=>{
    
    switch(action.type){
      case 'PENDING_LOG' :{
        return{
            ...oldState,isLoading:true,isError:false
        }
      }
      case 'SUCCESS_LOG':{
        return{
            ...oldState,isLoading:false,isError:false,isAuth:true,token:action.token
        }
      }
      case 'FAILED_LOG' :{
        return{
            ...oldState,isLoading:false,isError:true
        }
      }
      default :{
        return oldState
      }
    }
}

