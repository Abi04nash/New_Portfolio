import React from 'react'
import Swal from 'sweetalert2'

const Fifth = () => {

    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "579c4ae3-0a03-4ef3-847e-fb6e29f3206f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();

Swal.fire({
  title: "Success",
  text: "Message sent successfully",
  icon: "success"
});
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (


    <>
    <h1 className='heading'>Contact Me</h1>

    <div className='fifth'>
      <section className='contact'>
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className='input-box'>
            <label>Full Name</label>
            <input type="text" className='field' placeholder='Enter your name' name='name' required />
          </div>
          <div className='input-box'>
            <label>Email Address</label>
            <input type="email" className='field' placeholder='Enter your email' name='email' required />
          </div>
          <div className='input-box'>
            <label>Your Message</label>
            <textarea name="message" id="" className='field mess' placeholder='Enter your message' required></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
    </>
  )
}

export default Fifth
