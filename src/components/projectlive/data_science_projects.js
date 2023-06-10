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

export const ML_Project_1=(props)=>{
    const title ='🔬✨ Malaria in Africa ✨🔬';
    const description = "In this project, I developed a Jupyter Notebook to analyze and gain insights from data on malaria cases in Africa, country by country. I embarked on a comprehensive journey, starting with data description and cleaning, followed by in-depth data analysis and the creation of predictive models using Python and machine learning techniques.To begin, I meticulously described the dataset, providing important details about its structure, variables, and relevant information. With a clear understanding of the data, I proceeded to clean and preprocess it, ensuring accurate and reliable results for subsequent analyses. Next, armed with powerful Python libraries, I conducted exploratory data analysis (EDA) to uncover patterns, trends, and potential correlations within the malaria data. I visualized key metrics and indicators using informative charts, graphs, and maps, painting a comprehensive picture of the malaria landscape across different African countries. Building upon the insights gained from the EDA, I leveraged machine learning algorithms and techniques to create predictive models. By training and fine-tuning these models on the historical malaria data, I aimed to predict future trends, identify high-risk regions, and provide valuable insights for effective intervention strategies and resource allocation. Throughout the project, I adhered to best practices in data analysis, ensuring the accuracy, reliability, and reproducibility of my findings. The Jupyter Notebook serves as a comprehensive and documented record of the entire analytical process, enabling easy replication and further exploration of the data. This project merges the domains of data analysis, machine learning, and public health, utilizing Python's data manipulation and modeling capabilities to derive actionable insights from malaria data in Africa. By combining descriptive analysis, data cleaning, and predictive modeling, this project contributes to understanding and combating malaria, ultimately aiding in efforts to reduce its impact on the African continent.";
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
        <iframe src="https://www.kaggle.com/embed/belkassemmoustapha/malaria?kernelSessionId=72811923" height="800" style= {{
        margin: '0 auto',
        width: '100%',
        maxWidth: '950px'
      }} frameborder="0" scrolling="auto" title="malaria"></iframe> 
      </CardBody>)

}