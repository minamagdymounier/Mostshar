import React, {Component} from 'react';
import OwlItem from '../mostshar-page-components/OwlItem.js';
import OwlCarousel from 'react-owl-carousel';

class LoadOwls extends Component {
constructor(props)
{
  super(props);
  this.state=
    {
      options:
            {
            loop:false,
            margin:30,
            dots:false,
            dotsEach:false,
            nav:true,
            navContainer:false,
            navText: ["<i class='fas fa-long-arrow-alt-left gold'style='font-size: 29px;'></i>","<i class='gold fas fa-long-arrow-alt-right' style='font-size: 29px;'></i>"],
            responsive:{
              0:{
                items:1,
                margin:0
              },
              600:{
                items:2,
                nav:true,
                margin:50
              },
              800:{
                items:3,
                nav:true,
                margin:130
              },
              1000:{
                items:4,
                nav:true,
                margin:30
              }
            }
    }
    }

}
render() {
  const owls = this.props.Owls.map((owl) => {
    const type=owl.type==='video'?"fa fa-play-circle":"fas fa-image";
    return(
			<OwlItem
        key = {owl.id}
        image = {owl.image}
        content = {owl.content}
        type = {type}
        modal_id = {owl.modal_id}
        />
		);
	});
  return(
    <OwlCarousel
        ref={inst => this.slider = inst}
        className="owl-carousel owl-theme"
        {...this.state.options}>
        {owls}
      </OwlCarousel>

  );
}
};

export default LoadOwls;
