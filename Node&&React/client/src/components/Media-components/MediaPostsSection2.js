
import React from "react";
import MediaRowitems from "./MediaRowitems";
class MediaPostsSection2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MediaItems2:[
                {id:13,  thumbnail: "Mustashar2.png", source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video',  title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},
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
            current:20
        };
    }
    render() {

        return (
            <div className="container sectionlight">
                {
                    <MediaRowitems Row={this.state.MediaItems2} key={this.state.current/4}/>
                }
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                    <div className="col-lg-6">
                        <button dir="rtl" className="btn btn-link loadmore" onClick={()=>this.addChild()}>المزيد</button>

                    </div>
                        <div className="col-lg-3">
                        </div>
                    </div>

            </div>
        );
    }

    addChild() {
        const length=this.state.current+1;
        const mediAitEms=this.state.MediaItems2;
        for(let j=length;j<length+4;j++){
            mediAitEms.push({id:j, thumbnail: "Mustashar2.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.",body:"بوبوبوبوبوبوبوبوبوبوبوبقثسيبسيبسيبسثصقسيبثصبسيبسيب"},)
        }
        this.setState({MediaItems2:mediAitEms,current:length+4})

    }
}
export default MediaPostsSection2;
