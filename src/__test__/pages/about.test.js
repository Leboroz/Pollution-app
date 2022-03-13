import { render, screen } from '../test-utils';
import testUseAppSelector from '../test-app-selector';
import Home from '../../pages/Home';
import { useAppSelector } from '../../redux/redux-hooks';

jest.mock('../../redux/redux-hooks');

describe('About', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render and click event', async () => {
    render(<Home />);

    const venezulaCard = screen.getByText(/Venezuela/i);

    expect(venezulaCard).toBeInTheDocument();
  });
});
