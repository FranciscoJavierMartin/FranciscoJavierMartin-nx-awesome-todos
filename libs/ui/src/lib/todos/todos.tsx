import Link from 'next/link';
import { Todo } from '@nx-awesome-todos/shared-types';

export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'} key={t.id}>
          <Link href={'/details'}>{t.content}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
