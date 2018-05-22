import React, {Component} from 'react';
import  Slideritemmodal from '../Media-components/sliderModalItem';

class ModalLoader extends Component {
constructor(props)
{
  super(props);
}
render() {
  const Modals = this.props.modalItems.map((modalItem) => {
      return <Slideritemmodal

                  id={`slider-${modalItem.id}`}
                  idCarousel={`#slider-item${modalItem.id}`}
                  idForCarousel={`slider-item${modalItem.id}`}
                  body={modalItem.body}
                  type={modalItem.type}
                  source={modalItem.source}/>
                });
  return(
  		<div>
          {Modals}
  		</div>
  );
}
};

export default ModalLoader;
