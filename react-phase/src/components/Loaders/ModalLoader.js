import React, {Component} from 'react';
import  Slideritemmodal from '../sliderModalItem';

class ModalLoader extends Component {
constructor(props)
{
  super(props);
}
render() {
  const Modals = this.props.modalItems.map((modalItem) => {
      return <Slideritemmodal
                  id={modalItem.id}
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
