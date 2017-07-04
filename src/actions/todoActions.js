var shortid = require('shortid');


export function addTodo(text){
    return {
        type: 'ADD_TODO',
        name: text,
        id: shortid.generate()
    }
}
export function removeTodo(id){
    return {
        type: 'REMOVE_TODO',
        id: id
    }
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy; //polski zapis
var todayAng =  mm+'/'+dd+'/'+yyyy; //ang zapis

export function toggleTodo(id){
    return {
        type: 'TOGGLE_TODO',
        id: id,
        date: today
    }
}