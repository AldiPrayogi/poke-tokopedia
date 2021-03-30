import App from './App';
import {shallow} from 'enzyme';

const wrapper = shallow(<App/>)

describe('App', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
