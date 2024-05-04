import Input from "postcss/lib/input";

const Contact = ()=>{

    return (
        <div>
            
            <h2 className="text-2xl m-2 ">Contact</h2>
            <form>
                <input type="text" className="p-2 m-2 rounded border border-blue-500" placeholder="Name" />
                <input type="text" className="p-2 m-2 rounded border border-blue-500" placeholder="Your Message" />
                <button className="p-2 m-2 rounded border border-blue-500">Submit</button>
            </form>
            
        </div>
    )
}

export default Contact;