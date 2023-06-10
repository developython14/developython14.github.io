import React, {  useState, useRef } from 'react';
import { Card,CardBody,CardTitle,CardSubtitle,Button,CardText ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



export const ML_Project_0=(props)=>{
    const title ='🔬✨ Solar Power Station Data Analysis and Predictive Modeling Project ✨🔬';
    const description = "In this project, I have developed a Jupyter Notebook to tackle the fascinating world of solar power station data analysis. With Python 🐍 and machine learning techniques 🤖, I have explored, cleaned, and analyzed the provided dataset, uncovering valuable insights and trends. First, I embarked on a comprehensive data description 📋, providing an overview of the solar power station data, including relevant features such as solar panel efficiency ☀️, weather conditions 🌦️, energy production ⚡, and more. This step ensured a solid understanding of the dataset's structure and characteristics. Next, I applied advanced data cleaning techniques 🧹 to address missing values, outliers, and inconsistencies. By ensuring data quality and integrity, I established a solid foundation for subsequent analysis and modeling phases. Utilizing various statistical 📊 and visualization techniques 📈, I performed in-depth data analysis to identify patterns, correlations, and trends within the solar power station data. This exploration shed light 💡 on factors impacting energy production, uncovering valuable insights for optimizing performance and efficiency. The highlight of this project lies in the creation of predictive models using machine learning. By employing algorithms such as linear regression 📈, decision trees 🌳, or random forests 🌲, I developed models capable of forecasting future energy production based on historical data and relevant features. These predictive models enable stakeholders to make informed decisions, optimize resource allocation, and maximize the solar power station's output. With a robust Python codebase 💻, interactive visualizations 📊, and a well-documented workflow 📝, this Jupyter Notebook serves as a comprehensive solution for analyzing solar power station data, identifying key factors influencing performance, and generating accurate predictions for future energy production.This project showcases the power of data analysis, data cleaning, and machine learning in the renewable energy sector, offering actionable insights to drive sustainable and efficient solar power generation. 🌞💚";
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
    <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle> {showContent}  <Button onClick={handleButtonClick} color="link">More ...</Button> <br></br></CardSubtitle>
    <iframe src="https://www.kaggle.com/embed/belkassemmoustapha/solar-power-predicton?kernelSessionId=62025782" height="800" style= {{
        margin: '0 auto',
        width: '100%',
        maxWidth: '950px'
      }} frameborder="0" scrolling="auto" title="solar power predicton"></iframe>
      </CardBody>)

}