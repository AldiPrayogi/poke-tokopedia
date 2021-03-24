import React from "react";
import {Carousel, WhiteSpace, WingBlank} from "antd-mobile";
import {pokemonCarousel} from "../Styling/ComponentCSS";
import {useHistory} from 'react-router-dom';

export const PokemonCarousel = (data) => {
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
                    {data.data.map(val => (
                        <div css={pokemonCarousel}>
                            <div className='pokemonNameContainer'>
                                <h4 className='PokemonName' style={{color: '#f2e9ab'}}>{(val.name).toUpperCase()}</h4>
                            </div>
                            <WhiteSpace size='xl'/>
                            <img
                                src={val.image}
                                alt="Pokemon Image"
                                style={{ width: '250px', verticalAlign: 'top'}}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                }}
                                onClick={() => handleListClick(val.id)}
                            />
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
        </div>

    )
}