import React from 'react';

const InstagramIcon = ({fill, width, height}) => {
    return (
        // eslint-disable-next-line react/style-prop-object
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram"  width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill={fill} strokeLinecap="round" strokeLinejoin="round" id='instagram'>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
        </svg>

    );
};

export default InstagramIcon;