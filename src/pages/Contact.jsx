import React from 'react'

const handleFormSubmit = (formData) => {
  // console.log(formData.entries());
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
};

const Contact = () => {
  return (
    <section className='section-contact'>
      <h2 className="container-title">
        Contact Us
      </h2>

    <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input
            type="text"
            required 
            autoComplete='off' 
            placeholder='enter your name'
            name='username'
            className='form-control'
            />

        <input
            type="email"
            required 
            autoComplete='off' 
            placeholder='enter your email'
            name='email'
            className='form-control'
            />

        <textarea 
            name="message"
            rows={10}
            className='form-control'
            placeholder='enter your message'
            required
            autoComplete='off'
          ></textarea>

          <button type='submit'>Send</button>
      </form>
    </div>
    </section>
  )
}

export default Contact