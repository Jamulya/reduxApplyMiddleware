import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteAllTodo, importantTodo, doneTodo, editTodo} from './utils/action'
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('')
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')


  const dispatch = useDispatch ()
  const todos = useSelector((store) => store.todos.todos)

  return (
    <div className="App">
      <div>
        <input type="text"  onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button type='button' onClick={() => {dispatch(addTodo(todo))
          setTodo("")
          }}>ADD</button>
      </div>
      <div >
        <button type='button' onClick={() => dispatch(deleteAllTodo())}>delete all</button>
      </div>

      <ul>
          {
            todos.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
              <li key={item.id} style={{marginLeft: '20px 0', color: item.isImportant ? 'red' : '', textDecoration: item.isDone ? 'line-through' : ''}}>
                {item.change ? <input onChange={(e) => setValue(e.target.value)} defaultValue={item.title} type='test' /> : item.title} 
              <button type='button' onClick={() => dispatch(importantTodo(item.id))}>important</button>
              <button type='button' onClick={() => dispatch(doneTodo(item.id))}>done</button>
              <button type='button' onClick={() => {dispatch(editTodo(item.id, value, item.change))
              if(item.change){
                setValue('')
              }else{
                setValue(item.title)
              }
              }}>
                {item.change ? 'save' : 'edit'}
              </button>
                </li>
            ))
          }
        </ul>
        <div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button>search</button>
        </div>

    </div>
  );
}

export default App;
