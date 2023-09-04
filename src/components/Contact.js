import Socials from "./Socials";

export default function Contact() {
  return (
    <div className="contact">
      <h3 className="heading">CONTACT</h3>
      <h1 className="page--name">CONTACT ME</h1>
      <section className="divider">
        <div className="col">
          <i className="bx bx-current-location big"></i>
          <div>
            <h4>Address</h4>
            <p> Abuja Federal Capital Territory, Nigeria</p>
          </div>
        </div>
        <div className="col">
          <i className="bx bxs-share-alt big"></i>
          <div>
            <h4>Social Media</h4>
            <Socials />
          </div>
        </div>
        <div className="col">
          <i className="bx bx-envelope big"></i>
          <div>
            <h4>Email</h4>
            <p>shedracknwaokocha@gmail.com</p>
          </div>
        </div>
        <div className="col">
          <i className="bx bxs-phone big"></i>
          <div>
            <h4>Phone</h4>
            <p> +234 701 693 4282 (available only within 9am - 5pm WAT)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
