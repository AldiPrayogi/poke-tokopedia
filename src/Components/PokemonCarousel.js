import React from "react";
import {Carousel, WhiteSpace, WingBlank} from "antd-mobile";
import {pokemonCarousel} from "./ComponentCSS";
import {useHistory} from 'react-router-dom';

export const PokemonCarousel = (pokemonData) => {
    const history = useHistory();

    const handleListClick =  (id) => {
        history.push(`/pokemon-detail/${id}#Details`);
    }

    return(
        <div>
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    cellSpacing={10}
                    slideWidth={0.8}
                >
                    {pokemonData.data.map(val => (
                        <div css={pokemonCarousel}>
                            <img
                                src={val.image}
                                alt=""
                                style={{ width: '200px', verticalAlign: 'top', height:'200px', overflow:'hidden' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                }}
                                onClick={() => handleListClick(val.id)}
                            />
                            <WhiteSpace size='xl'/>
                            <h4 className='PokemonName' style={{color: '#f2e9ab'}}>{(val.name).toUpperCase()}</h4>
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
        </div>

    )
}