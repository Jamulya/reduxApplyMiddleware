export const addTodo = (title) => {
    return(dispatch) => {
        return dispatch({type: 'ADD', title})
    }
}

export const deleteTodo = (id) => {
    return(dispatch) => {
        return dispatch({type: 'DELETE', id})
    }
}
export const importantTodo = (id) => {
    return(dispatch) => {
        return dispatch({type: 'IMPORTANT', id})
    }
}
export const doneTodo = (id) => {
    return(dispatch) => {
        return dispatch({type: 'DONE', id})
    }
}
export const deleteAllTodo = () => {
    return(dispatch) => {
        return dispatch({type: 'DELETE_ALL'})
    }
}
export const editTodo = (id, title, change) => {
    return(dispatch) => {
       if(change){
        return dispatch({type: 'EDIT', id, title})
       }else{
        return dispatch({type: 'EDIT2', id})
       }
    }
}


