import React, {Component} from 'react'

class MediaDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param:parseInt(props.match.params.number, 10),
            MediaItems1:[
                {id:1, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاالبغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:2, thumbnail: "Mustashar2.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:3, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة .",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:4, thumbnail: "Mustashar2.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي فيركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:5, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:6, thumbnail: "Mustashar2.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:7, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:8, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
            ],
        };
    }

    render() {
        const isPlayer = p => p.id === this.state.param;
        const player= this.state.MediaItems1.find(isPlayer);
        console.log(this.state.param);
        if (!player) {
            return <div>Sorry, but the post was not found</div>
        }
        return (
            <div>
                {player.thumbnail}
            </div>
        )
    }
}



export default MediaDetails
