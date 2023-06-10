import React, {  useState, useRef } from 'react';
import { Button,} from 'reactstrap';



export const ML_Project_0=(props)=>{
    const description = '';
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
    <div> {showContent}  <Button onClick={handleButtonClick} color="link">More ...</Button> <br></br>
    <iframe src="https://www.kaggle.com/embed/belkassemmoustapha/solar-power-predicton?kernelSessionId=62025782" height="800" style= {{
        margin: '0 auto',
        width: '100%',
        maxWidth: '950px'
      }} frameborder="0" scrolling="auto" title="solar power predicton"></iframe>
      </div>)

}