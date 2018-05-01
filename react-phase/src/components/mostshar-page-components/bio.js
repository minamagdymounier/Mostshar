import React, {Component} from 'react'
import BioItem from './sBio.js'
import InBetween from './inBetween.js'

class Bio extends Component {
  constructor(props)
  {
    super(props);
  }
render() {
  return(
    <main className="bio-section">
  		<section className="container" dir="rtl" lang="ar">
        <InBetween title={this.props.title} link={this.props.link}/>
        <div className="row">
          <BioItem title={"مولده و تعليمه"} content={"ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة"} more={"المزيد"} link={this.props.link} />
          <BioItem title={"مولده و تعليمه"} content={"ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة"} more={"المزيد"} link={this.props.link} />
          <BioItem title={"مولده و تعليمه"} content={"ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة"} more={"المزيد"} link={this.props.link} />
          <BioItem title={"مولده و تعليمه"} content={"ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة"} more={"المزيد"} link={this.props.link} />
        </div>
      </section>
    </main>
  );
}
};

export default Bio;
