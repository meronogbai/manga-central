import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Home from '../components/Home';

test('renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
