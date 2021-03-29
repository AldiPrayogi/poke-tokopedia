/** @jsxImportSource @emotion/react */

import React from "react";
import {Carousel, WhiteSpace, WingBlank} from "antd-mobile";
import {CarouselComponentCSS} from '../Styling/ComponentCSS'
import {useHistory} from 'react-router-dom';

export const PokemonCarousel = (data) => {
    const history = useHistory();

    const handleListClick =  (name) => {
        history.push({
            pathname: `/pokemon-detail/${name}`
        });
    }

    return(
        <div css={CarouselComponentCSS}>
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    cellSpacing={10}
                    slideWidth={1}
                >
                    {data.data.map(val => (
                        <div className='carousel-container'>
                            <div className='pokemon-name-header'>
                                <h4 className='pokemon-name'>{(val.name).toUpperCase()}</h4>
                            </div>
                            <WhiteSpace size='xl'/>
                            <img
                                src={val.image}
                                alt={val.name}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                }}
                                onClick={() => handleListClick(val.name)}
                            />
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
        </div>
    )
}