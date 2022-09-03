import React from 'react';

class Benefits extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="features">
        <div className="container" >
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Benefits</h3>
                        <h4 className="text-muted web-desc">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</h4>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className=""><h4>We put a lot of effort in design.</h4></li>
                            <li className=""><h4>The most important ingredient of successful website.</h4></li>
                            <li className=""><h4>Sed ut perspiciatis unde omnis iste natus error sit.</h4></li>
                            <li className=""><h4>Submit Your Orgnization.</h4></li>
                        </ul>
                        <a href="javascript:void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="/images/online-world.svg" alt="macbook image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Benefits;