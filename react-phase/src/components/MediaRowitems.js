import React, {Component} from 'react'
import Mediaitem from './Mediaitem'
const MediaRowitems = ( props ) => {
    let MediaitemS;
    MediaitemS = props.Row.map((item) => {
        const link=item.type==='video'?require('../images/Video.png'):require('../images/photo.png');
        const photO=require(`../images/${item.photo}`);

            return <Mediaitem
                photo={photO}
                key={item.id}
                title={item.title}
                link={link}
                id={item.id}
            />
    });
    return (
        <div className="row">
            {MediaitemS}
        </div>
    )
};

export default MediaRowitems;
