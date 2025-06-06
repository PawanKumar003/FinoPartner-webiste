import "../App.css";
import Banner1 from "../component/banner/Banner1";
import SlideRightToLeft from "../component/startups500/SlideRightToLeft";
import Input from "../component/inputs/input";
import Button from "../component/button/Button";
import AffordablePricing from "../component/affordablePricing/AffordablePricing";
import SimpleSteps from "../component/SimpleSteps/SimpleSteps";
import FinoTeamCard from "../component/finoTeamCard/FinoTeamCard";
import { useState } from "react";
import Dialog from "../component/modal/Dialog";
import GoogleSlider from "../component/googleReview/GoogleSlider";
import PeopleTrustslider from "../component/PeopleTrustReviewer/PeopleTrustslider";
import Footer from "../component/footer/Footer";
import GetCallBack from "../component/getCallback/GetCallBack";
import CompleteAccountingServices from "../component/CompleteAccountingServices";
import CompanyTrustUs from "../component/CompanyTrustUs";
import TopLeaderSlider from "../component/Topleader/TopLeaderSlider";
import Header from "../component/header/Header";
import Industries from "../component/Industries";
import Strength from "../component/strength/Strength";
import Expert from "../component/Expert";
import Software from "../component/Software";
import { useLocation, useNavigate } from "react-router-dom";

import { submitData } from "../component/SubmitData";
import NewLetter from "../component/NewLetter";

function Fb({ sourceId }) {
  const location = useLocation();
  const slug = location.pathname;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    email: "",
    mobile: "",
    name: "",
    business: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.mobile.length === 10 &&
      /^[0-9]{10}$/.test(data.mobile) &&
      data.email.includes("@") &&
      data.name.length > 0 &&
      data.business.length > 0
    ) {
      submitData(
        data.name,
        data.email,
        data.mobile,
        data.business,
        sourceId,
        slug
      );
      setData({ email: "", mobile: "", name: "", business: "" }); // ← Clear form fields
      setIsDialogOpen(false);
      window.location.href = "https://calendly.com/ben-thefinopartners/30min";
      // setIsOpen(true);
    }
  };
  return (
    <>
      <div className="md:hidden block fixed bottom-0 w-full text-center text-2xl rounded-t-xl bg-[#0F3BA2] text-white py-2 px-5 z-50">
        <a onClick={setIsDialogOpen} target="_blank">
          Book a Call
        </a>
      </div>
      <Header />
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
              <Input
                type="text"
                name="name"
                placeHolder="Enter Name"
                onChange={handleChange}
                value={data.name}
              />
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
                <p className="text-sm text-red-600 ">
                  Please enter a valid email address.
                </p>
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
                <p className="text-sm text-red-600 ">
                  Please enter a valid 10-digit number.
                </p>
              )}
            </div>
            <div className="mb-5">
              <Input
                type="text"
                name="business"
                placeHolder="Enter Business Name"
                onChange={handleChange}
                value={data.business}
              />
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
      <Banner1 setIsDialogOpen={setIsDialogOpen} />
      <SlideRightToLeft />
      <CompleteAccountingServices setIsDialogOpen={setIsDialogOpen} />
      <GetCallBack sourceId={sourceId} />
      <CompanyTrustUs setIsDialogOpen={setIsDialogOpen} />
      <TopLeaderSlider setIsDialogOpen={setIsDialogOpen} />
      <AffordablePricing setIsDialogOpen={setIsDialogOpen} />
      <SimpleSteps />
      <PeopleTrustslider setIsDialogOpen={setIsDialogOpen} />
      <Strength setIsDialogOpen={setIsDialogOpen} />
      <FinoTeamCard setIsDialogOpen={setIsDialogOpen} />
      <GetCallBack sourceId={sourceId} />
      <Software />
      <GoogleSlider setIsDialogOpen={setIsDialogOpen} />
      <Expert setIsDialogOpen={setIsDialogOpen} />
      <Industries />
      <NewLetter />
      <Footer />
    </>
  );
}

export default Fb;
