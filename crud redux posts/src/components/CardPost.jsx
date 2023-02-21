import { Button, Card, Col} from "react-bootstrap";
import { delPost, putPost } from "../redux/postSlice";




export const CardPost = ({post,dispatch, ClickUpdate}) => {
  return (
    <Col xs="12" sm="8" md="4" key={post.id}>
      <Card>
        <Card.Img variant="top" alt="image" src={post.img} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="danger" onClick={() => dispatch(delPost(post.id))}>
              Delete
            </Button>
            <Button variant="warning" onClick={() => ClickUpdate(post)}>update</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
