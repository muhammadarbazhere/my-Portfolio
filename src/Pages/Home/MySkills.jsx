import data from "../../data/index.json";

export default function MySkills() {
  return (
    // <section className="skills--section" id="mySkills">
    //   <div className="portfolio--container">
    //     <p className="section--title">My Skills</p>
    //     <h2 className="skills--section--heading">My Expertise</h2>
    //   </div>

    //   <div className="skills--section--container">
    //     {data?.skills?.map((item, index) => (

    //       <div key={index} className="skills--section--card">
    //         <div className="skills--section--img">
    //           <img src={item.src} alt="Product Chain" />
    //         </div>
    //         <div className="skills--section--card--content">
    //           <h3 className="skills--section--title">{item.title}</h3>
    //           <p className="skills--section--description">{item.description}</p>
            
            
    //         </div>

    //       </div>
    //     ))}
    //   </div>
    // </section>



    <div id="abc">
    <h2 id="skills">Skills</h2>
   <div><span><br /></span></div>
   
   <div><span></span></div>

   <h1 id="exp">Experties</h1>
   <div><span><br /></span></div>
   
   <div><span><br /></span></div>




<section id="mySkills1" >
  

<div className="portfolio--container1">





         <div className="skills--section--container">
<div id="one">
  <h2>Frontend Development</h2>

                  <div   className="skills--section--img" >
                  <img src="./img/product-chain-1.png" alt="Loeding..." />
                  </div>
  <br />
  <p>Proficient in html, CSS and javaScript with a focus on ReactJs. Demonstrated skills in responsive web design. Familarity with state management using Redux.</p>

</div>


         </div>


         <div className="skills--section--container">
         <div id="two">
  <h2>Backend Development</h2>

                  <div   className="skills--section--img" >
                  <img src="./img/tag-1.png" alt="Loeding..." />
                  </div>
  <br />
  <p >Skilled in Node.js for server-side scripting and Express.js for API development. Experience in integerating MongoDB for secure data management.</p>

</div>

         </div>

  
</div>




</section>
</div>



















  );
}
