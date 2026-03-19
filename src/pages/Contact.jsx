export const Contact = () => {
    const handleFormSubmit = (formData) =>{
        console.log(formData.entries());
        const formInputdata = Object.fromEntries(formData.entries());
        console.log(formInputdata);
    }
return <section className ="section-contact">
    <h2 className="container-title">Contact Us</h2>

    <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
            <input 
            type="text" 
            required 
            autoComplete="false"
            placeholder="Enter Your Name"
            name="username"
            />

            <input 
            type="email"
            className="form-control text-black"
            required
            autoComplete="false"
            placeholder="Enter Your Email"
            name="Email" 
            />

            <textarea
            className="form-control"
            rows={10}
            placeholder="enter You Message"
            name="message"
            required
            autoComplete="off"
            ></textarea>

            <button type="submit" value="send">Send</button>
        </form>
    </div>
    
</section>
}