import React, {Component} from 'react'
import PostNotFound from './PostNotFound';
import MainMediaItemDetails from './MainMediaItemDetails';
class MediaDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param:parseInt(props.match.params.number, 10),
            MediaItems1: [
                {id:1, thumbnail: "mustashar.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"},
                {id:2, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"},
                {id:3, thumbnail: "mustashar.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"},
                {id:4, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"},
                {id:5, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاالبغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:6, thumbnail: "Mustashar2.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:7, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة .",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:8, thumbnail: "Mustashar2.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي فيركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:9, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:10, thumbnail: "Mustashar2.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:11, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:12, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"فففقفققفقفقفقفقفقفقفقفقفقفقفقفقفقفقفقف"},
                {id:13, thumbnail: "Mustashar2.png", source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video',  title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:14, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:15, thumbnail: "Mustashar2.png", source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:16, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:17, thumbnail: "Mustashar2.png", source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:18, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:19, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:20, thumbnail: "Mustashar2.png", source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:21, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسبببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببيبثصبسيبسيب"},
                {id:22, thumbnail: "Mustashar2.png", source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:23, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
                {id:24, thumbnail: "Mustashar2.png", source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
            ],
        };
    }

    render() {
        const isPlayer = p => p.id === this.state.param;
        const player= this.state.MediaItems1.find(isPlayer);
        if (!player) {
            return <PostNotFound />
        }
        return (
            <section className="news-details-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <MainMediaItemDetails MediaPost={player}/>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </section>
        )
    }
}



export default MediaDetails
