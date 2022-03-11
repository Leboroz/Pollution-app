import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import testUseAppSelector from '../test-app-selector';

jest.mock('../../redux/redux-hooks');

describe('Home', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const button = screen.getByText(/BALL/i);
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith({ type: 'pollution/login' });
  });
});
