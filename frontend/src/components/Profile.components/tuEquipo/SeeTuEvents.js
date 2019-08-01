import React, { Component } from "react";
import axios from "axios";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Card } from "antd";
import EventCreate from "../../EventCreate";
class SeeTuEvents extends Component {
  state = {
    evnetosQ: []
  };

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    let loggedUser = localStorage.getItem("loggedUser");
    let user = JSON.parse(loggedUser);
    this.setState({ user });
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
          <EventCreate propps={this.props} />
          {evnetosQ.map((event, i) => {
            console.log(event);
            return (
              <Card title={`${event.equipo} Vs ${event.rival}`} key={i}>
                <h4>{event.fecha}</h4>
                <h4>{event.lugar}</h4>
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
              </Card>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <EventCreate propps={this.props} />
        <Card title={`Perdon pero`}>
          <p>No hay Eventos aun</p>
        </Card>
      </div>
    );
  }
}

export default SeeTuEvents;
