import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,CardBody,CardTitle,CardSubtitle,Button,CardText ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import React, {  useState, useRef } from 'react';

export const Projectdetails_1 = (props) => {
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
<img src={require(`../../assests/images/projects/project0/${e}.png`)}  height={'300px'} />
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
  

export  const Projectdetails_2 = (props) => {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    // You can access the props passed to the component
    // and use them to render dynamic content
    var description = "Right Education is an innovative web application that brings students, professors, and professionals together in a dynamic learning ecosystem. With real-time chat, resource sharing, and expert guidance, EducationHub fosters interactive learning and meaningful collaboration. Whether you're seeking academic support, career advice, or project partnerships, EducationHub provides a versatile platform to connect, learn, and excel. Join us and embark on a journey of knowledge, growth, and endless possibilities.";
    const list_model = ['Html' , 'Css','Javascript' , 'Jquery' , 'Boostrap' , 'Python' , 'Flask' , 'Herouk' ,'chartjs','Rest Api','And More..'];
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
<img src={require(`../../assests/images/projects/project1/${e}.png`)}  height={'300px'} />
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
      Right Education
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
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/gyBbk1W2zHg" title="web application for univertairy student" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ModalBody>
      </Modal>  
  </CardBody>
</Card>
        
    
    );
  };








export  const Detaislsmobile = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    var description = "One of my notable projects is Right_Services, a cross-platform Flutter app that connects simple users with expert service providers. This app features a comprehensive user authentication and profile management system, a service request system, expert profile viewing, and following capabilities. It also includes secure payment integration and in-app chat functionality for communication with both experts and the administration. I have seamlessly integrated RESTful APIs using the HTTP package and developed the backend using Flask and MongoDB for efficient data management. The app is compatible with both iOS and Android platforms, thanks to the power of Flutter.";
    const list_model = ['Flutter' , 'Dart','Provider' , 'Flask' , 'MongoDb' , 'Python' , 'Rest Api' , 'Herouk' ,'And More..'];
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
  const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];

const ref_images = ar.map((e)=> <div>
<img src={require(`../../assests/images/projects/project0_mobile/${e}.jpeg`) } />
</div>);
 const carouselItemStyle = {
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
};
    return(
    <div>
      <Carousel showArrows={true}  style={carouselItemStyle} centerMode={true} width={'22rem'} showThumbs={false} showIndicators={false} infiniteLoop={true} interval={100}>
    {ref_images}  
  </Carousel>
  <CardBody style={{width:'20rem'}}>
    <CardTitle tag="h5">
      Right Services
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Mobile Applications
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
        <iframe width="100%" height="389" src="https://www.youtube.com/embed/NghMP69A4Q4" title="eservices app using flutter and flask ! python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

  </div>
    );
  };
  

  

  
  export default Projectdetails_1;
  