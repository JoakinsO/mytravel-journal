

import pin from "../images/location-pin.png"

function MainSection(props) {
    return (  
      <div className="section-div">
        <img src={props.img} className="content--img"/>
        <div className="contant-section">
          <div className="content-1-div">
            <img src={pin} className="location-pin"/>
            <p>{props.location}</p>
            <a href={props.locationOnMap} target="_blank">
              <p className="map-link">View on Google Maps</p>
            </a>
          </div>
          <h1 className="title">{props.title}</h1>
          <p><b>{props.dates}</b></p>
          <p>{props.description}</p>
        </div>
      </div>

    )
  }

export default MainSection;