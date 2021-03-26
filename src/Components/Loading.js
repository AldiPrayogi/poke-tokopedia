/** @jsxImportSource @emotion/react */
import React from 'react';
import { WhiteSpace} from 'antd-mobile';
import Spin from 'antd/es/spin';
import 'antd/es/spin/style/css';
import {loading} from "../Styling/ComponentCSS";

export const Loading =  () => {
    return (
        <div css={loading}>
            <Spin size='large'/>
        </div>
    );
}