import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { useAppSelector } from '../../redux/redux-hooks';
import testUseAppSelector from '../test-app-selector';

jest.mock('../../redux/redux-hooks');

describe('Grid', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const button = screen.getByText(/forgot username\/password/i);

    expect(button).toBeInTheDocument();
  });
});
