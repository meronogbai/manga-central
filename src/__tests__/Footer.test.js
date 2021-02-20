import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Footer from '../components/Footer';

test('renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
