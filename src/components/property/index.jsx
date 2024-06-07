import React from "react";
import "./propertyStyles.css";
import propertyimage from "../../assets/propertyimage.svg";



const Property = () => {
  return (
    <div className="prop_container flex">
      {/* left */}        
      <section className="prop_text_section">    

          <div className="guides">
          <span>Do you have a property?</span>
          </div>
          <div>Provide accommodation<br/> here in Lagos</div>      
        
          <div className="prop_text_body">
            Own a property in Lagos? Join our platform to effortlessly list your<br/>
            accommodations and connect with eager tenants seeking their <br/>
            perfect home in the vibrant city of Lagos.
          </div>
          {/*Right  */}

      </section>
      <section className="prop_image_section">
          <img src={propertyimage} alt="officespace_img" className="image" />
      </section>
      

    </div>
  );
};

export default Property;