import React from "react";
const Contact =()=> {
    return(
        <div>
            
    {/* <!--breadcrumbs area start--> */}
    <div className="breadcrumbs_area other_bread">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>/</li>
                            <li>contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    {/* <!--breadcrumbs area end-->
    
    
    <!--contact area start--> */}
    <div className="contact_area">
        <div className="container">   
            <div className="row">
                <div className="col-lg-6 col-md-12">
                   <div className="contact_message content">
                        <h3>contact us</h3>    
                         <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                        <ul>
                            <li><i className="fa fa-fax"></i>  Address : No 40 Baria Sreet 133/2 NewYork City</li>
                            <li><i className="fa fa-phone"></i> <a href="#">Infor@roadthemes.com</a></li>
                            <li><i className="fa fa-envelope-o"></i> 0(1234) 567 890</li>
                        </ul>             
                    </div> 
                </div>
                <div className="col-lg-6 col-md-12">
                   <div className="contact_message form">
                        <h3>Tell us your project</h3>   
                        <form id="contact-form" method="POST"  action="assets/mail.php">
                            <p>  
                               <label> Your Name (required)</label>
                                <input name="name" placeholder="Name *" type="text"/> 
                            </p>
                            <p>       
                               <label>  Your Email (required)</label>
                                <input name="email" placeholder="Email *" type="email"/>
                            </p>
                            <p>          
                               <label>  Subject</label>
                                <input name="subject" placeholder="Subject *" type="text"/>
                            </p>    
                            <div className="contact_textarea">
                                <label>  Your Message</label>
                                <textarea placeholder="Message *" name="message"  className="form-control2" ></textarea>     
                            </div>   
                            <button type="submit"> Send</button>  
                            <p className="form-messege"></p>
                        </form> 

                    </div> 
                </div>
            </div>
        </div>    
    </div>
{/* 
    <!--contact area end-->

     <!--contact map start--> */}
    <div className="contact_map">
       <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                   <div className="map-area">
                      <div id="googleMap"></div>
                   </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--contact map end--> */}
        </div>
    )
}
export default Contact;