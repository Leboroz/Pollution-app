import { fireEvent, render, screen } from './test-utils';
import App from '../App';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import testUseAppSelector from './test-app-selector';

jest.mock('../redux/redux-hooks');

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders learn react link', () => {
    render(<App />);

    const button = screen.getByText(/ball/i);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith({ type: 'pollution/login' });
  });

  it('renders home page', () => {
    render(<App />);

    const button = screen.getByText(/ball/i);

    expect(button).toBeInTheDocument();
  });
});
