function TodoCounter({ todo , completed}) {
    return (
      <header>
        <h1 className="header-tittle">Todo Tareas</h1>
        <p className="header-counter">Tienes <label>{todo}</label> tareas de <label>{completed}</label> completadas </p>
      </header>
    );
  };
 
  
  export default TodoCounter;