import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';

describe('Shopping List', () => {
  it('renders shopping list name', () => {
    const shoppingList = {
      id: 1,
      name: 'test',
      shoppingItems: [],
    };
    render(<ShoppingList shoppingList={shoppingList} />);
    const shoppingListName = screen.getByTestId(
      'shopping-list-name-1'
    );
    expect(shoppingListName).toBeInTheDocument();
    expect(shoppingListName.textContent).toBe(shoppingList.name);
  });
});
