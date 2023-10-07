import React from "react";
import { people01, people02, people03 } from "../assets";

const Commenets = () => {
  return (
    <div>
      <section className="client">
        <div className="section__container client__container">
          <h2 className="section__header">What our client say</h2>
          <div className="client__grid">
            <div className="client__card">
              <img src={people01} alt="client" />
              <p>
                The booking process was seamless, and the confirmation was
                instant. I highly recommend Epic Escape for hassle-free hotel
                bookings.
              </p>
            </div>
            <div className="client__card">
              <img src={people02} alt="client" />
              <p>
                The website provided detailed information about hotel, including
                amenities, photos, which helped me make an informed decision.
              </p>
            </div>
            <div className="client__card">
              <img src={people03} alt="client" />
              <p>
                I was able to book a room within minutes, and the hotel exceeded
                my expectations. I appreciate Epic Escape efficiency and
                reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commenets;
