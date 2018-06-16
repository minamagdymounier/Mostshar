
import React from "react";
import MediaRowitems from "./MediaRowitems";
class MediaPostsSection2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MediaItems2:[],
            current:props.current
        };
    }
    componentDidMount() {
        this.getMediaPosts(this.state.current,this.state.current+4)
            .then(res => {this.setState({MediaItems2:res.Posts});this.setState({current:this.state.current+res.Posts.length});})
            .catch(err => console.log(err));
    }
    getMediaPosts = async (beg,end) => {
        const response = await fetch(`/api/media/mediaItems?beg=${beg}&end=${end}`);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        console.log(this.state.MediaItems2.length);
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
        console.log(this.state.current);
        const mediAitEms=this.state.MediaItems2;
        this.getMediaPosts(this.state.current,this.state.current+4)
            .then(res => {this.setState({ MediaItems2: [...this.state.MediaItems2, ...res.Posts ] });this.setState({current:this.state.current+res.Posts.length});})
            .catch(err => console.log(err));

    }
}
export default MediaPostsSection2;
