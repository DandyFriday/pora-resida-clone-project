import React from 'react';
import "./ourExpStyles.css";
import frame1 from "../../assets/frame1.svg";
import frame2 from "../../assets/frame2.svg";
import frame3 from "../../assets/frame3.svg";

const OurExperience = () => {
  return (
    <main className='our_exp_container'>
        <section className='boxes_container flex'>

            <div className='box1'>
              <img src={frame1} alt='our_exp1' className='exp_img1'/>          
            </div>
            <section className='box2'>
              <img src={frame2} alt='our_exp2' className='exp_img2'/>                            
            </section>
            <div className='box3'>
              <img src={frame3} alt='our_exp3' className='exp_img3'/>                            
            </div> 
                  
        </section>
        <div className='text flex'>
          <p>
            {`Our Experience guarantees 
            unmatched
            proficiency 
            and excellence.`}
          </p>

        </div>
    </main>
  );
}

export default OurExperience;