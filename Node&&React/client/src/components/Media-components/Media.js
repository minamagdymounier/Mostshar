import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../css/bootstrap.min.css';
import '../../css/media.css';
import MediaRowitems from './MediaRowitems';
import Slideritem from './SliderItem';
import MediaPostsSection2 from './MediaPostsSection2';
import Qoutation from '../shared/qoutation_slider.js'
import ModalLoader from '../Loaders/ModalLoader'
import $ from 'jquery'
class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: true,
                margin:0,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                },
                mouseDrag:false,
                dots:false,
                navText: ["<a role='button' class='prev'><img src='https://image.ibb.co/cWRQ8c/prev.png'/></a>","<a role='button' class='next'><img src='https://image.ibb.co/ks6E1x/next.png'/></a>"],
                autoplay:false,
                autoplayTimeout:3000,
                autoplayHoverPause:true
            },
            sliderItems: [],
            MediaItems1:[],
            sliders:[
                {"id":1, "thumbnail": "mustashar.png","source":["Mustashar2.png","Mustashar2.png","Mustashar2.png"], "type": "photo", "title": "مصطفى", "body":"بوبوبوبوبوبوبوبوبوبوبوب", "date":"5 يوليه 2016"},
                {"id":2, "thumbnail": "mustashar.png","source":"https://www.youtube.com/embed/AMrgBrcFefw", "type": "video", "title": "محمد", "body":"بوبوبوبوبوبوبوبوبوبوبوب", "date":"5 يوليه 2016"},
                {"id":3, "thumbnail": "mustashar.png","source":["Mustashar2.png","Mustashar2.png","Mustashar2.png"], "type": "photo", "title": "محمود", "body":"بوبوبوبوبوبوبوبوبوبوبوب", "date":"5 يوليه 2016"},
                {"id":4, "thumbnail": "mustashar.png","source":"https://www.youtube.com/embed/AMrgBrcFefw", "type": "video", "title": "السيد", "body":"بوبوبوبوبوبوبوبوبوبوبوب", "date":"5 يوليه 2016"}
            ],
            canrender:false,


        };
    }
    componentDidMount() {
        this.getSliderPosts().then(res => this.setState({sliderItems:res.Posts})).catch(err => console.log(err));
        this.getMediaPosts(0,4).then(res => this.setState({MediaItems1:res.Posts})).catch(err => console.log(err));
    }

    getSliderPosts = async () => {
        const response = await fetch('/api/media/sliderItems');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    getMediaPosts = async (beg,end) => {
        const response = await fetch(`/api/media/mediaItems?beg=${beg}&end=${end}`);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };




    render() {
        let sliderItems;

            console.log(this.state.sliderItems);
            console.log(this.state.sliders);
            sliderItems = this.state.sliderItems.map((item) => {
                const link=item.type==='video'?require('../../images/Video.png'):require('../../images/photo.png');
                const photO=require(`../../images/${item.thumbnail}`);
                return <Slideritem
                    thumbnail={photO}
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    link={link}
                    date={item.date} />

            });


        // let sliderItemModals;
        // sliderItemModals = this.state.sliderItems.map((item) => {
        // return <Slideritemmodal
        // id={item.id}
        // body={item.body}
        // type={item.type}
        // source={item.source}
        // />
//
    // });

        return (

            <div style={{backgroundColor:"#ffffff"}}>
                <div className="container sectionlighter">
                    <div className="row">
                        <div className="col-md-12">
                            {this.state.sliderItems.length!=0?<OwlCarousel
                                ref={inst => this.slider = inst}
                                className="owl-theme"
                                {...this.state.options}
                                onChanged={(property) => this.changeMiddleslide(property)}
                            >
                                {sliderItems}
                            </OwlCarousel>:<h1>Loading</h1>}

                        </div>
                    </div>
                </div>

                <section style={{backgroundColor: "#ececec"}}>
                    <div className="container sectionlight">
                        <MediaRowitems
                            Row={this.state.MediaItems1}
                            Key={1}
                        />
                    </div>
                </section>
                {/*      slider      */}
                <Qoutation image={"human2.png"}/>
                <section style={{backgroundColor: "#ececec"}}>
                    {this.state.MediaItems1.length!=0?<MediaPostsSection2
                        current={this.state.MediaItems1.length}
                    />:<h1>Loading</h1>}

                </section>
            <ModalLoader modalItems={this.state.sliderItems} />
        </div>
        );

    }

    changeMiddleslide(property) {
        const current = property.item.index+1;
        $(".owl-item").find("img").css("opacity", "0.4");
        $(".owl-item").find("div").find(".slider-item").css("display", "none");
        $(".owl-item").eq(current).find("img").css("opacity", "1");
        $(".owl-item").eq(current).find("div").find(".slider-item").css("display", "block");
    }
}

export default Media;
