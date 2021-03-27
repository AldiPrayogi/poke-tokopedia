/** @jsxImportSource @emotion/react */
import React from 'react';
import Spin from 'antd/es/spin';
import 'antd/es/spin/style/css';
import {LoadingCSS} from "../Styling/ComponentCSS";

export const Loading =  () => {
    return (
        <div css={LoadingCSS}>
            <Spin size='large'/>
        </div>
    );
}