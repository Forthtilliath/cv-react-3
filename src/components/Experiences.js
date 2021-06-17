import React, { Component } from "react";

class Experiences extends Component {
  experiences = [
    {
      //   date: "Jan <strong>2016</strong> - March <strong>2017</strong>",
      date: "Jan 2016 - March 2017",
      title: "DEVELOPPEUR WEB",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    perferendis alias mollitia rerum quam minus modi voluptatum,
                    perspiciatis recusandae nam! Fuga vel facilis iure omnis
                    iusto voluptatum, dignissimos aperiam aspernatur!`,
    },
    {
      date: "Jan 2015 - March 2016",
      title: "JOGGEUR AMATEUR",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    perferendis alias mollitia rerum quam minus modi voluptatum,
                    perspiciatis recusandae nam! Fuga vel facilis iure omnis
                    iusto voluptatum, dignissimos aperiam aspernatur!`,
    },
    {
      date: "Jan 2013 - March 2015",
      title: "FLEURISTE",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    perferendis alias mollitia rerum quam minus modi voluptatum,
                    perspiciatis recusandae nam! Fuga vel facilis iure omnis
                    iusto voluptatum, dignissimos aperiam aspernatur!`,
    },
    {
      date: "Jan 2010 - March 2013",
      title: "EBOUEUR",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    perferendis alias mollitia rerum quam minus modi voluptatum,
                    perspiciatis recusandae nam! Fuga vel facilis iure omnis
                    iusto voluptatum, dignissimos aperiam aspernatur!`,
    },
  ];
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCES</strong>
          </h6>
          {this.experiences.map((experience, key) => (
            <div className="row" key={key}>
              <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">{experience.date}</p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>{experience.title}</strong>
                  </h6>
                  <p>{experience.description}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experiences;
