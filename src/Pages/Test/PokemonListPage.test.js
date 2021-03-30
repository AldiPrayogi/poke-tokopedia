import {PokemonListPage, GET_POKEMONS} from "../PokemonListPage";
import { MockedProvider } from '@apollo/client/testing';
import {mount} from 'enzyme';

const mocks = [
    {
        request: {
            query: GET_POKEMONS,
            variables: {
                limit: 12,
                offset: 0
            },
        },
        result: {
            data: {
                pokemons: {
                    count: 3,
                    results: [
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        },
                        {
                            id: "1",
                            url: "https://pokeapi.co/api/v2/pokemon/2/",
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            __typename: "none"
                        }
                    ],
                    __typename: "none"
                },
            },
        },
    },
];

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

describe('PokemonListPage', () => {
    describe('Loading state', () => {
        const pokemonListPageLoading = mount(
            <MockedProvider mocks={mocks}>
                <PokemonListPage/>
            </MockedProvider>
        )

        it('should render correctly', () => {
            expect(pokemonListPageLoading).toMatchSnapshot();
        });
    });

    describe('Finished state', () => {
        const pokemonListPageFinished = mount(
            <MockedProvider mocks={mocks}>
                <PokemonListPage offset={0} currentPage={1}/>
            </MockedProvider>
        )

        it('should render correctly', async () => {
            await new Promise(resolve => setTimeout(resolve, 0));

            pokemonListPageFinished.update();

            expect(pokemonListPageFinished).toMatchSnapshot();
        });

        describe('handlePokemonClick', () => {
            it('should call history push with the correct name when click', async () => {
                await new Promise(resolve => setTimeout(resolve, 0));

                pokemonListPageFinished.update();

                const firstPokemon = pokemonListPageFinished.find('img').at(1);

                firstPokemon.simulate('click');

                expect(mockHistoryPush).toHaveBeenCalledWith({'pathname': `/pokemon-detail/${mocks[0].result.data.pokemons.results[0].name}`});
            });
        });

        describe('handlePaginationChange', () => {
            it('should call handlePaginationChange with currentPage', async () => {
                await new Promise(resolve => setTimeout(resolve, 0));
                pokemonListPageFinished.update();
                const paginationButton = pokemonListPageFinished.find('Button').at(1);

                const pageBeforeClick = pokemonListPageFinished.find('.active').at(0).text();
                paginationButton.simulate('click');
                const pageAfterClick = pokemonListPageFinished.find('.active').at(0).text();

                expect(pageBeforeClick).toEqual('1');
                expect(pageAfterClick).toEqual('2');
            });
        });
    });
});