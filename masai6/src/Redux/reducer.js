



let initialData={
    isErr:false,
    isLoad:false,
    arr:[]
}

export let reducer=(oldState=initialData,action)=>{
    console.log(action.type)
    switch(action.type){
        case 'PENDING':{
            return{
                ...oldState,isLoad:true,isErr:false
            }
        }
        case 'SUCCESS':{
            return{
                ...oldState,isLoad:false,isErr:false,arr:action.payload
            }
        }
        case 'FAILURE':{
            return {
                ...oldState,isLoad:false,isErr:true
            }
        }
        case 'SELECT':{
            return{
                ...oldState,arr:action.payloads
            }
        }
        case 'HTL':{
            return{
                ...oldState,arr:action.payloadss
            }
        }
        case 'LTH':{
            return{
                ...oldState,arr:action.payloadsss
            }
        }

        default:{
            return oldState
        }
    }
}