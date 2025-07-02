import React,{useState} from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';


function Contact() {

  const [formData, setFormData] = useState ({
    name :"",
    email :"",
    message :""
  })
  const [isLoading, setIsLoading] = useState(false)
  //service_tr2ayb7
  //template_6nnw1uh

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try{
      console.log("Form Submitted", formData);
      await emailjs.send(
      'service_tr2ayb7',
      'template_6nnw1uh',
       {
        from_name:formData.name,
        to_name:"Pallab Nath",
        from_email:formData.email,
        to_email:"nathpallab2004@gmail.com",
        message:formData.message
       },
       "nSK_kj_t9fDcPuCMk",
    ) 
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    toast.success("Thank you for your message! I'll get back to you soon.");
  } catch (error) {
    setIsLoading(false);
    console.error("Error sending email:", error);
    toast.error("Sorry, there was an error sending your message. Please try again later.");
  }
  }
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden mt-10" id='contacts'>
      
    <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
    <div className='flex flec-col items-start w-full gap-5 mb-10'>
    <h2 className='text-heading'>Lets Talk</h2>
    <p>Whether you're looking for to build a new website , improve your existing platform , or bring a unique project to life , I'm here to help </p>
    </div>
    <form className='w-full' onSubmit={handleSubmit}>
      <div className='mb-5'>
        <label htmlFor="name" className='field-label'>Full Name</label>
        <input
        id="name"
        type="text"
        name = "name"
        placeholder='John Doe'
        className='field-input field-input-focus'
        autoComplete='none'
        required
        value = {formData.name}
        onChange={handleChange}
        ></input>
      </div>
    

    
      <div className='mb-5'>
        <label htmlFor="email" className='field-label'>Email</label>
        <input
        id="email"
        type="email"
        name="email"
        placeholder='johndoe@gmail.com'
        className='field-input field-input-focus'
        autoComplete='none'
        required
        value={formData.email}
        onChange={handleChange}
        ></input>
      </div>
    

    
      <div className='mb-5'>
        <label htmlFor="message" className='field-label'>Message</label>
        <textarea 
        name="message"
        id="message" 
        type="text" 
        rows="4" 
        className='field-input field-input-focus ' 
        placeholder='Share your thoughts...' 
        autoComplete='none'
        value={formData.message}
        onChange={handleChange}
        ></textarea>
      </div>
      <button
      type='submit'
      className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'
      >
        {!isLoading ? "Send" : "Sending..."}
      </button>
    </form>
    </div>
    
    </div>
  )
}

export default Contact
