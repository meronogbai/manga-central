import { create } from 'react-test-renderer';
import Search from '../components/Search';

test('renders correctly', () => {
  const tree = create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
