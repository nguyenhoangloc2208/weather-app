import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';
import { BrowserRouter as Router } from 'react-router-dom';

vi.mock('../../../../hooks/useGeoCoding.ts', () => ({
  __esModule: true,
  default: () => ({
    trigger: vi.fn(),
  }),
}));
describe('SearchInput', () => {
  it('renders the search input correctly', () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );
    const inputElement = screen.getByPlaceholderText(
      'Search country, or city here...',
    );
    expect(inputElement).toBeInTheDocument();
  });
  it('updates input value correctly', async () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );
    const inputElement = screen.getByPlaceholderText(
      'Search country, or city here...',
    );
    userEvent.type(inputElement, 'London');
    await waitFor(() => {
      expect(inputElement).toHaveValue('London');
    });
  });
  it('displays error message for invalid input', async () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );
    const inputElement = screen.getByPlaceholderText(
      'Search country, or city here...',
    );
    await userEvent.type(inputElement, 'InvalidCity');
    await waitFor(() => {
      const errorMessage = screen.getByText('Invalid country or city');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});