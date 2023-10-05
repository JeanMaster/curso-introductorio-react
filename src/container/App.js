import React from 'react';
import TodoCounter from '../components/TodoCounter'
import TodoItem from '../components/TodoItem';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import '../styles/App.css';
import AddButton from '../components/AddButton';

function App() {
  return (
    <>
    
      <TodoCounter todo={2} completed={10}/>
        <main>
          <TodoSearch />    
          <TodoList>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </TodoList>
            <AddButton />
        </main>
    
    </>
  );
}

export default App;



