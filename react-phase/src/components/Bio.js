import React, {Component} from 'react'
import Qoutation from './shared/qoutation_slider.js'
import Biolist from './bio-page-components/Bio-list'
import '../css/bootstrap.css'
import '../css/style.css'
import '../css/bio.css'

class Bio extends Component {

  constructor(props){
    super(props);
    this.state = {
        biolist:[
          {
            "id" : 1,
            "title" : "مولده و تعليمه",
            "content" : "ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ..."
          },
          {
            "id" : 2,
            "title" : "مولده و تعليمه",
            "content" : "ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ..."
          },
          {
            "id" : 3,
            "title" : "مولده و تعليمه",
            "content" : "ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ..."
          },
          {
            "id" : 4,
            "title" : "مولده و تعليمه",
            "content" : "ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ...ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ... ولد الشيخ احمد الطيب بالمراشدة فى دشنا بقنا جنوب مصر.والتحق الطيب بجامعة الازهر حتى حصل على شهادة الليسانس فى العقيدة و الفلسفة عام 1969 ثم شهادة الماجستير عام ..."
          }
        ]
      };
    }

    render() {
        return (
            <div>
                <Biolist bio_list={this.state.biolist}/>
                <Qoutation image={"human2.png"}/>
            </div>
        )
    }
}

export default Bio
