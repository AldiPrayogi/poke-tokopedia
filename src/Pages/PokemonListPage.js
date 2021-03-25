import React from 'react';
import {TopBar} from "../Components/TopBar";
import {navigationButton, homepage} from "../Styling/PagesCSS";
import {Button, WhiteSpace} from "antd-mobile";

export const PokemonListPage =  () => {
    return (
        <div>
            <div>
                <TopBar />
            </div>
            <div css={homepage}>
                {/*<div css={navigationButton}>*/}
                {/*    <WhiteSpace size='xl'/>*/}
                {/*    <WhiteSpace size='xl'/>*/}
                {/*    <WhiteSpace size='xl'/>*/}
                {/*    <WhiteSpace size='xl'/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}