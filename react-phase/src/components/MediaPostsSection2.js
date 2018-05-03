
import React from "react";
import MediaRowitems from "./MediaRowitems";
class MediaPostsSection2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MediaItems2:[
                {id:9, photo: "Mustashar2.png", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:10, photo: "Mustashar2.png", type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:11, photo: "Mustashar2.png", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:12, photo: "Mustashar2.png", type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:13, photo: "Mustashar2.png", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:14, photo: "Mustashar2.png", type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:15, photo: "Mustashar2.png", type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:16, photo: "Mustashar2.png", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:17, photo: "Mustashar2.png", type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:18, photo: "Mustashar2.png", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:19, photo: "Mustashar2.png", type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
                {id:20, photo: "Mustashar2.png", type: 'video', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},
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
            mediAitEms.push({id:j, photo: "Mustashar2.png", type: 'photo', title: "كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي."},)
        }
        this.setState({MediaItems2:mediAitEms,current:length+4})

    }
}
export default MediaPostsSection2;