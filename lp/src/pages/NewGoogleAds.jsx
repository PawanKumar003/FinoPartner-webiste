import '../App.css';
import SlideRightToLeft from '../component/startups500/SlideRightToLeft';
import Input from '../component/inputs/input';
import Button from '../component/button/Button';
import AffordablePricing from '../component/affordablePricing/AffordablePricing';
import SimpleSteps from '../component/SimpleSteps/SimpleSteps';
import FinoTeamCard from '../component/finoTeamCard/FinoTeamCard';
import { useState } from 'react';
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
import { useLocation } from 'react-router-dom';

import { submitData } from '../component/SubmitData';
import NewLetter from '../component/NewLetter';
import useDeviceType from '../hooks/useDeviceType';

import GoogleAdsBanner from '../component/banner/NewGoogleAdsBanner';
import Mobile from './Mobile';
import HeroSlider from '../component/swiperCarousel/Carousel';
import { IconBase } from 'react-icons';
import NewSlideRightToLeft from '../component/newrighttoleftslide/NewSliderRightToLeft';
import { IoCall } from 'react-icons/io5';

function GoogleAds({ sourceId }) {
  const isMobile = useDeviceType();
  const location = useLocation();
  const slug = location.pathname;
  // const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
      // window.location.href = "https://calendly.com/ben-thefinopartners/30min";
      // setIsOpen(true);
    }
  };

  return (
    <>
      {!isMobile ? (
        <>
          <div className="md:hidden block fixed bottom-0 w-full text-center text-2xl rounded-t-xl bg-[#0F3BA2] text-white py-2 px-5 z-50">
            <a onClick={setIsDialogOpen} target="_blank">
              Book a Call
            </a>
          </div>
          <Header setIsDialogOpen={setIsDialogOpen} />
          {/* <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="text-center">
        <FaCheckCircle className="text-7xl text-blue-600 m-auto" />
        <h2 className="font-semibold text-5xl mt-4">Thanks</h2>
      </div>
    </Dialog> */}
          <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <div className="text-center">{/* <h2 className="text-2xl font-semibold">Consultation by Expert</h2> */}</div>
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              <div>
                <img
                  src="https://thefinopartners.com/public/assets/images/login-bg.webp"
                  alt=""
                  className="w-full h-full hidden lg:block"
                />
              </div>
              <div>
                <form className="" onSubmit={handleSubmit}>
                  <div>
                    <h2 className="text-2xl font-semibold">Consultation by Expert</h2>
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
                      {data.mobile && data.mobile.length !== 10 && (
                        <p className="text-sm text-red-600 ">Please enter a valid 10-digit number.</p>
                      )}
                    </div>
                    <div className="mb-5">
                      <Input type="text" name="business" placeHolder="Enter Business Name" onChange={handleChange} value={data.business} />
                    </div>
                    <div className="text-center">
                      <Button
                        type={'submit'}
                        className={`pulse-animation1 bg-blue-950 text-2xl text-white px-8 py-3 rounded-full cursor-pointer w-full hover:bg-blue-700`}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Dialog>
          <GoogleAdsBanner setIsDialogOpen={setIsDialogOpen} sourceId={sourceId} />
          {/* <HeroSlider /> */}
          <section className=" py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
              {/* <!-- Heading --> */}
              <h2 className="text-5xl font-semibold text-gray-900 ">
                <span className="text-[#2B4B94]">500+</span> CPA & Accounting Firms Trust Us
              </h2>
              {/* <!-- Single Image Card --> */}
              <NewSlideRightToLeft />
              {/* <div className="flex justify-center mt-6">
                <div className="bg-white rounded-2xl py-6">
                  <img
                    src="https://thefinopartners.com/public/assets/reactimg/role-logo-cpa.png"
                    alt="Data Security Certificates"
                    className="w-full h-full "
                  />
                </div>
              </div> */}
            </div>
          </section>
          <section className="bg-[#EBEEFD] py-17 scroll-mt-24" id="Offshoring">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="py-5">
                <h2 className="text-4xl font-bold">Which Offshore Professionals Can You Hire?</h2>
                <p>
                  Focus on growing your finances while our remote professionals manage your accounts, taxes, and compliance with accuracy
                  and meeting deadlines easily.
                </p>
              </div>
              {/* <!-- Card 1 (Active / Filled like image) --> */}
              <div className="role-card rounded-2xl p-6 h-[260px]">
                {/* Background PNG */}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/role-Tax-Preparer-icon.png"
                  alt=""
                  className="roleimg absolute inset-0 w-full h-full object-contain opacity-50"
                />

                {/* Title (Center) */}
                <h3 className="role-title text-2xl font-semibold text-gray-900">Tax Preparer</h3>

                {/* Content (Hidden → Hover) */}
                <div className="role-content relative z-10 mt-16">
                  <p className="text-base leading-relaxed text-white">
                    Hire professional tax preparers who possess expertise in handling both 1040 forms and intricate 1120 forms. They take
                    care of gathering records, computation, compliance verification and on-schedule submission.
                  </p>
                </div>
              </div>
              <div className="role-card rounded-2xl p-6 h-[260px]">
                {/* Background PNG */}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/role-Accountant-icon.png"
                  alt=""
                  className="roleimg absolute inset-0 w-full h-full object-contain opacity-50"
                />

                {/* Title (Center) */}
                <h3 className="role-title text-2xl font-semibold text-gray-900">Accountant</h3>

                {/* Content (Hidden → Hover) */}
                <div className="role-content relative z-10 mt-16">
                  <p className="text-base leading-relaxed text-white">
                    Hire competent accountants who possess expertise in bookkeeping, reconciliation, payroll management and end-of-month
                    financial processes. You can maintain precise financial documentation and access current financial data while receiving
                    compliance assistance.
                  </p>
                </div>
              </div>
              <div className="role-card rounded-2xl p-6 h-[260px]">
                {/* Background PNG */}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/role-Tax-&-Accountant-icon.png"
                  alt=""
                  className="roleimg absolute inset-0 w-full h-full object-contain opacity-50"
                />

                {/* Title (Center) */}
                <h3 className="role-title text-2xl font-semibold text-gray-900">Tax + Accountant</h3>

                {/* Content (Hidden → Hover) */}
                <div className="role-content relative z-10 mt-16">
                  <p className="text-base leading-relaxed text-white">
                    Hire an expert with both tax and accounting knowledge in one dedicated professional. This helps you manage daily
                    bookkeeping activities and tax preparation for better financial oversight.
                  </p>
                </div>
              </div>
              <div className="role-card rounded-2xl p-6 h-[260px]">
                {/* Background PNG */}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/role-Tax-Reviewer-icon.png"
                  alt=""
                  className="roleimg absolute inset-0 w-full h-full object-contain opacity-50"
                />

                {/* Title (Center) */}
                <h3 className="role-title text-2xl font-semibold text-gray-900">Tax Reviewer</h3>

                {/* Content (Hidden → Hover) */}
                <div className="role-content relative z-10 mt-16">
                  <p className="text-base leading-relaxed text-white">
                    Improve your quality control process by hiring trained tax reviewers who handle quality assessment duties. The tax
                    reviewer performs verification tasks and validates current regulations to achieve improved filing results.
                  </p>
                </div>
              </div>
              <div className="role-card rounded-2xl p-6 h-[260px]">
                {/* Background PNG */}
                <img
                  src="https://thefinopartners.com/public/assets/reactimg/role-Audit-Manager-icon.png"
                  alt=""
                  className="roleimg absolute inset-0 w-full h-full object-contain opacity-50"
                />

                {/* Title (Center) */}
                <h3 className="role-title text-2xl font-semibold text-gray-900">Audit Manager</h3>

                {/* Content (Hidden → Hover) */}
                <div className="role-content relative z-10 mt-16">
                  <p className="text-base leading-relaxed text-white">
                    Improve the efficiency of your audit process by hiring expert offshore audit managers. The expert collaborates with
                    other departments while making sure project deadlines are achieved and maintaining top-notch auditing practices.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <GetCallBack sourceId={sourceId} />
          <section className="py-10 mt-5 scroll-mt-24" id="How to Hire">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
              {/* <!-- Step 01 --> */}
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border-2 border-dashed border-gray-300 processcard">
                <div className="w-full absolute top-0 left-0 text-center px-4 text-8xl font-bold text-teal-800 ">01</div>
                <div className="mt-18">
                  <div className="flex gap-3 items-center mb-6">
                    <img src="https://thefinopartners.com/public/assets/reactimg/role-Sign-up-icon.png" alt="" className="" />
                    <h3 className="text-2xl font-semibold text-gray-800">Sign-up</h3>
                  </div>

                  <ul className="space-y-3 text-gray-600 processStepul">
                    <li className="flex items-center gap-2">Introductory Call</li>
                    <li className="flex items-center gap-2">Interview - Test</li>
                    <li className="flex items-center gap-2">Staff Confirmation</li>
                  </ul>
                </div>
              </div>

              {/* <!-- Step 02 --> */}
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200 processcard">
                <div className="w-full absolute top-0 left-0 text-center px-4 text-8xl font-bold text-teal-600 opacity-70">02</div>
                <div className="mt-18">
                  {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6">Interview</h3> */}
                  <div className="flex gap-3 items-center mb-6">
                    <img src="https://thefinopartners.com/public/assets/reactimg/role-Interview-icon.png" alt="" className="" />
                    <h3 className="text-2xl font-semibold text-gray-800">Interview</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 processStepul">
                    <li className="flex items-center gap-2">Onboarding Call</li>
                    <li className="flex items-center gap-2">IT Set up</li>
                    <li className="flex items-center gap-2">Staff Orientation Call</li>
                  </ul>
                </div>
              </div>

              {/* <!-- Step 03 --> */}
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200 processcard">
                <div className="w-full absolute top-0 left-0 text-center px-4 text-8xl font-bold text-teal-600 opacity-70">03</div>
                <div className="mt-18">
                  {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6">Set-up</h3> */}
                  <div className="flex gap-3 items-center mb-6">
                    <img src="https://thefinopartners.com/public/assets/reactimg/role-Set-up-icon.png" alt="" className="" />
                    <h3 className="text-2xl font-semibold text-gray-800">Set-up</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 processStepul">
                    <li className="flex items-center gap-2">Staff Starts Working</li>
                    <li className="flex items-center gap-2">Initial Training</li>
                    <li className="flex items-center gap-2">Continuous Review</li>
                  </ul>
                </div>
              </div>

              {/* <!-- CTA Section --> */}
              <div className="bg-gray-200 rounded-2xl p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Hire a Tax Preparer ?</h2>
                <p className="text-blue-600 text-lg mb-8">No Obligation Free Sign up To Interview Talent</p>

                <button
                  onClick={setIsDialogOpen}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 mx-auto py-4 rounded-xl flex items-center gap-3 w-fit shadow-lg transition cursor-pointer"
                >
                  <span>
                    <IoCall className="text-2xl" />
                  </span>{' '}
                  <span>Schedule a Call</span>
                </button>
              </div>
            </div>
          </section>
          <TopLeaderSlider setIsDialogOpen={setIsDialogOpen} />
          <section className="bg-[#eef2ff] py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
              {/* <!-- Heading --> */}
              <h2 className="text-5xl font-semibold text-gray-900 mb-3">Your Data Security</h2>

              {/* <!-- Description --> */}
              <p className="max-w-3xl mx-auto text-gray-600 text-base leading-relaxed mb-10">
                Protecting your financial and business data is our priority. We follow strict security protocols and industry best practices
                to ensure complete confidentiality, integrity, and safe handling of sensitive information.
              </p>

              {/* <!-- Single Image Card --> */}
              <div className="flex justify-center">
                <div className="rounded-2xl px-10 py-6 ">
                  <img
                    src="https://thefinopartners.com/public/assets/reactimg/role-Security-img.png"
                    alt="Data Security Certificates"
                    className=""
                  />
                </div>
              </div>
            </div>
          </section>
          <GoogleSlider setIsDialogOpen={setIsDialogOpen} />
          <PeopleTrustslider setIsDialogOpen={setIsDialogOpen} />
          <Strength setIsDialogOpen={setIsDialogOpen} />
          <section className=" text-white md:px-10 px-2 bg-[#ECF4FF] py-15">
            <div className="text-center lg:w-1/2 m-auto text-black">
              <h2 className="text-2xl md:text-4xl font-semibold">Schedule a Call with an Expert</h2>
              <p className="mb-8 md:block hidden">
                Book a call with one of our experts today. It’s quick and easy. Call us and we’ll help you with your questions and needs.
                Get clear advice, simple solutions, and friendly support, all in one call.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 w-full lg:w-2/3 gap-10 m-auto">
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
                  <a className="cursor-pointer pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white" onClick={setIsDialogOpen}>
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
                  <a className="cursor-pointer pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white" onClick={setIsDialogOpen}>
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </section>
          <Industries />
          {/* <SlideRightToLeft /> */}
          {/* <CompleteAccountingServices setIsDialogOpen={setIsDialogOpen} />
          <GetCallBack sourceId={sourceId} />
          <CompanyTrustUs setIsDialogOpen={setIsDialogOpen} />

          <AffordablePricing setIsDialogOpen={setIsDialogOpen} />
          <SimpleSteps />

          <FinoTeamCard setIsDialogOpen={setIsDialogOpen} />
          <GetCallBack sourceId={sourceId} />
          <Software /> */}
          {/* <Expert setIsDialogOpen={setIsDialogOpen} /> */}
          {/* <section className=" text-white mt-15 md:px-10 px-2 bg-[#ECF4FF] py-4">
            <div className="text-center lg:w-1/2 m-auto text-black">
              <h2 className="text-2xl md:text-4xl font-semibold">Schedule a Call with an Expert</h2>
              <p className="mb-8 md:block hidden">
                Book a call with one of our experts today. It’s quick and easy. Call us and we’ll help you with your questions and needs.
                Get clear advice, simple solutions, and friendly support, all in one call.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 w-full lg:w-2/3 gap-3 m-auto">
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
                  src="https://www.thefinopartners.com/public/assets/reactimg/Steve-Martin.jpg"
                  alt="ben white"
                />
                <p className="text-xl font-medium mt-4 mb-3">Ben White</p>
                <p className="mt-[-10px] text-sm">Director of Growth</p>
                <div className="mt-5">
                  <a className="cursor-pointer pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white" onClick={setIsDialogOpen}>
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
                  src="https://www.thefinopartners.com/public/assets/reactimg/Ryan-Kiernan.jpg"
                  alt="ben white"
                />
                <p className="text-xl font-medium mt-4 mb-3">Ryan Kiernan</p>
                <p className="mt-[-10px] text-sm">Director of Strategy</p>
                <div className="mt-5">
                  <a className="cursor-pointer pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white" onClick={setIsDialogOpen}>
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </section>

          <NewLetter /> */}
          <Footer />
        </>
      ) : (
        <Mobile sourceId="3" />
      )}
    </>
  );
}

export default GoogleAds;
