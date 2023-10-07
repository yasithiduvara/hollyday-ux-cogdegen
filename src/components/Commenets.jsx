import React from "react";

const Commenets = () => {
  return (
    <div>
      <section className="client">
        <div className="section__container client__container">
          <h2 className="section__header">What our client say</h2>
          <div className="client__grid">
            <div className="client__card">
              <img src="assets/client-1.jpg" alt="client" />
              <p>
                The booking process was seamless, and the confirmation was
                instant. I highly recommend WDM&Co for hassle-free hotel
                bookings.
              </p>
            </div>
            <div className="client__card">
              <img src="assets/client-2.jpg" alt="client" />
              <p>
                The website provided detailed information about hotel, including
                amenities, photos, which helped me make an informed decision.
              </p>
            </div>
            <div className="client__card">
              <img src="assets/client-3.jpg" alt="client" />
              <p>
                I was able to book a room within minutes, and the hotel exceeded
                my expectations. I appreciate WDM&Co's efficiency and
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
