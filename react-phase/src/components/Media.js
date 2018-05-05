import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../css/bootstrap.min.css';
import '../css/media.css';
import MediaRowitems from './MediaRowitems';
import Slideritem from './SliderItem';
import MediaPostsSection2 from './MediaPostsSection2';
import  Slideritemmodal from './sliderModalItem';
import Qoutation from './shared/qoutation_slider.js'
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
            sliderItems: [
                {id:1, thumbnail: "mustashar.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"},
                {id:2, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"},
                {id:3, thumbnail: "mustashar.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"},
                {id:4, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', title: "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب", body:"بوبوبوبوبوبوبوبوبوبوبوب", date:"5 يوليه 2016"}
            ],
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
        let sliderItems;
        sliderItems = this.state.sliderItems.map((item) => {
                    const link=item.type==='video'?require('../images/Video.png'):require('../images/photo.png');
                    const photO=require(`../images/${item.thumbnail}`);
                    return <Slideritem
                        thumbnail={photO}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        link={link}
                        date={item.date} />

                });
        let sliderItemModals;
        sliderItemModals = this.state.sliderItems.map((item) => {
        return <Slideritemmodal
        id={item.id}
        body={item.body}
        type={item.type}
        source={item.source}
        />

    });

        return (
            <div style={{backgroundColor:"#ffffff"}}>
                <div className="container sectionlighter">
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel
                                ref={inst => this.slider = inst}
                                className="owl-theme"
                                {...this.state.options}
                                onChanged={(property) => this.changeMiddleslide(property)}
                            >
                                {sliderItems}
                            </OwlCarousel>
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
                        <MediaPostsSection2
                        />
                </section>
            <div>
                  {sliderItemModals}
            </div>
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
