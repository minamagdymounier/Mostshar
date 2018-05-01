import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../css/bootstrap.min.css';
import '../css/media.css';
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

            items: [
                <div  key={1} style={{maxWidth: 640,maxHeight: 288}}>
                    <img className="card-img-top img-fluid" src={require('../images/mustashar.png')} alt="Card image cap" style={{maxWidth: "100%" ,maxHeight: "100%" }} />
                    <div className="card-body slider-item">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="img-fluid" src={require('../images/Video.png')}/>
                            </div>
                            <div className="col-md-9">
                                <div className="container" style={{maxHeight:"100%",overflow: "hidden",marginBottom:4}}>
                                    <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <p className="slider-font" dir="rtl">قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب
                                        </p>
                                    </a>
                                </div>
                                <p className="container slider-date-font" dir="rtl">5 يوليه 2016 </p>
                            </div>
                        </div>
                    </div>
                </div>,
                <div  key={2} style={{maxWidth: 640,maxHeight: 288}}>
                    <img className="card-img-top img-fluid" src={require('../images/mustashar.png')} alt="Card image cap" style={{maxWidth: "100%" ,maxHeight: "100%" }} />
                    <div className="card-body slider-item">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="img-fluid" src={require('../images/Video.png')}/>
                            </div>
                            <div className="col-md-9">
                                <div className="container" style={{maxHeight:"100%",overflow: "hidden",marginBottom:4}}>
                                    <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <p className="slider-font" dir="rtl">قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب
                                        </p>
                                    </a>
                                </div>
                                <p className="container slider-date-font" dir="rtl">5 يوليه 2016 </p>
                            </div>
                        </div>
                    </div>
                </div>,
                <div  key={3} style={{maxWidth: 640,maxHeight: 288}}>
                    <img className="card-img-top img-fluid" src={require('../images/mustashar.png')} alt="Card image cap" style={{maxWidth: "100%" ,maxHeight: "100%" }} />
                    <div className="card-body slider-item">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="img-fluid" src={require('../images/Video.png')}/>
                            </div>
                            <div className="col-md-9">
                                <div className="container" style={{maxHeight:"100%",overflow: "hidden",marginBottom:4}}>
                                    <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <p className="slider-font" dir="rtl">قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب
                                        </p>
                                    </a>
                                </div>
                                <p className="container slider-date-font" dir="rtl">5 يوليه 2016 </p>

                            </div>
                        </div>
                    </div>
                </div>,
                <div  key={4} style={{maxWidth: 640,maxHeight: 288}}>
                    <img className="card-img-top img-fluid" src={require('../images/mustashar.png')} alt="Card image cap" style={{maxWidth: "100%" ,maxHeight: "100%" }} />
                    <div className="card-body slider-item">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="img-fluid" src={require('../images/Video.png')}/>
                            </div>
                            <div className="col-md-9">
                                <div className="container" style={{maxHeight:"100%",overflow: "hidden",marginBottom:4}}>
                                    <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <p className="slider-font" dir="rtl">قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب
                                        </p>
                                    </a>
                                </div>
                                <p className="container slider-date-font" dir="rtl">5 يوليه 2016 </p>

                            </div>
                        </div>
                    </div>
                </div>,
            ],

        };
    }


    render() {

        return (
            <div className="container sectionlighter">
                <div className="row">

                    <div className="col-md-12">
                        <OwlCarousel
                            ref={inst => this.slider = inst}
                            className="owl-theme"
                            {...this.state.options}
                            onChanged={(property) => this.changeMiddleslide(property)}

                        >
                            {this.state.items}
                        </OwlCarousel>

                    </div>

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
