import { useEffect, useState } from 'react';
import { Todo } from '@nx-awesome-todos/shared-types';
import styles from './index.module.scss';
import { Todos, Ui } from '@nx-awesome-todos/ui';

export function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  return (
    <div className={styles.page}>
      <Ui />
      <Todos todos={todos} />
    </div>
  );
}

export default Index;
