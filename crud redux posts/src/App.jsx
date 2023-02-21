import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { CardPost } from "./components/CardPost";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { addPost, putPost } from "./Redux/postSlice";
import { handleClose, handleShow } from "./Redux/modalPostSlice";

const initialState = {
  img: "",
  title: "",
  description: "",
};

function App() {
  const [formulario, setFormulario] = useState(initialState);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isEdit ? dispatch(putPost(formulario)) : dispatch(addPost(formulario));
    dispatch(handleClose());
    handleClose();
    setFormulario(initialState);
    setIsEdit(false);
  };

  const ClickUpdate = (post) => {
    setIsEdit(true);
    handleShow();
    dispatch(handleShow());
    setFormulario(post);
  };

  const dispatch = useDispatch();

  const { show } = useSelector((state) => state.modalStore);

  const { posts } = useSelector((state) => state.postStore);

  return (
    <div className="container" style={{ width: "100%", height: "100vh" }}>
      <div className="d-flex justify-content-center mt-3">
        <Button variant="primary" onClick={() => dispatch(handleShow())}>
          Primary
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {posts.map((post) => (
          <CardPost
            key={post.id}
            dispatch={dispatch}
            post={post}
            ClickUpdate={ClickUpdate}
          ></CardPost>
        ))}
      </div>
      {/* Modal */}

      <div>
        <Modal
          show={show}
          onHide={() => dispatch(handleClose())}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Img</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Img"
                  name="img"
                  value={formulario.img}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Text className="text-muted">Url de la imagen</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={formulario.title}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={formulario.description}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                {isEdit ? "Update" : "Save"}
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default App;
