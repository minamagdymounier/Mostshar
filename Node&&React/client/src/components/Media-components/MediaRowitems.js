import React, {Component} from 'react'
import Mediaitem from './Mediaitem'
const MediaRowitems = ( props ) => {
    let MediaitemS;

    MediaitemS = props.Row.map((item) => {
        const link=item.type==='video'?require('../../images/Video.png'):require('../../images/photo.png');
        const photO=require(`../../images/${item.thumbnail}`);

            return <Mediaitem
                thumbnail={photO}
                body={item.body}
                key={item.id}
                type={item.type}
                source={item.source}
                title={item.title}
                link={link}
                id={item.id}
                idModal={`#${item.id}`}
                idCarousel={`#item${item.id}`}
                idForCarousel={`item${item.id}`}
            />
    });
    return (
        <div className="row">
            {MediaitemS}
        </div>
    )
};

export default MediaRowitems;
