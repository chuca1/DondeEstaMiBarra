import React, { Component } from "react";

import axios from "axios";
import { Card } from "antd";
import { Map, TileLayer, Marker } from "react-leaflet";
import EventCreate from "../../EventCreate";
class SeeEvents extends Component {
  state = {
    evnetosQ: []
  };

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
          params.id
        }/evento/${params.rival}`
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ evnetosQ: data.eventosQ });
      });
  };

  render() {
    const { evnetosQ } = this.state;

    if (evnetosQ.length > 0) {
      return (
        <div>
          {evnetosQ.map((event, i) => {
            console.log(event);
            return (
              <Card title={`${event.equipo} Vs ${event.rival}`} key={i}>
                <h5>{event.fecha}</h5>
                <h5>{event.lugar}</h5>
                {event.lng !== 0 && event.lat !== 0 ? (
                  <div>
                    <Map
                      style={{ height: "20vh", width: "20vw" }}
                      center={[event.lat, event.lng]}
                      zoom={16}
                      id="mapid"
                      ref={e => {
                        this.mapInstance = e;
                      }}
                    >
                      <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[event.lat, event.lng]} />
                    </Map>
                  </div>
                ) : (
                  <></>
                )}

                <br />
              </Card>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <Card title={`Perdon pero`}>
          <p>No hay eventos aun</p>
        </Card>
      </div>
    );
  }
}

export default SeeEvents;
