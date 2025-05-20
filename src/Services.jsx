function Services (){
    return(
     <section id="Services">
        <div className="my-container">
            <div className="section-title">
            <h2>Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
        </div>
        <div className="my-container">
            <div className="about-cards">
                <div className="card">
                    <span><i class="fa-solid fa-heart-pulse"></i></span>
                    <h1>Nesciunt Mete</h1>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
                <div className="card">
                    <span><i class="fa-solid fa-microscope"></i></span>
                    <h1>Nesciunt Mete</h1>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
                <div className="card">
                    <span><i class="fa-solid fa-school-flag"></i></span>
                    <h1>Dolori Architecto</h1>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
            </div>
        </div>
        <div className="my-container">
            <div className="about-cards">
                <div className="card">
                    <span><i class="fa-solid fa-heart-pulse"></i></span>
                    <h1>Nesciunt Mete</h1>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
                <div className="card">
                    <span><i class="fa-solid fa-microscope"></i></span>
                    <h1>Nesciunt Mete</h1>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
                <div className="card">
                    <span><i class="fa-solid fa-school-flag"></i></span>
                    <h1>Dolori Architecto</h1>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
            </div>
        </div>
        <div className="my-container">
            <div className="section-title">
                <h2>Appointment</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
        </div>
   
      <div className="my-container">
      <form class="my-form">
  <div class="row">
    <input type="text" placeholder="Your Name" />
    <input className="madlle-lable" type="text" placeholder=" Your Email" />
    <input type="text" placeholder=" Your Phone" />
  </div>
  <div class="row">
  <label for="date"></label>
            <input type="date" id="date" name="date" required/>
            <label for="choice1"></label>
            <select className="madlle-lable" id="choice1" name="choice1">
                <option value="option1">Select Department</option>
                <option value="option2">Option 2</option>
            </select>
            <label for="choice1"></label>
            <select  id="choice1" name="choice1">
                <option value="option1">Select Doctor</option>
                <option value="option2">Option 2</option>
            </select>
  </div>
  <div class="row full-width">
    <textarea placeholder="enter your not..."/>
  </div>
</form>
      </div>
      <div className="my-container">
        <div className="apartment-bottun">
             <a className="button" href="#appointment">
            Make an Appointment
          </a>
        </div>
     
      </div>
     </section>
    );
}
export default Services;