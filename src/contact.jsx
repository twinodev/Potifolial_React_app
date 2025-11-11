function Contact(){
    return(
        <div className="contact">
            <h2>Contact Me</h2>
            <form>
                <label>Name:</label><br></br>
                <input type="text" value="Joe Smith"/><br></br>
                <label>Email:</label><br/>
                <input type="email" value="Joe@fake.com"/><br></br>
                <label>Message:</label><br/>
                <input type="text" value="Message"/><br/>
                <button>Send</button>
            </form>
        </div>
    );
}
export default Contact