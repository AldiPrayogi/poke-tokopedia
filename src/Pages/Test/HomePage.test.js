import {HomePage, GET_POKEMONS} from '../HomePage'
import { MockedProvider } from '@apollo/client/testing';
import {mount} from 'enzyme';

const mocks = [
    {
        request: {
            query: GET_POKEMONS,
            variables: {
                limit: 10,
                offset: Math.floor((Math.random() * 1108) + 1)
            },
        },
        result: {
            data: {
                pokemons: {
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
                        }
                    ],
                    __typename: "none"
                },
            },
        },
    },
];

describe('HomePage', () => {

    describe('Loading state', () => {
        const homePageLoading = mount(
            <MockedProvider mocks={mocks}>
                <HomePage/>
            </MockedProvider>
        )

        it('should render correctly', () => {
            expect(homePageLoading).toMatchSnapshot();
        });
    });

    describe('Finished state', () => {
        const homePageFinished = mount(
            <MockedProvider mocks={mocks}>
                <HomePage/>
            </MockedProvider>
        )

        it('should render correctly', async () => {
            await new Promise(resolve => setTimeout(resolve, 0));

            homePageFinished.update();

            expect(homePageFinished).toMatchSnapshot();
        });

        // describe('handleChange', () => {
        //     it('should change state', async () => {
        //         await new Promise(resolve => setTimeout(resolve, 0));
        //
        //         homePageFinished.update();
        //
        //         homePageFinished.find('SearchBar').simulate('change');
        //
        //     });
        // });
    });
});