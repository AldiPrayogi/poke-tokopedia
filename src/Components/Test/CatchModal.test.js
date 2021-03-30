import {shallow} from 'enzyme';
import {CatchModal} from "../CatchModal";
import {DetailedPokemonData} from '../../Fixtures/PokemonData';
import {FIRST_TEXT} from "../../Utils/Utils";

afterEach(() =>{
    jest.clearAllMocks();
})

afterAll(() => {
    jest.clearAllMocks();
})

describe('CatchModal', () => {
    describe('CatchModal Failed Catch', () => {
        const setVisibleMock = jest.fn();
        const setLoadingMock = jest.fn();
        const setLoadingTextMock = jest.fn();
        const setChanceMock = jest.fn();
        const handleLoadingMock = jest.fn();

        const wrapperFailed = shallow(
            <CatchModal
                visible={true}
                setVisible={setVisibleMock}
                setLoadingText={setLoadingTextMock}
                setIsLoading={setLoadingMock}
                handleLoading={handleLoadingMock}
                pokemon={DetailedPokemonData}
                catchChance={60}
                setChance={setChanceMock}
                isLoading={false}
            />
        )

        it('should render correctly with loading false and failed catch', () => {
            expect(wrapperFailed).toMatchSnapshot();
        });

        describe('handleOnClose', () => {
            it('should call setVisible, setLoading and setLoadingTextMock when close button is clicked', () =>{
                const closeButton = wrapperFailed.find('.cancel-button');

                closeButton.simulate('click');

                expect(setVisibleMock).toHaveBeenCalledWith(false);
                expect(setLoadingMock).toHaveBeenCalledWith(true);
                expect(setLoadingTextMock).toHaveBeenCalledWith(FIRST_TEXT);
            })
        });

        describe('handleRetry', () => {
            it('should call setLoadingText, setLoading, setChance, and handleThrow when retry button is clicked', () =>{
                const retryButton = wrapperFailed.find('.retry-button');

                retryButton.simulate('click');

                expect(setLoadingMock).toHaveBeenCalledWith(true);
                expect(setLoadingTextMock).toHaveBeenCalledWith(FIRST_TEXT);
                expect(setChanceMock).toHaveBeenCalled();
                expect(handleLoadingMock).toHaveBeenCalled();
            })
        });
    });

    describe('CatchModal Successful Catch', () => {
        const wrapperSuccess = shallow(
            <CatchModal
                visible={true}
                pokemon={DetailedPokemonData}
                catchChance={40}
                isLoading={false}
            />
        )

        it('should render correctly with loading false and successful catch', () => {
            expect(wrapperSuccess).toMatchSnapshot();
        });
    });

    describe('CatchModal Loading', () => {
        const wrapperSuccess = shallow(
            <CatchModal
                visible={true}
                pokemon={DetailedPokemonData}
                catchChance={40}
                isLoading={true}
                loadingText={FIRST_TEXT}
            />
        )

        it('should render correctly with loading is true', () => {
            expect(wrapperSuccess).toMatchSnapshot();
        });
    });
});