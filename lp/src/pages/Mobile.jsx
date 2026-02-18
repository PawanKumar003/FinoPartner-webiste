import '../App.css';
import Banner1 from '../component/banner/Banner1';
import SlideRightToLeft from '../component/startups500/SlideRightToLeft';
import Input from '../component/inputs/input';
import Button from '../component/button/Button';
import AffordablePricing from '../component/affordablePricing/AffordablePricing';
import SimpleSteps from '../component/SimpleSteps/SimpleSteps';
import FinoTeamCard from '../component/finoTeamCard/FinoTeamCard';
import { useEffect, useState } from 'react';
import Dialog from '../component/modal/Dialog';
import GoogleSlider from '../component/googleReview/GoogleSlider';
import PeopleTrustslider from '../component/PeopleTrustReviewer/PeopleTrustslider';
import Footer from '../component/footer/Footer';
import GetCallBack from '../component/getCallback/GetCallBack';
import CompleteAccountingServices from '../component/CompleteAccountingServices';
import CompanyTrustUs from '../component/CompanyTrustUs';
import TopLeaderSlider from '../component/Topleader/TopLeaderSlider';
import Header from '../component/header/Header';
import Industries from '../component/Industries';
import Strength from '../component/strength/Strength';
import Expert from '../component/Expert';
import Software from '../component/Software';
import { useLocation, useNavigate } from 'react-router-dom';
import { submitData } from '../component/SubmitData';
import NewLetter from '../component/NewLetter';
import MobileBanner from '../component/banner/MobileBanner';
import SecurityLogo from '../component/startups500/securityLogo';
import { IoIosCheckboxOutline } from 'react-icons/io';

