import React from 'react';
import './InformationBox.css';

class InformationBox extends React.Component {
  render () {
    const {nadpis, liFirst, liSecond, liThird} = this.props.content;
    const {text} = this.props.content;
    return (
      <section className="informationBox">
        <div className="informationBoxContent left">
          <div className="informationBoxContentInside">
            <p className="nadpis">{nadpis}</p>
            <ul>
              <li>{liFirst}</li>
              <li>{liSecond}</li>
              <li>{liThird}</li>
            </ul>
          </div>
        </div>
        <div className="informationBoxContent right">
          <p className="boxSecondContent">{text}</p>
        </div>
      </section>
    );
  }
}

export default InformationBox;
