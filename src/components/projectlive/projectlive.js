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
    var description = "The web application I developed using Flask, MongoDB, HTML, CSS, JavaScript, and Bootstrap is a comprehensive and efficient system for controlling and managing the operations of an e-services company. It offers a user-friendly interface and leverages the power of Flask and MongoDB for robust backend functionality and data management. The frontend, built with HTML, CSS, JavaScript, and Bootstrap, ensures a responsive and visually appealing user experience. This application enables the company to seamlessly control and manage various systems, including service management, customer support, and data analytics. With its scalable architecture and streamlined interface, the web application optimizes the company's operations and enhances the delivery of services.";
    const list_model = ['Html' , 'Css','Javascript' , 'Jquery' , 'Boostrap' , 'Python' , 'Flask' , 'Herouk' ,'And More..'];
    const ref = list_model.map((e) =>  <Button outline>
    {e}
</Button> )
const [showContent, setShowContent] = useState(description.slice(0,100));
const handleButtonClick = () => {
  console.log('called ');
  if(showContent.length>100){
    setShowContent(description.slice(0,100));
  }
  else{
    setShowContent(description);
  }
};
const ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const ref_images = ar.map((e)=> <div>
<img src={require(`../../assests/images/projects/project0/${e}.png`)} />
</div>) 
    return (
        <Card
  style={{
    width: '22rem'
  }}
  className="m-3"
>
<Carousel autoPlay={true} showThumbs={false} showIndicators={false}>
               {ref_images}
        </Carousel>
  <CardBody>
    <CardTitle tag="h5">
      Right Services Adminstartions
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Web Applications
    </CardSubtitle>
    <CardText>
      {showContent}  <Button onClick={handleButtonClick} color="link">More ...</Button> <br></br>
    <div>
      {ref}
    </div>

    </CardText>
    <Button color="danger" onClick={toggle}>
      Live Video
    </Button>
    <Modal isOpen={modal} toggle={toggle} fullscreen className='modal-xl'>
        <ModalHeader toggle={toggle}>Web Applications</ModalHeader>
        <ModalBody width = '100%'>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MfpuaOaq5_c" title="&quot;Building Powerful Web Apps with Python, Flask, MongoDB, JavaScript, HTML, CSS, Bootstrap, and Chart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ModalBody>
      </Modal>  
  </CardBody>
</Card>
        
    
    );
  };
  

  const Detaislsmobile = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    var description = "One of my notable projects is [App Name], a cross-platform Flutter app that connects simple users with expert service providers. This app features a comprehensive user authentication and profile management system, a service request system, expert profile viewing, and following capabilities. It also includes secure payment integration and in-app chat functionality for communication with both experts and the administration. I have seamlessly integrated RESTful APIs using the HTTP package and developed the backend using Flask and MongoDB for efficient data management. The app is compatible with both iOS and Android platforms, thanks to the power of Flutter.";
    const list_model = ['Html' , 'Css','Javascript' , 'Jquery' , 'Boostrap' , 'Python' , 'Flask' , 'Herouk' ,'And More..'];
    const ref = list_model.map((e) =>  <Button outline>
    {e}
</Button> )
const [showContent, setShowContent] = useState(description.slice(0,100));
const handleButtonClick = () => {
  console.log('called ');
  if(showContent.length>100){
    setShowContent(description.slice(0,100));
  }
  else{
    setShowContent(description);
  }
};
  const ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const ref_images = ar.map((e)=> <div>
<img src={require(`../../assests/images/projects/project0_mobile/${e}.jpeg`)} />
</div>);
 const carouselItemStyle = {
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
};
    return(
    <div>
      <Carousel showArrows={true}  style={carouselItemStyle} centerMode={true} width={'22rem'} showThumbs={false} showIndicators={false} infiniteLoop={true} interval={100}>
    {ref_images}  
  </Carousel>
  <CardBody style={{width:'22rem'}}>
    <CardTitle tag="h5">
      Right Services Adminstartions
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Web Applications
    </CardSubtitle>
    <CardText>
      {showContent}  <Button onClick={handleButtonClick} color="link">More ...</Button> <br></br>
    <div>
      {ref}
    </div>

    </CardText>
    <Button color="danger" onClick={toggle}>
      Live Video
    </Button>
    <Modal isOpen={modal} toggle={toggle} fullscreen className='modal-xl'>
        <ModalHeader toggle={toggle}>Web Applications</ModalHeader>
        <ModalBody width = '100%'>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MfpuaOaq5_c" title="&quot;Building Powerful Web Apps with Python, Flask, MongoDB, JavaScript, HTML, CSS, Bootstrap, and Chart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ModalBody>
      </Modal>  
  </CardBody>
  </div>
    )
  }

 export const Mobileappdetaisls = (props) => {
    // You can access the props passed to the component
    // and use them to render dynamic content
    var description = "The web application I developed using Flask, MongoDB, HTML, CSS, JavaScript, and Bootstrap is a comprehensive and efficient system for controlling and managing the operations of an e-services company. It offers a user-friendly interface and leverages the power of Flask and MongoDB for robust backend functionality and data management. The frontend, built with HTML, CSS, JavaScript, and Bootstrap, ensures a responsive and visually appealing user experience. This application enables the company to seamlessly control and manage various systems, including service management, customer support, and data analytics. With its scalable architecture and streamlined interface, the web application optimizes the company's operations and enhances the delivery of services.";
    const list_model = ['Html' , 'Css','Javascript' , 'Jquery' , 'Boostrap' , 'Python' , 'Flask' , 'Herouk' ,'And More..'];
    const ref = list_model.map((e) =>  <Button outline>
    {e}
</Button> )
const [showContent, setShowContent] = useState(description.slice(0,100));
const handleButtonClick = () => {
  console.log('called ');
  if(showContent.length>100){
    setShowContent(description.slice(0,100));
  }
  else{
    setShowContent(description);
  }
};

    return (
       
      <div className='d-flex flex-row justify-content-between flex-wrap'>
        <Detaislsmobile/>
        <Detaislsmobile/>
  </div>
    );
  };
  

  

  
  export default Projectdetails;
  