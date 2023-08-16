const initialState = {
  todos: [
    {
        id: 1,
        title: 'do home work'
    },
    {
        id: 2,
        title: 'eat'
    },
  ]
} 


const bankSolo = (state = initialState, action)  => {
    switch(action.type){
     case "ADD": {
        return {
            ...state,
            todos: [...state.todos, {title: action.title,
                id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1}]
        }
     }
        
        default :
         return state
        
         
    }
    
}

export default  bankSolo;