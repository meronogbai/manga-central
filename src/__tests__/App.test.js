import { create } from 'react-test-renderer';
import App from '../components/App';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
