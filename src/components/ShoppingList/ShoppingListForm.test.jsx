import {
  fireEvent,
  render,
  screen,
  //   TestingLibraryElementError,
} from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {

  it.skip('renders a form', () => {
    render(<ShoppingListForm id="test" />);

    const form = screen.getByTestId('shopping-list-form-test');

    expect(form).toBeInTheDocument();
  });

  it.skip('input field is operational', () => {

    render(<ShoppingListForm id="test" />);

    const input = screen.getByTestId('shopping-list-form-name-test');
    fireEvent.change(input, { target: { value: 'testing, attention please' } });
    
    expect(input.value).toBe('testing, attention please');
  });

  it.skip('submits form with shopping list on button click', () => {
    const onSubmit = jest.fn();
    
    const defaultShoppingList = {
      id: null,
      name: 'shopping list',
      shoppingItems: [],
    };

    render(
      <ShoppingListForm id="test" onSubmit={onSubmit} />
    );

    const input = screen.getByTestId('shopping-list-form-name-test');
    fireEvent.change(input, { target: { value: 'shopping list' } });

    const button = screen.getByTestId('shopping-list-form-submit-button-test');
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith(defaultShoppingList);
  });
});
