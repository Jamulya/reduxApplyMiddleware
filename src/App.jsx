import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo} from './utils/action'
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('')
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

      <ul>
          {
            todos.map((item) => (
              <li key={item.id}>{item.title} 
                </li>
            ))
          }
        </ul>

    </div>
  );
}

export default App;
