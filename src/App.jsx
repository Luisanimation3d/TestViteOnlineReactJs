import { TitleTask } from './components/TitleTask';
import { SearchBar } from './components/SearchBar';
import { ListContainer } from './components/ListContainer';

import './App.css';
import { TaskItem } from './components/TaskItem';
import { useState } from 'react';

function App() {
  const tasks = [
    {
      id: 1,
      name: 'Pasear al perro',
      completed: false,
    },
    {
      id: 2,
      name: 'Alimentar al gato',
      completed: false,
    },
    {
      id: 3,
      name: 'Practicar ReactJs',
      completed: false,
    },
  ];
  const [tareas, setTareas] = useState(tasks);
  const totalTareas = tareas.length;
  const completedTareas = tareas.filter(
    (tarea) => tarea.completed === true
  ).length;

  const completedTask = (id)=>{
    const foundTask = tareas.findIndex(tarea=>tarea.id === id)
  }

  return (
    <>
      <TitleTask completedTasks={completedTareas} totalTasks={totalTareas} />
      <SearchBar />
      <ListContainer>
        {tareas.map((task) => (
          <TaskItem key={task.id} name={task.name} completed={task.completed} />
        ))}
      </ListContainer>
    </>
  );
}

export default App;
