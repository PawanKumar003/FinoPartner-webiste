import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function TopLeaderSlider({ setIsDialogOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    const slider = instanceRef.current;
    const container = containerRef.current;

    if (!slider || !container) return;

    // Start autoplay
    const startAutoplay = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          slider.next();
        }, 3000);
      }
    };

    // Stop autoplay
    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Start autoplay initially
    startAutoplay();

    // Stop autoplay only on desktop hover
    const handleMouseEnter = () => stopAutoplay();
    const handleMouseLeave = () => startAutoplay();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stopAutoplay();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [instanceRef]);

  return (
    <section className="md:p-10 md:pt-5 md:mb-10 p-5 mt-5 bg-[#041234] text-white">
      <div className="md:mb-10">
        <h2 className="text-3xl md:text-5xl leading-10 md:leading-15 text-center">
          <span className="font-semibold">Top Business Leaders</span>
          <span className="font-semibold"> Say About Us!</span>
        </h2>
      </div>
      <div
        ref={(node) => {
          sliderRef(node);
          containerRef.current = node;
        }}
        className="keen-slider overflow-hidden leadersImages"
      >
        <div className="keen-slider__slide">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
            <div className="pr-4 md:w-5/6 w-full order-2 md:order-1">
              {/* <h2 className="text-2xl md:text-5xl md:md:leading-15">
                <span className="font-semibold">What Top Business Leaders</span>
                <span className="font-semibold"> Says About Us!</span>
              </h2> */}
              <p className="text-lg md:block hidden">
                The Fino Partners have completely changed how we handle our
                accounting. Before working with them, we were always behind on
                our books. Now everything is on time, clean, and accurate. Their
                team is professional, responsive, and easy to talk to. We love
                that they explain everything in simple terms and actually care
                about our business. For such an affordable price in this
                economy, we’re getting more value than we ever expected. I’d
                confidently recommend them to any business owner.
              </p>
              <div className="md:mt-10 mt-5 mb-5 bg-[#0A6CFF] md:bg-transparent hover:bg-blue-800 px-10 py-3 md:p-0 rounded-full md:hover:md:bg-transparent text-center md:text-left">
                <a
                  onClick={setIsDialogOpen}
                  // href="https://calendly.com/ben-thefinopartners/30min"
                  target="_blank"
                  className="pulse-animation1 ml-2 bg-[#0A6CFF] px-10 py-3 rounded-full text-2xl hover:bg-blue-800"
                >
                  Book A Call
                </a>
              </div>
            </div>
            <div className="   m-auto order-1 md:order-2">
              <div>
                <p className="md:hidden block">
                  The Fino Partners have completely changed how we handle our
                  accounting. Before
                  {!isExpanded && (
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-1"
                      onClick={toggleReadMore}
                    >
                      Read More...
                    </span>
                  )}
                </p>
                {isExpanded && (
                  <p className="mt-2">
                    working with them, we were always behind on our books. Now
                    everything is on time, clean, and accurate. Their team is
                    professional, responsive, and easy to talk to. We love that
                    they explain everything in simple terms and actually care
                    about our business. For such an affordable price in this
                    economy, we’re getting more value than we ever expected. I’d
                    confidently recommend them to any business owner.
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-2"
                      onClick={toggleReadMore}
                    >
                      Read Less
                    </span>
                  </p>
                )}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/John-Hansen-Carter-img.png"
                  alt=""
                  style={{ width: "100%," }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
            <div className="pr-4 md:w-5/6 w-full order-2 md:order-1">
              {/* <h2 className="text-2xl md:text-5xl md:leading-15">
                <span className="font-semibold">What Top Business Leaders</span>
                <span className="font-semibold"> Says About Us!</span>
              </h2> */}
              <p className="text-lg md:block hidden">
                Outsourcing to The Fino Partners was one of the smartest moves
                we have ever made in our long work. They jumped right in,
                understood our financial setup, and started delivering
                high-quality results from week one. We get timely reports,
                error-free bookkeeping, and helpful advice whenever needed.
                Their support has saved us both time and money. I no longer
                worry about missed deadlines or messy books. They truly act like
                an extension of our internal team. Totally dependable and super
                easy to work with.
              </p>
              <div className="md:mt-10 mt-5 mb-5 bg-[#0A6CFF] md:bg-transparent hover:bg-blue-800 px-10 py-3 md:p-0 rounded-full md:hover:md:bg-transparent text-center md:text-left">
                <a
                  onClick={setIsDialogOpen}
                  target="_blank"
                  className="pulse-animation1 ml-2 bg-[#0A6CFF] px-10 py-3 rounded-full text-2xl hover:bg-blue-800"
                >
                  Book A Call
                </a>
              </div>
            </div>
            <div className=" m-auto order-1 md:order-2">
              <div>
                <p className="md:hidden block">
                  Outsourcing to The Fino Partners was one of the smartest moves
                  we have ever
                  {!isExpanded && (
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-1"
                      onClick={toggleReadMore}
                    >
                      Read More...
                    </span>
                  )}
                </p>
                {isExpanded && (
                  <p className="mt-2">
                    made in our long work. They jumped right in, understood our
                    financial setup, and started delivering high-quality results
                    from week one. We get timely reports, error-free
                    bookkeeping, and helpful advice whenever needed. Their
                    support has saved us both time and money. I no longer worry
                    about missed deadlines or messy books. They truly act like
                    an extension of our internal team. Totally dependable and
                    super easy to work with.
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-2"
                      onClick={toggleReadMore}
                    >
                      Read Less
                    </span>
                  </p>
                )}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/Emily-Katemillor-img.png"
                  alt=""
                  style={{ width: "100%," }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
            <div className="pr-4 md:w-5/6 w-full order-2 md:order-1">
              {/* <h2 className="text-2xl md:text-5xl md:leading-15">
                <span className="font-semibold">What Top Business Leaders</span>
                <span className="font-semibold"> Says About Us!</span>
              </h2> */}
              <p className="text-lg md:block hidden">
                As a CPA firm, we needed a reliable outsourcing partner to
                manage our growing workload during peak seasons like the tax
                season. The Fino Partners delivered exactly what we needed. They
                have so many skilled accountants, plus they promised and
                delivered on fast turnaround, and accurate work. Their team
                quickly adapted to our systems and followed our processes
                perfectly. They’ve helped us meet tight deadlines without
                compromising on quality. We’ve since expanded our engagement
                with them year-round. It feels like we’ve added an entire team
                without the overhead.
              </p>
              <div className="md:mt-10 mt-5 mb-5 bg-[#0A6CFF] md:bg-transparent hover:bg-blue-800 px-10 py-3 md:p-0 rounded-full md:hover:md:bg-transparent text-center md:text-left">
                <a
                  onClick={setIsDialogOpen}
                  target="_blank"
                  className="pulse-animation1 ml-2 bg-[#0A6CFF] px-10 py-3 rounded-full text-2xl hover:bg-blue-800"
                >
                  Book A Call
                </a>
              </div>
            </div>
            <div className=" m-auto order-1 md:order-2">
              <div>
                <p className="md:hidden block">
                  As a CPA firm, we needed a reliable outsourcing partner to
                  manage our
                  {!isExpanded && (
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-1"
                      onClick={toggleReadMore}
                    >
                      Read More...
                    </span>
                  )}
                </p>
                {isExpanded && (
                  <p className="mt-2">
                    growing workload during peak seasons like the tax season.
                    The Fino Partners delivered exactly what we needed. They
                    have so many skilled accountants, plus they promised and
                    delivered on fast turnaround, and accurate work. Their team
                    quickly adapted to our systems and followed our processes
                    perfectly. They’ve helped us meet tight deadlines without
                    compromising on quality. We’ve since expanded our engagement
                    with them year-round. It feels like we’ve added an entire
                    team without the overhead.
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-2"
                      onClick={toggleReadMore}
                    >
                      Read Less
                    </span>
                  </p>
                )}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/Rachel Kimnicha -img.png"
                  alt=""
                  style={{ width: "100%," }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
            <div className="pr-4 md:w-5/6 w-full order-2 md:order-1">
              {/* <h2 className="text-2xl md:text-5xl md:leading-15">
                <span className="font-semibold">What Top Business Leaders</span>
                <span className="font-semibold"> Says About Us!</span>
              </h2> */}
              <p className="text-lg md:block hidden">
                Working with The Fino Partners has allowed our firm to grow
                without constantly hiring and training new staff. Their
                accountants are super well-trained, understand U.S. standards
                (even better than our own staff), and communicate clearly. We
                rely on them for bookkeeping, reconciliations, and preparing
                financials for our clients. Their flexibility and affordable
                pricing make them the perfect extension of our team. We’ve seen
                a clear improvement in efficiency since bringing them on board.
                I’d recommend them to any CPA firm looking to outsource smartly.
              </p>
              <div className="md:mt-10 mt-5 mb-5 bg-[#0A6CFF] md:bg-transparent hover:bg-blue-800 px-10 py-3 md:p-0 rounded-full md:hover:md:bg-transparent text-center md:text-left">
                <a
                  onClick={setIsDialogOpen}
                  target="_blank"
                  className="pulse-animation1 ml-2 bg-[#0A6CFF] px-10 py-3 rounded-full text-2xl hover:bg-blue-800"
                >
                  Book A Call
                </a>
              </div>
            </div>
            <div className="md: pt-0 m-auto order-1 md:order-2">
              <div>
                <p className="md:hidden block">
                  Working with The Fino Partners has allowed our firm to grow
                  without constantly
                  {!isExpanded && (
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-1"
                      onClick={toggleReadMore}
                    >
                      Read More...
                    </span>
                  )}
                </p>
                {isExpanded && (
                  <p className="mt-2">
                    hiring and training new staff. Their accountants are super
                    well-trained, understand U.S. standards (even better than
                    our own staff), and communicate clearly. We rely on them for
                    bookkeeping, reconciliations, and preparing financials for
                    our clients. Their flexibility and affordable pricing make
                    them the perfect extension of our team. We’ve seen a clear
                    improvement in efficiency since bringing them on board. I’d
                    recommend them to any CPA firm looking to outsource smartly.
                    <span
                      className="text-blue-600 font-semibold cursor-pointer ml-2"
                      onClick={toggleReadMore}
                    >
                      Read Less
                    </span>
                  </p>
                )}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/Daniel-Molcoln-img.png"
                  alt=""
                  style={{ width: "100%," }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopLeaderSlider;
