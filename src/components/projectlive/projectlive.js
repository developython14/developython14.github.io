import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,CardBody,CardTitle,CardSubtitle,Button,CardText ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import React, {  useState, useRef } from 'react';

const Projectdetails = (props) => {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    // You can access the props passed to the component
    // and use them to render dynamic content
    return (
        <Card
  style={{
    width: '18rem'
  }}
  className="m-3"
>
<Carousel autoPlay={true} showThumbs={false}>
                <div>
                    <img src="https://images.pexels.com/photos/3934616/pexels-photo-3934616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3934616/pexels-photo-3934616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3934616/pexels-photo-3934616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
        </Carousel>
  <CardBody>
    <CardTitle tag="h5">
      Right App
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Mobile App
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button color="danger" onClick={toggle}>
      Live Video
    </Button>
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Right Edu</ModalHeader>
        <ModalBody>
           <VideoPlayer/>
        </ModalBody>
      </Modal>  
  </CardBody>
</Card>
        
    
    );
  };
  
  const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
  
    const handlePlayPause = () => {
      const video = videoRef.current;
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div className="video-player">
        <video ref={videoRef} src="https://youtu.be/0OLIink2zvs" controls />
  
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    );
  };
  
  export default Projectdetails;
  