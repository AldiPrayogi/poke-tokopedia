import {TopBar} from "../TopBar";
import {shallow} from 'enzyme';

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

describe('TopBar', () => {
    const wrapper = shallow(<TopBar/>);

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('handlePokeballClick', () => {
        it('should call useHistory.push with / when pokeball button is clicked', () => {
            const pokeBallButton = wrapper.find('.pokeball-button');

            pokeBallButton.simulate('click');

            expect(mockHistoryPush).toHaveBeenCalledWith('/');
        });

        it('should call useHistory.push with / when home button is clicked', () => {
            const homeButton = wrapper.find('.home-button');

            homeButton.simulate('click');

            expect(mockHistoryPush).toHaveBeenCalledWith('/');
        });
    });

    describe('handleListClick', () => {
        it('should call useHistory.push with /pokemon-list when pokemon list button is clicked', () => {
            const pokemonListButton = wrapper.find('.pokemon-list-button');

            pokemonListButton.simulate('click');

            expect(mockHistoryPush).toHaveBeenCalledWith('/pokemon-list');
        });
    });

    describe('handlePokedexClick', () => {
        it('should call useHistory.push with /pokedex when pokedex button is clicked', () => {
            const pokedexButton = wrapper.find('.pokedex-button');

            pokedexButton.simulate('click');

            expect(mockHistoryPush).toHaveBeenCalledWith('/pokedex');
        });
    });


});