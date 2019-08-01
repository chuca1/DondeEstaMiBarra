import React from "react";
import useForm from "../Hooks/useForm";
import axios from "axios";
import { Input, Card, Button } from "antd";
function PostCreate(props) {
  const paramss = props;
  const params = paramss.propps.match.params;
  const history = paramss.propps.history;
  const [form, tuputa] = useForm();
  const loggedUser = localStorage.getItem("loggedUser");
  const user = JSON.parse(loggedUser);
  form.usuario = user.name;
  const createPost = () => {
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${params.id}`
      )
      .then(({ data }) => {
        form.equipo = data.equipo.name;
        axios
          .post(
            `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
              params.id
            }/post`,
            form
          )
          .then(({ data }) => {
            user.publicaciones.push(data.publicacion._id);

            localStorage.setItem("loggedUser", JSON.stringify(user));
            history.push(`/profile/equipo/${params.id}`);
          })
          .catch(err => {
            console.log(err);
          });
      });
  };

  return (
    <div>
      <Card>
        <h4>Que estas pensando?</h4>
        <Input
          type="text"
          name="contenido"
          placeholder="Contenido"
          onChange={e => tuputa(e)}
        />
        <Button onClick={createPost}>Publicar </Button>
      </Card>
    </div>
  );
}

export default PostCreate;
