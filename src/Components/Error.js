import React from 'react';
import {Card} from 'antd-mobile';
import {useHistory} from 'react-router-dom';

export const Error =  (message) => {
    const history = useHistory();
    return (
        <div>
            <Card title='Error'>
                <p>Oops! {message}</p>
                {setTimeout(() => {history.push('/')}, 3000)}
            </Card>
        </div>
    );
}