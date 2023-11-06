import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Project({ projects }) {
  return (
    <div className="container">
      <div className="row">
      {projects.map((project) => {
        const { title, githubLink, deployedLink, image, description } = project;
        return (
          <div className="col-md-6 col-lg-6 d-flex justify-content-center" key={title}>
            <Card className="mb-5 mt-3" style={{ width: '18rem', border: '1px white solid', background: 'black' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title style={{ color: 'lightslategrey' }}>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button className="mb-2" href={deployedLink} target="_blank" variant="primary">View App</Button>
                <Button href={githubLink} target="_blank" variant="secondary">View Repo</Button>
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