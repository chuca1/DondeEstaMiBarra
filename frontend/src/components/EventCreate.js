import React from "react";
import useForm from "../Hooks/useForm";
import axios from "axios";

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
            history.push(`/profile/equipo/${params.id}`);
          })
          .catch(err => {
            console.log(err);
          });
      });
  };

  return (
    <div>
      <p>
        <label>Que estas pensando?</label>
        <input
          type="text"
          name="contenido"
          placeholder="Contenido"
          onChange={e => tuputa(e)}
        />
      </p>

      <button onClick={createPost}>Publicar </button>
    </div>
  );
}

export default PostCreate;
