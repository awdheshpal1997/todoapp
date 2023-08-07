 import './App.css';
 import TodoInput from './components/todoInput';
 import TodoList from './components/todolist';

function App() {
  return (
     <div className='main-container'>
      <div className='centre-container'> 
      <TodoInput/>
      <TodoList/>
      </div>
     </div>
  );
}

export default App;
