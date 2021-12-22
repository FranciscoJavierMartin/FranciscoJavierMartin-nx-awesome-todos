import { Todo } from '@nx-awesome-todos/shared-types';
import { Story, Meta } from '@storybook/react';
import { Todos, TodosProps } from './todos';

export default {
  component: Todos,
  title: 'Todos',
} as Meta;

const todos: Todo[] = [
  { id: 1, content: 'First todo', completed: true },
  { id: 2, content: 'Second todo', completed: false },
];

const Template: Story<TodosProps> = (args) => <Todos {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  todos,
};
