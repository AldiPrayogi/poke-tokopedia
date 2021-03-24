import React from 'react';
import {Card} from 'antd-mobile';

export const Error =  (message) => {
    return (
        <div>
            <Card title='Error'>
                {message}
            </Card>
        </div>
    );
}