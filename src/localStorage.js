export function saveState(store){
    try{
        localStorage.setItem('store', JSON.stringify(store));
    }
    catch(err){
        //ignore
    }
}
export function retrieveState(){
    try{
        var retrieved = JSON.parse(localStorage.getItem('store'))
        if(retrieved === null){
            return undefined
        }else{
            return retrieved
        }
        
    }catch(err){
        //
    }
}