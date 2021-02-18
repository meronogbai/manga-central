import { create } from 'react-test-renderer';
import Loading from '../components/Loading';

test('renders correctly', () => {
  const tree = create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
