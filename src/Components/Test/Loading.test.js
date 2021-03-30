import {Loading} from "../Loading";
import {shallow} from 'enzyme';

describe('Loading', () => {
    const wrapper = shallow(<Loading/>);

    it('should render Loading', () => {
        expect(wrapper).toMatchSnapshot();
    });

});