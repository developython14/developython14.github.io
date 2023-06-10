import React, {  useState, useRef } from 'react';



export const ML_Project_0=(props)=>{
    const desc = '';
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
    <div>{showContent}
    <iframe src="https://www.kaggle.com/embed/belkassemmoustapha/solar-power-predicton?kernelSessionId=62025782" height="800" style= {{
        margin: '0 auto',
        width: '100%',
        maxWidth: '950px'
      }} frameborder="0" scrolling="auto" title="solar power predicton"></iframe>
      </div>)

}