function Mobile({ sourceId }) {
  const location = useLocation();
  const slug = location.pathname;
  console.warn('sourceId', sourceId);
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    email: '',
    mobile: '',
    name: '',
    business: ''
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.mobile.length === 10 &&
      /^[0-9]{10}$/.test(data.mobile) &&
      data.email.includes('@') &&
      data.name.length > 0 &&
      data.business.length > 0
    ) {
      submitData(data.name, data.email, data.mobile, data.business, sourceId, slug);
      setData({ email: '', mobile: '', name: '', business: '' }); // ← Clear form fields
      setIsDialogOpen(false);
      window.location.href = 'https://calendly.com/ben-thefinopartners/30min';
      // setIsOpen(true);
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Agar scroll 300px se zyada ho gaya toh show karo
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pricing1 = [
    'Hire An Accountant for CPA Firm Part Time Or Full Time',
    'Minimum 5+ Years Of US Accounting Experience',
    'Quickbooks Excellence',
    'Payroll Expert',
    'MIS Reporting',
    'Fluent And Clear Communication',
    'Availability At Your Time Zone'
  ];
  return (
    <>
      {/* <div className="md:hidden block fixed bottom-0 w-full text-center text-2xl rounded-t-xl bg-[#0F3BA2] text-white py-2 px-5 z-50">
        <a onClick={setIsDialogOpen} target="_blank">
          Book a Call
        </a>
      </div> */}
      <div
        className={`md:hidden ${
          isVisible === true ? 'block' : 'hidden'
        } fixed bottom-0 w-full text-center text-2xl rounded-t-xl  text-white  z-50`}
      >
        <div
          className="w-ful py-6"
          style={{
            backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/bottom-btn-mobile.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }}
        >
          <div className="w-84 flex justify-around items-center mt-2">
            <div className="mr-5">
              <p className="text-[14px] text-black font-medium">Choose Your Bookkeeper</p>
              <p className="text-[14px] text-black font-medium">
                & Tax Pros. @ 
                <span className="font-semibold text-xl"> $12/Hour</span>
              </p>
            </div>
            <div className="horizontal-shake">
              <a onClick={setIsDialogOpen} className=" rounded-full px-6 py-1 bg-[#222327] text-xl text-white font-semibold">
                Try Now
              </a>
              <p className="mt-[2px] text-[14px] text-black">Limited-time offer!</p>
            </div>
          </div>
        </div>
        {/* <a onClick={setIsDialogOpen} className="w-full">
          <img
            className="w-full h-full"
            src="https://thefinopartners.com/public/assets/reactimg/bottom-btn-mobile.png"
            alt=""
          />
        </a> */}
      </div>
      <Header props="💼 Build Your Dream Accounting and Tax Team — Expert Accountants & Tax Pros Starting at Just $12/Hour!" />
      {/* <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-center">
          <FaCheckCircle className="text-7xl text-blue-600 m-auto" />
          <h2 className="font-semibold text-5xl mt-4">Thanks</h2>
        </div>
      </Dialog> */}
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Consultation by Expert</h2>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div>
            <div className="mb-5">
              <Input type="text" name="name" placeHolder="Enter Name" onChange={handleChange} value={data.name} />
              {/* {data.name.length === 0 && (
                <p className="text-sm text-red-600">
                  Please enter a valid name.
                </p>
              )} */}
            </div>
            <div className="mb-5">
              <Input
                type="email"
                name="email"
                placeHolder="Enter Email ID"
                onChange={handleChange}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                value={data.email}
              />
              {data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && (
                <p className="text-sm text-red-600 ">Please enter a valid email address.</p>
              )}
            </div>
            <div className="mb-5">
              <Input
                type="tel"
                name="mobile"
                placeHolder="Enter Mobile No."
                pattern="[0-9]{10}"
                maxLength="10"
                value={data.mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[0-9]*$/.test(value) && value.length <= 10) {
                    handleChange(e);
                  }
                }}
              />
              {data.mobile && data.mobile.length !== 10 && <p className="text-sm text-red-600 ">Please enter a valid 10-digit number.</p>}
            </div>
            <div className="mb-5">
              <Input type="text" name="business" placeHolder="Enter Business Name" onChange={handleChange} value={data.business} />
            </div>
            <div className="text-center">
              <Button
                Type="submit"
                className={`pulse-animation1 bg-blue-950 text-2xl text-white px-8 py-3 rounded-full cursor-pointer w-full hover:bg-blue-700`}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Dialog>
      {/* <Banner1 setIsDialogOpen={setIsDialogOpen} /> */}
      <MobileBanner />
      <section
        className=" py-4 relative mt-15"
        style={{
          backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/offer-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '100%'
        }}
      >
        <div className="text-center">
          <p className="text-white">Hire An Accountant for CPA Firms & Businesses</p>
          <p className="text-[#EEBF11] font-semibold text-xl">Just $12/Hours</p>
        </div>
        <div className="absolute top-[-20px] left-[50%] transform translate-x-[-50%]">
          <p className="bg-[#FFE891] rounded-full py-1 px-4">Limited-time offer!</p>
        </div>
        <div className="absolute top-[22px] right-[6px]">
          <img
            onClick={setIsDialogOpen}
            className="w-[30px] h-full horizontal-shake"
            src="https://thefinopartners.com/public/assets/reactimg/Arrow-bt.png"
            alt="Arrow-bt"
          />
        </div>
      </section>
      {/* <SlideRightToLeft /> */}
      <SecurityLogo />
      <CompleteAccountingServices setIsDialogOpen={setIsDialogOpen} />
      {/* <CompanyTrustUs setIsDialogOpen={setIsDialogOpen} /> */}
      {/* <AffordablePricing setIsDialogOpen={setIsDialogOpen} /> */}
      <section className="px-4">
        <div className="grid md:grid-cols-2 md:w-2/3 gap-5 m-auto">
          <div className="text-center">
            <div className="bg-[#0F3BA2] text-white p-5 rounded-t-2xl">
              <h3 className="text-2xl font-medium">Services Offered For Accounting Firm Owners</h3>
            </div>
            <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl md:h-[500px]">
              <ul className="p-4">
                {pricing1.map((item, index) => (
                  <li key={index} className="flex items-center text-xl mb-4 text-left">
                    <p>
                      <IoIosCheckboxOutline className="mr-2 text-3xl text-[#0A6CFF]" />
                    </p>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center px-4">
                <Button
                  onClick={setIsDialogOpen}
                  className="pulse-animation1 cursor-pointer p-3 text-4xl font-medium hover:bg-[#0A6CFF] hover:text-white border border-[#0A6CFF] w-full m-auto rounded-full"
                >
                  <p className="flex items-center justify-center">
                    <span className="text-[20px]"> Starting</span>&nbsp;$12/Hour
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="mt-15 get-a-call-back-section m-auto px-10 py-5  text-white"
        style={{
          backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/Get-a-Call-Back-bg.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-4 ">
            <h2 className="text-4xl">Get a Call Back</h2>
            <p>Request a callback from us for more inquiry, by filling out the details asked ahead</p>
          </div>
          <div className=" text-center">
            <a
              className="pulse-animation1 text-xl px-10 py-2 rounded-full bg-blue-900 text-white"
              onClick={setIsDialogOpen}
              target="_blank"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
      <section className="w-full px-2 mt-5 bg-[#ECF4FF] py-4">
        <div className="text-center">
          <p>How it works? </p>
          <h2 className="text-xl font-semibold">Build Your Team in 4 Simple Steps</h2>
        </div>
        <div>
          <div className="flex justify-start mt-4">
            <div className="w-1/6 mr-4">
              <img
                className="w-[100px] h-[36px] rounded-full"
                src="https://thefinopartners.com/public/assets/reactimg/Screening-Candidates-icon.png"
                alt=""
              />
            </div>
            <div className="w-7/5">
              <p className="text-[16px] font-semibold">Book a Call</p>
              <p className="text-xs text-[#424242]">
                Schedule a free consultation with our team to understand your firm's requirements, workflow, and staffing goals.
              </p>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <div className="w-1/6 mr-4">
              <img
                className="w-[100px] h-[36px] rounded-full"
                src="https://thefinopartners.com/public/assets/reactimg/Agreement-icon.png"
                alt=""
              />
            </div>
            <div className="w-7/5">
              <p className="text-[16px] font-semibold">Screen Candidates</p>
              <p className="text-xs text-[#424242]">
                We’ll share profiles of pre-vetted accountants and tax professionals. You can interview and choose the best fit based on
                your needs.
              </p>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <div className="w-1/6 mr-4">
              <img
                className="w-[100px] h-[36px] rounded-full"
                src="https://thefinopartners.com/public/assets/reactimg/15-Day-Trial-icon.png"
                alt=""
              />
            </div>
            <div className="w-7/5">
              <p className="text-[16px] font-semibold">Sign NDA & Agreement</p>
              <p className="text-xs text-[#424242]">
                We ensure complete data security and transparency by signing a mutual NDA and a service agreement outlining roles, KPIs, and
                expectations.
              </p>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <div className="w-1/6 mr-4">
              <img
                className="w-[100px] h-[36px] rounded-full"
                src="https://thefinopartners.com/public/assets/reactimg/Payment-icon.png"
                alt=""
              />
            </div>
            <div className="w-7/5">
              <p className="text-[16px] font-semibold">Start Execution</p>
              <p className="text-xs text-[#424242]">
                Your offshore team is onboarded and starts working seamlessly within your existing systems, processes, and time
                zone preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="w-full max-w-md mx-auto mt-10 px-2">
          <h2 className="text-2xl font-semibold text-center">Comprehensive Talent Screening Framework</h2>
          <img
            className="w-full h-full"
            src="https://thefinopartners.com/public/assets/reactimg/Score-Break-up-img.webp"
            alt="Score Break up"
          />
        </div>
      </section>

      {/* <TopLeaderSlider setIsDialogOpen={setIsDialogOpen} /> */}

      {/* <SimpleSteps /> */}
      {/* <PeopleTrustslider setIsDialogOpen={setIsDialogOpen} /> */}
      {/* <Strength setIsDialogOpen={setIsDialogOpen} /> */}
      <section
        className=" w-full py-4 relative mt-15"
        style={{
          backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/offer-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '100%',
          height: '100%'
        }}
      >
        <div className="text-center">
          <p className="text-[#EEBF11] font-semibold text-xl py-2 pb-4">30+ Industries We Serve</p>
        </div>

        <div className="absolute top-[22px] right-[6px]">
          <img
            onClick={setIsDialogOpen}
            className="w-[30px] h-full horizontal-shake"
            src="https://thefinopartners.com/public/assets/reactimg/Arrow-bt.png"
            alt="Arrow-bt"
          />
        </div>
      </section>
      <section className="mt-5 px-4">
        <div className="text-center px-4">
          <h2 className="text-2xl font-semibold">Thousands of People Trust on our Services</h2>
        </div>
        <div>
          <div className="p-4 flex md:w-full overflow-hidden animate-slide-right bg-transparent">
            <img
              className="mr-4 h-full min-w-[2800px]"
              src="https://thefinopartners.com/public/assets/reactimg/Testimonial-img1.png"
              alt=""
            />
            <img className="h-full min-w-[2800px]" src="https://thefinopartners.com/public/assets/reactimg/Testimonial-img2.png" alt="" />
          </div>

          <div className="p-4 flex md:w-full overflow-hidden animate-slide-rviewleft bg-transparent">
            <img
              className="mr-4 h-full min-w-[2800px]"
              src="https://thefinopartners.com/public/assets/reactimg/Testimonial-img1.png"
              alt=""
            />
            <img className="h-full min-w-[2800px]" src="https://thefinopartners.com/public/assets/reactimg/Testimonial-img2.png" alt="" />
          </div>
        </div>
      </section>
      <FinoTeamCard setIsDialogOpen={setIsDialogOpen} />
      <section
        className="mt-15 get-a-call-back-section m-auto px-10 py-5  text-white"
        style={{
          backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/Get-a-Call-Back-bg.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-4 ">
            <h2 className="text-4xl">Get a Call Back</h2>
            <p>Request a callback from us for more inquiry, by filling out the details asked ahead</p>
          </div>
          <div className=" text-center">
            <a className="pulse-animation1 text-xl px-10 py-2 rounded-full bg-blue-900 text-white" onClick={setIsDialogOpen}>
              Book a Call
            </a>
          </div>
        </div>
      </section>
      <Software />
      {/* <GoogleSlider setIsDialogOpen={setIsDialogOpen} /> */}
      {/* <Expert setIsDialogOpen={setIsDialogOpen} /> */}
      <section className=" text-white mt-15 md:px-10 px-2 bg-[#ECF4FF] py-4">
        <div className="text-center lg:w-1/2 m-auto text-black">
          <h2 className="text-2xl md:text-4xl font-semibold">Schedule a Call with an Expert</h2>
          <p className="mb-8 md:block hidden">
            Book a call with one of our experts today. It’s quick and easy. Call us and we’ll help you with your questions and needs. Get
            clear advice, simple solutions, and friendly support, all in one call.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 w-full gap-3 m-auto">
          <div
            className=" text-center p-5 rounded-2xl"
            style={{
              backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/Ben-White-blu-bg.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <img
              className="w-[85px] h-[85px] rounded-full m-auto"
              src="https://www.thefinopartners.com/public/assets/reactimg/ben-white-1.jpg"
              alt="ben white"
            />
            <p className="text-xl font-medium mt-4 mb-3">Ben White</p>
            <p className="mt-[-10px] text-sm">Director of Business Development</p>
            <div className="mt-5">
              <a className="pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white" onClick={setIsDialogOpen}>
                Book a Call
              </a>
            </div>
          </div>
          <div
            className=" text-center p-5 rounded-2xl"
            style={{
              backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/Ben-White-orng-bg.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <img
              className="w-[85px] h-[85px] rounded-full m-auto"
              src="https://www.thefinopartners.com/public/assets/reactimg/bob-conroy1.png"
              alt="Bob Conroy"
            />
            <p className="text-xl font-medium mt-4 mb-3">Bob Conroy</p>
            <p className="mt-[-10px] text-sm">CPA, Director of Client Relations</p>
            <div className="mt-5">
              <a className="pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white" onClick={setIsDialogOpen}>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="w-full max-w-xl mx-auto p-2">
          <div>
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className=" border-b border-gray-300 rounded-md">
            <details className="group border-b border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-4">
                <span className=" font-medium">Why do CPA firms choose offshore staff?</span>
                <svg
                  className="bg-[#D9D9D9] rounded-full w-4 h-4 transition-transform duration-200 group-open:rotate-180 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-gray-600">
                Offshore staffing gives CPA firms access to experienced accountants and tax professionals at a lower cost. It helps manage
                workload spikes, reduce turnaround times, and maintain high service quality without increasing internal headcount or
                overhead.
              </div>
            </details>

            <details className="group border-b border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-4">
                <span className=" font-medium">How does offshore staffing help scale a CPA firm?</span>
                <svg
                  className="bg-[#D9D9D9] rounded-full w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-gray-600">
                Offshore teams allow firms to expand quickly during tax season or peak periods. With flexible, on-demand staffing, CPA firms
                can take on more clients, improve turnaround, and free up senior staff for higher-value tasks.
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4">
                <span className=" font-medium">Can offshore teams boost profit margins?</span>
                <svg
                  className="bg-[#D9D9D9] rounded-full w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-gray-600">
                Yes — by lowering staffing costs and improving efficiency, offshore solutions help firms increase their margins. Firms can
                grow without the burden of fixed salaries, infrastructure, or costly local hiring.
              </div>
            </details>
          </div>
        </div>
      </section>

      <Strength setIsDialogOpen={setIsDialogOpen} />
      {/* <Industries /> */}
      <NewLetter />
      <Footer />
    </>
  );
}

export default Mobile;
