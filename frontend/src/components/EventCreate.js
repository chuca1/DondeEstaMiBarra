import React from "react";
import useForm from "../Hooks/useForm";
import axios from "axios";
import { Input, Card, Button } from "antd";
import { Link } from "react-router-dom";
function EventCreate(props) {
  const paramss = props;
  const params = paramss.propps.match.params;
  const history = paramss.propps.history;
  const [form, tuputa] = useForm();
  const loggedUser = localStorage.getItem("loggedUser");
  const user = JSON.parse(loggedUser);
  form.usuario = user.name;
  const createEvent = () => {
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${params.rival}`
      )
      .then(({ data }) => {
        form.rival = data.equipo.name;
        axios
          .get(
            `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
              params.id
            }`
          )
          .then(({ data }) => {
            form.equipo = data.equipo.name;
            axios
              .post(
                `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
                  params.id
                }/evento`,
                form
              )
              .then(({ data }) => {
                axios.post(
                  `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
                    user._id
                  }/evento/${data.evento._id}/add`
                );
                console.log(data);
                user.eventos.push(data.evento._id);
                localStorage.setItem("loggedUser", JSON.stringify(user));
                history.push(
                  `/profile/equipo/${params.id}/encuentros/${params.rival}`
                );
              })
              .catch(err => {
                console.log(err);
              });
          });
      });
  };

  return (
    <Card>
      <h5>Quieres crear un evento para este juego??</h5>
      <Input
        type="text"
        name="fecha"
        placeholder="Fecha y hora"
        onChange={e => tuputa(e)}
      />
      <Input
        type="text"
        name="lugar"
        placeholder="Escribe la direccion de tu evento "
        onChange={e => tuputa(e)}
      />
      <Input
        type="number"
        name="lat"
        placeholder="Ingresa la latitud de tu evento"
        onChange={e => tuputa(e)}
      />
      <Input
        type="number"
        name="lng"
        placeholder="Ingresa la longitud de tu evento"
        onChange={e => tuputa(e)}
      />
      <h6>
        Para encontrarlo mas rapido ingresa aqui{" "}
        <Link>https://www.latlong.net/</Link>
      </h6>

      <Button onClick={createEvent}>Publicar </Button>
    </Card>
  );
}

export default EventCreate;
