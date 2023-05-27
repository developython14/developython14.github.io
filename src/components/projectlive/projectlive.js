import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Projectdetails = (props) => {
    // You can access the props passed to the component
    // and use them to render dynamic content
    return (
        <div style={{height:'200px' ,width:'200px'}}>
        <Carousel autoPlay={true}>
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
        </div>
    );
  };
  
  export default Projectdetails;
  