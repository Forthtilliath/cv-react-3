import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
          <div>
            <div className="card">
              <div className="card-content">
                <h6 className="mt-bottom">
                  <strong>ABOUT ME</strong>
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam ex at eveniet repudiandae, illo nobis, explicabo minus
                  ipsum, facere quo ab ut? Pariatur nostrum repellendus laborum
                  commodi quia qui cupiditate?
                </p>
              </div>
              <div className="card-action">
                <h6>
                  <strong>PERSONAL INFO</strong>
                </h6>
                <div className="row mt">
                  <div className="col s12 m6 l6 xl6">
                    <p>
                      <strong>Adresse :</strong> 49000
                      ANGERS
                    </p>
                    <p>
                      <strong>Email :</strong> aaa@yahoo.fr
                    </p>
                    <p>
                      <strong>Téléphone :</strong> 06 60 60 60 60
                    </p>
                  </div>
                  <div className="s12 m6 l6 xl6">
                    <p>
                      <strong>Langue principale :</strong> Français
                    </p>
                    <p>
                      <strong>Langue secondaire :</strong> Anglais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default About;