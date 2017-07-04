import todoState from '../states/todoState.js';

export function todoReducer(state=todoState, action){
    switch(action.type){
        case 'ADD_TODO':{
            state = {...state,
                      todos: [...state.todos, {
                            name: action.name,
                            id: action.id,
                            isDone: false,
                            date: ''
                            }]
                    };
            console.log(state)
            return state
        }
        case 'REMOVE_TODO':{
            console.log(action.id)
            var newTodos = state.todos.filter(item => item.id !== action.id)
            state = {...state,
                      todos: newTodos
                    };
            return state
        }
        case 'TOGGLE_TODO':{
            console.log(action.id);
            return {...state,
                   todos: 
                    state.todos.map((item, i) => {
                        if(item.id !== action.id){
                            return item
                        }else{
                            return {...item,
                                   isDone: !item.isDone,
                                   date: action.date}
                        }
                    })
                    }
        }
        default:{
            return state
        }
    }
}
