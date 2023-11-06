import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Project({ projects }) {
  return (
    <div className="container">
      <div className="row">
      {projects.map((project) => {
        const { title, github, deployed, image, description } = project;
        return (
          <div className="col-md-6 col-lg-6 d-flex justify-content-center" key={title}>
            <Card className="mb-5 mt-3" >
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title >{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button href={deployed} target="_blank" variant="primary">App</Button>
                <Button href={github} target="_blank" variant="secondary">Repo</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Project;