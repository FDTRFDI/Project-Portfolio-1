import React from 'react';
import "./project.css";
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const portfolioDate =[

 {

  id:1, 
  image : IMG1 ,
  title : "Financial Data Dashboard",
  github : 'https://github.com/project1', 
  demo : 'https://demo1.com',
 }, 
 {
  id: 2, 
  image : IMG2 ,
  title : " Futuristic Stats Interface ",
  github : 'https://github.com/project2', 
  demo : 'https://demo2.com',
 }, 

  {
  id:3, 
  image : IMG3 ,
  title : " Project Analytics Mobile",
  github : 'https://github.com/project3', 
  demo : 'https://demo3.com' ,
 }, 


  {
  id: 4, 
  image : IMG4 ,
  title : " Finance Task Manager",
  github : 'https://github.com/project4', 
  demo : 'https://demo4.com' , 
 }, 


  {
  id:5, 
  image : IMG5 ,
  title : " Visual Insights Hub",
  github : 'https://github.com/project5', 
  demo : 'https://demo5.com' , 
 }, 


  {
  id:6, 
  image : IMG6 ,
  title : " Interactive Decision Dashboard",
  github : 'https://github.com/project6', 
  demo : 'https://demo6.com' , 
 }, 



];
function Project() { 
  return (
    <section id="project"  className='project'>
        <div className='top_section'>
        <h5> waht skills i have  </h5>
        <h2> my Expreience </h2>
        </div>
            <div className='container project_container'>
            {portfolioDate.map(({id , image , title , github , demo })=>(

            <article key={id} className='protfolio_item'>
            <div className='protfolio_item_img'>
            <img src={image} alt=""/>
            </div>  

            <h3>{title}</h3>
            <div className='protfolio_item_btns'>
            <a href={github} target="_blank" className='btn'> Github </a>
            <a href={demo} target="_blank" className='btn btn-primary'> live demo </a>

            </div>

            </article>





  ))}


</div>

</section>


  );
}

export default Project ; 

