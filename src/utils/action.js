export const addTodo = (title) => {
    return(dispatch) => {
        return dispatch({type: 'ADD', title})
    }
}
