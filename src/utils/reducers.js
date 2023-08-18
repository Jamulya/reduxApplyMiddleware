const initialState = {
  todos: [
  {
    title: 'do home work',
    isDelete: false,
    isImportant: false,
    isDone: false,
    id: 12345,
    change: false
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
     case 'DELETE_ALL': {
      return{
        ...state,
        todos: []
      }
     }
     case 'IMPORTANT': {
      return{
        ...state,
        todos: state.todos.map((item) => {
          if(item.id === action.id){
            return{
              ...item,  isImportant: !item.isImportant
            }
          }
          return item
        })
      }
     }
     case 'DONE': {
      return{
        ...state,
        todos: state.todos.map((item) => {
          if(item.id === action.id){
            return{
              ...item, isDone: !item.isDone
            }
          }
          return item
        })
      }
     }
     case 'EDIT': {
      return{
        ...state,
        todos: state.todos.map(item => {
          if(item.id === action.id){
            return{...item, title: action.title, change: !item.change}
          }else{
            return item
          }
        })
      }
     }
     case 'EDIT2': {
      return{
        ...state,
        todos: state.todos.map(item => {
          if(item.id === action.id){
            return{...item,  change: !item.change}
          }else{
            return item
          }
        })
      }
     }

   
        
        default :
         return state
        
         
    }
    
}

export default  bankSolo;