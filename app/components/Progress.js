import React from 'react';

export default (props) => {
    if (props.current === 0) {
        return null;
    }
    return <p>Processing: {props.current} of {props.total}</p>
};
