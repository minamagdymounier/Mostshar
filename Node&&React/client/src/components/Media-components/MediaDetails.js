import React, {Component} from 'react'
import PostNotFound from './PostNotFound';
import MainMediaItemDetails from './MainMediaItemDetails';
class MediaDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param:parseInt(props.match.params.number, 10),
            MediaItems1: null,
            found:false,
        };
    }
    componentDidMount() {
        this.getpost(this.state.param).then(res => {this.setState({MediaItems1:res.Post});this.setState({found:true})}).catch(err => console.log(err));
    }

    getpost = async (parameter) => {
        const response = await fetch(`/api/media/getpost?number1=${parameter}`);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };


    render() {
        if (!this.state.found) {
            return <h1>Loading...</h1>
        }
        else{
            if (!this.state.MediaItems1) {
                return <PostNotFound />
            }
            else{
                return (
                    <section className="news-details-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <MainMediaItemDetails MediaPost={this.state.MediaItems1}/>
                                <div className="col-lg-1"></div>
                            </div>
                        </div>
                    </section>
                )
            }
        }

    }
}



export default MediaDetails
