

let initialData={
    arr:[],
    isLoading:false,
    isError:false
}

export let reducer=(oldstate=initialData,action)=>{
    switch(action.type){
     
        case 'PENDING':{
            return{
                ...oldstate,isLoading:true,isError:false
            }
        }
        case 'SUCCESS':{
            return{
                ...oldstate,isLoading:false,isError:false,arr:action.payload
            }
        }
        case 'FAILURE':{
            return{
                ...oldstate,isLoading:false,isError:true
            }
        }
        case 'HTL':{
            return{
                ...oldstate,arr:action.payloads
            }
        }
        case 'LTH':{
            return{
                ...oldstate,arr:action.payloadss
            }
        }
        case 'BHK':{
            return {
                ...oldstate,arr:action.bhk
            }
        }
        case 'LOCATION':{
            return {
                ...oldstate,arr:action.location
            }
        }
        default:{
            return oldstate
        }
    }
}