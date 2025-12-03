import { use, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Task = {
  id: string;
  text: string;
  done: boolean;
};

const STORAGE_KEY = '@todoTasks';

type Action = 
    | { type: 'loadTask'; tasks: Task[] }  
    | { type: 'addTask'; text: string }
    | { type: 'toggleTask'; id: string; };


const todoReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case 'loadTask':
        return action.tasks as Task[];

    case 'addTask':
      return [
        { id: Date.now().toString(), text: action.text, done: false },
        ...tasks,
      ];

    case 'toggleTask':
      return tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );

    default:
      return tasks;
  }
};

export const useTodos = () => {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const loadTasks = async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) dispatch({
          type: 'loadTask', 
          tasks: JSON.parse(saved)
      });
      };
      loadTasks();
    }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    addTask: (text: string) => dispatch({ type: 'addTask', text }),
    toggleTask: (id: string) => dispatch({ type: 'toggleTask', id }),
  };
}