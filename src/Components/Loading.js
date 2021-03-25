import React from 'react';
import { WhiteSpace} from 'antd-mobile';
import Spin from 'antd/es/spin';
import 'antd/es/spin/style/css';
import {loading} from "../Styling/ComponentCSS";

export const Loading =  () => {
    return (
        <div css={loading}>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <Spin size='large'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
            <WhiteSpace size='xl'/>
        </div>
    );
}