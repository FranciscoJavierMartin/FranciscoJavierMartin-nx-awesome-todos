import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';
import { Todo } from '@nx-awesome-todos/shared-types';

const todos: Todo[] = [
  {
    id: 1,
    content: 'First todo',
    completed: false,
  },
  {
    id: 2,
    content: 'Second todo',
    completed: true,
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ todos }),
  })
) as jest.Mock;

describe('Index', () => {
  it('should render successfully', () => {
    const component = render(<Index />);
    const list = component.getByRole('list');
    expect(list.children).toHaveLength(0);
  });
});
