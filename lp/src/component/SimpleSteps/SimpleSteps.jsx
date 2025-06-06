import React from "react";

function SimpleSteps() {
  return (
    <section className="bg-[#041234] text-center p-5 mt-15">
      <div>
        <p className="text-sm text-white">How it works?</p>
        <h2 className="text-[#FFBF0B] text-3xl font-medium">
          Build Your Team in 5 Simple Steps
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-5 mt-10">
          <div className="Simple-Steps">
            <img
              src="https://thefinopartners.com/public/assets/lpimages/1-book-a-call.png"
              alt="book a call"
            />
          </div>
          <div className="Simple-Steps">
            <img
              src="https://thefinopartners.com/public/assets/lpimages/2-Meet-Your-Candidates.png"
              alt="Meet Your Candidates"
            />
          </div>
          <div className="Simple-Steps">
            <img
              src="https://thefinopartners.com/public/assets/lpimages/3-Interview-and-Hire.png"
              alt="Interview and Hire"
            />
          </div>
          <div className="Simple-Steps">
            <img
              src="https://thefinopartners.com/public/assets/lpimages/4-Start-in-48-Hours.png"
              alt="Start in 48 Hours"
            />
          </div>
          <div className="Simple-Steps">
            <img
              src="https://thefinopartners.com/public/assets/lpimages/Support-icon.png"
              alt="Support icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleSteps;
