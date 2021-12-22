import { useEffect, useState } from 'react';
import { Todo } from '@nx-awesome-todos/shared-types';
import styles from './index.module.scss';

export function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  return (
    <div className={styles.page}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content} - {todo.completed ? 'completed' : 'not completed'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
