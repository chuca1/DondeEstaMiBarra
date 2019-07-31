import React from "react";
import useForm from "../Hooks/useForm";
import axios from "axios";
import Swal from "sweetalert2";

function PostCreate() {
  const {
    match: { params }
  } = this.props;
  const [form, tuputa] = useForm();
  const loggedUser = localStorage.getItem("loggedUser");
  const user = JSON.parse(loggedUser);
  const createPost = () => {
    axios
      .post(`http://localhost:3000/liga/LigaMX/${params.id}/post`, form)
      .then(({ data }) => {
        Swal.fire("Created", "Food Created", "success");
        this.props.history.push(`/foods/${data.food._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>
        <input style={{ display: "none" }} name="usuario" value={user.name} />
        <label>Que estas pensando?</label>
        <input
          type="text"
          name="contenido"
          placeholder="Contenido"
          onChange={e => tuputa(e)}
        />
        <input style={{ display: "none" }} name="equipo" value={params.id} />
      </p>

      <button onClick={createPost}>Publicar </button>
    </div>
  );
}

export default PostCreate;
