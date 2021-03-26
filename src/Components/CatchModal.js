/** @jsxImportSource @emotion/react */

import React from 'react';
import {Button, Modal} from 'antd-mobile';
import 'antd/es/spin/style/css';
import {loading} from "../Styling/ComponentCSS";

export const CatchModal =  ({visible, setVisible, name}) => {
    console.log(visible);

    const onClose = () => {
        setVisible(false);
    }

    return (
        <div>
            <Modal
                title='CATCH EM BRO'
                visible={visible}
                markClosable={true}
                transparent
                // onClose={onClose}
            >
                <Button onClick={onClose}/>
                <p>testing</p>
            </Modal>
        </div>
    );
}