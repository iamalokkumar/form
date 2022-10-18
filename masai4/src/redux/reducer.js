
let initial_data={
    count:0
}

export let reducer=(oldState=initial_data,action)=>{
    console.log(action.type)
    switch(action.type){
        case "increment":{
            return {
                ...oldState,count:action.payload+1
            }
        }
        case "decrement":{
            return {
                ...oldState,count:action.payload-1
            }
        }
        default:{
            return oldState
        }
    }
}