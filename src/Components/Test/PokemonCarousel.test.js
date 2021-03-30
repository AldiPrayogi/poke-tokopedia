import {shallow} from 'enzyme';
import {PokemonCarousel} from "../PokemonCarousel";
import {PokemonDataCarousel} from "../../Fixtures/PokemonData";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

afterEach(() =>{
    jest.clearAllMocks();
})

afterAll(() => {
    jest.clearAllMocks();
})

describe('PokemonCarousel', () => {
    const wrapper = shallow(<PokemonCarousel data={PokemonDataCarousel}/>);
    
    describe('render', () => {

        it('should render correctly with data', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
    describe('handlePokemonClick', () => {
        it('should call history push using pokemonName when pokemon is clicked', () => {
            const firstPokemon = wrapper.find('.pokemon-image').at(0);

            firstPokemon.simulate('click');

            expect(mockHistoryPush).toHaveBeenCalledWith({'pathname': `/pokemon-detail/${PokemonDataCarousel[0].name}`});
        });
    });
});