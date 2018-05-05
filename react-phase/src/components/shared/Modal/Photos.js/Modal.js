import React from 'react'

const ModalPhotos = (props) => {
  return (
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" >
        <div class="modal-content">
          <div class="modal-header" style="border: none">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <section class="container" style="margin: 40px 0px">
            <div class="row">
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body rtl">
                    <p class="card-text gold">كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب</p>
                  </div>
                  <div class="card-footer">
                    <div class="row">
                      <div class="col-8 center-horizontal">
                        <a href=""><i class="fab fa-facebook-square"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-google-plus-g"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                      </div>
                      <div class="col-4 center-horizontal gold">
                        <h4>1/8</h4>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="http://via.placeholder.com/500x350" alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="http://via.placeholder.com/500x350"  alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="http://via.placeholder.com/500x350"  alt="Third slide"></img>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

);
}

export default BioItem;
