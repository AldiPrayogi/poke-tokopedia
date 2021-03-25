import React from "react";
import {Carousel, WhiteSpace, WingBlank} from "antd-mobile";
import {pokemonCarousel} from "../Styling/ComponentCSS";
import {useHistory} from 'react-router-dom';
import {GOLDEN_YELLOW} from "../Constants/Color";

export const PokemonCarousel = (data) => {
    const history = useHistory();

    const handleListClick =  (name) => {
        history.push({
            pathname: `/pokemon-detail/${name}#Details`,
            state: {
                pokemonName: name
            }
        });
    }

    return(
        <div style={{width: "100%", textAlign: 'center'}}>
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    cellSpacing={10}
                    slideWidth={0.8}
                >
                    {data.data.map(val => (
                        <div style={{textAlign: "center"}}>
                            <div style={{backgroundColor: "#222224", width: "100%"}}>
                                <h4 style={{color: "#f2cc65", fontSize: "2.7vh", width: "100%"}}>{(val.name).toUpperCase()}</h4>
                            </div>
                            <WhiteSpace size='xl'/>
                            <img
                                src={val.image}
                                alt="Pokemon Image"
                                style={{ height: '35vh', verticalAlign: 'top'}}
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