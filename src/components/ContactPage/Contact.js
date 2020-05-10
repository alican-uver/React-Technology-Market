import React from "react";
import Title from '../Title';

const Contact = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title = "contact us" />
          <form className = "mt-5">
    
              {/* First */}
              <div className= "form-group">
                <input type="text" 
                name ="firstName" 
                className = "form-control" 
                placeholder = "Enter your name" />
              </div>

              {/* Email */}
              <div className= "form-group">
                <input type="email" 
                name ="email" 
                className = "form-control" 
                placeholder = "Enter your email" />
              </div>

                {/* Subject */}
              <div className= "form-group">
                <input type="text" 
                name ="subject" 
                className = "form-control" 
                placeholder = "This area required!" />
              </div>

                {/* Message */}
                <div className= "form-group">
                <textarea name="message" 
                className = "form-control"
                rows="10" 
                placeholder ="Enter your message">
                </textarea>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
