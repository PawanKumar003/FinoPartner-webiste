import React, { useState, useEffect } from 'react';
import AccountantDitailsModal from '../component/modal/AccountantDitailsModal';

// const candidates = [
//   {
//     name: 'Nitendar Kumar',
//     role: 'Senior Accountant',
//     desc: 'I am seeking a career that has a global perspective and fosters creativity. It should provide opportunities for my individual growth.',
//     skills: ['QuickBooks', 'Xero', 'Sage'],
//     img: 'https://thefinopartners.com/public/assets/leaders/Bob-Conroy.webp',
//     bg: 'bg-green-100',
//     price: 1300,
//     id: 1,
//     video: 'https://thefinopartners.com/public/assets/images/office-tour-video.mp4'
//   },
//   {
//     name: 'Bhanu Tyagi',
//     role: 'Senior Accountant',
//     desc: 'I am seeking a career that has a global perspective and fosters creativity. It should provide opportunities for my individual growth.',
//     skills: ['QuickBooks', 'Xero', 'Sage'],
//     img: 'https://thefinopartners.com/public/assets/leaders/Bob-Conroy.webp',
//     bg: 'bg-purple-100',
//     price: 1600,
//     id: 2,
//     video: 'https://thefinopartners.com/public/assets/images/office-tour-video.mp4'
//   },
//   {
//     name: 'Bhanu Tyagi',
//     role: 'Senior Accountant',
//     desc: 'I am seeking a career that has a global perspective and fosters creativity. It should provide opportunities for my individual growth.',
//     skills: ['QuickBooks', 'Xero', 'Sage'],
//     img: 'https://thefinopartners.com/public/assets/leaders/Bob-Conroy.webp',
//     bg: 'bg-purple-100',
//     price: 2600,
//     id: 3,
//     video: 'https://thefinopartners.com/public/assets/images/office-tour-video.mp4'
//   }
// ];

// case study
const caseStudy = [
  {
    id: 1,
    img: 'https://thefinopartners.com/public/assets/email-img/edward-morgan.webp',
    title: 'Edward Morgan',
    tag: 'By Edward Morgan, CFO of Apexton CPA Solutions',
    text: `<p>Among the toughest aspects of becoming the CFO of&nbsp;<strong>Apexton CPA Solutions,</strong>&nbsp;a mid-size CPA firm based in Atlanta, Georgia, was managing accounts across several states with growing business. We have clients in over 15 states, and that means dealing with all the tax laws, due dates &amp; compliance, which is no small undertaking for any company.</p>
    <p>In 2021, we hired The Fino Partners to expand our own team - a move which changed our tax procedures for the best.</p>
    <h3>Why We Trust The Fino Partners</h3>
    <p>The Fino Partners are more than offshore accountants, they are our partners in business. Their team is easy, responsive, and knowledgeable to work with. They simplify multi-state accounting &amp; tax preparation for you.</p>
    <p>As Apexton CPA Solutions expands into new states, we know The Fino Partners will be here for us. Their expertise has enabled us to simplify our tax processes, lower expenses and concentrate on expanding our business.</p>
    <p>Any company that has challenges with growing accountant needs should use The Fino Partners. They have changed our lives and I guarantee they could do the same for you.</p>
    <p>Edward Morgan<br />CFO, Apexton CPA Solutions</p>`
  },
  {
    id: 2,
    img: 'https://thefinopartners.com/public/assets/email-img/jason-mitchell.webp',
    title: 'Jason Mitchell',
    tag: 'By Jason Mitchell, Owner of ExcelCup CPA',
    text: `<p>It is a challenging task managing a growing business. Being the owner of Excelcup CPA in Seattle, I wanted to board in more customers without burdening my team too much. But managing the finances of so many businesses without expert help? That seemed impossible entirely.</p>
    <p>By 2020, our business was growing steadily but we were handling bookkeeping, invoice processing and reconciling accounts which were growing out of hand. That is when I chose The Fino Partners for their offshore accounting services and the impact is extraordinary.</p>
    <h3>Why We Recommend The Fino Partners</h3>
    <p>The Fino Partners have done much more than handle our financial tasks; they have changed how we run our business. Their offshore accounting services are inexpensive, dependable and specialized for small businesses in the USA.</p>
    <p>And their team cares about their clients' success. They are partners, not just accountants - who help your company develop.</p>
    <p>If you are a CPA proprietor having problems with growing clients, I suggest The Fino Partners for you. Their offshore accounting solutions are innovative and I am very happy I decided to go with them.</p>
    <p>Jason Mitchell<br />Owner, Excelcup CPA in Seattle</p>`
  },
  {
    id: 3,
    img: 'https://thefinopartners.com/public/assets/email-img/allen-johnson.webp',
    title: 'Allen Johnson',
    tag: 'By Allen Johnson, Managing Partner of Hamtrol CPA Group',
    text: `<p>When I started Hamtrol CPA Group in Dallas, Texas, I wanted to offer personalized accounting and tax solutions to our clients while controlling a small workload. By 2020 though, we had hit a tipping point. Our client base was growing &amp; so were our team demands. We needed a means to scale our operations without compromising on quality and attention to detail that our clients appreciated.</p>
    <p>That was when we formed an offshore team with The Fino Partners and it has been an excellent experience for our firm.</p>
    <h3>The Solution: Offshore Team with The Fino Partners</h3>
    <p>The solution that we had been searching for finally came true with The Fino Partners &amp; it was the best fit for our team. After thorough consultation we hired:</p>
    <ul>
    <li>A tax preparer for corporate and individual tax returns.</li>
    <li>A bookkeeper to do routine accounting work.</li>
    <li>An accounts supervisor to oversee offshore operations and everything running smoothly.</li>
    </ul>
    <p>With The Fino Partners behind us, we're not limited by staffing. Now we can pursue more clients and diversify into new service areas with confidence.</p>
    <p>Allen Johnson<br />Managing Partner, Hamtrol CPA Group</p>`
  },
  {
    id: 4,
    img: 'https://thefinopartners.com/public/assets/email-img/emily-carter.webp',
    title: 'Emily Carter',
    tag: 'By Emily Carter, Owner of Urbancall CPA',
    text: `<p>In the year 2018, I started my own CPA specialized company in Chicago. Since beginning in 2018, I have expanded our team of expert bookkeepers, accountants &amp; CPAs. However as our business expanded, I realized I could not do all of it with my in-house team.</p>
    <p>That is when I found The Fino Partners and their offshore accounting services, which have been lifesaving for my business.</p>
    <h3>The Solution: Expert Offshore Accounting Assistance from The Fino Partners</h3>
    <p>A business acquaintance recommended The Fino Partners to me and I contacted them skeptically. Can an offshore assistant understand my business and create a difference?</p>
    <p>The answer was a yes. The Fino Partners assigned me an expert accountant that had taken over the tasks I required assistance with and also suggested methods to simplify my workflows.</p>
    <p>With more time for strategy and client work, I have taken on larger projects and grew our revenue by 34% last year.</p>
    <p>Urbancall CPA is currently flourishing with the help of our partners, The Fino Partners. I am no longer overwhelmed and I have energy and time to do what I do best.</p>
    <p>Emily Carter<br />Owner, Urbancall CPA</p>`
  }
];

export default function HireAccountant() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAccountant, setSelectedAccountant] = useState(null);
  const [modalType, setModalType] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [status, setStatus] = useState('');

  // Button click handler
  const openModal = (data, type) => {
    setSelectedAccountant(data);
    setIsDialogOpen(true);
    setModalType(type);
  };
  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // candidates api
  useEffect(() => {
    fetch(`https://thefinopartners.com/api/ProfileAccountant/get_profiles?role=${status}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('API DATA:', data); // 👈 pehle check karo structure
        setCandidates(data?.data || data); // depending on API response
      })
      .catch((err) => {
        console.error(err);
      });
  }, [status]);

  const selectStatus = (value) => {
    if (value === 'Accountant') {
      setStatus('accountant');
    } else if (value === 'Tax') {
      setStatus('tax');
    } else {
      setStatus('');
    }
  };
  return (
    <>
      {/* show text & video modal */}
      {selectedAccountant && (
        <AccountantDitailsModal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          {modalType === 'video' ? (
            <div>
              <div className="mb-4">
                <h3 className="font-bold text-xl">{selectedAccountant.name}</h3>
                <p className="text-gray-500">{selectedAccountant.role}</p>
              </div>
              <div>
                <video controls autoPlay loop className="w-full rounded-lg" preload="none">
                  <source src={`https://thefinopartners.com/uploads/profile/${selectedAccountant.video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <h3 className="font-bold text-xl">{selectedAccountant.name}</h3>
                <p className="text-gray-500">{selectedAccountant.role}</p>
              </div>
              <div>
                <p>{selectedAccountant.description}</p>
              </div>
            </div>
          )}
        </AccountantDitailsModal>
      )}
      <section>
        <div className="hidden lg:block">
          <img
            className="w-full h-full"
            src="https://thefinopartners.com/public/assets/reactimg/hire-accountant-destop.webp"
            alt="the fino partners"
          />
        </div>
        <div className="lg:hidden block">
          <img
            className="w-full h-full"
            src="https://thefinopartners.com/public/assets/reactimg/hire-accountant-Mobile-Banner.webp"
            alt="the fino partners"
          />
        </div>
      </section>
      <div>
        <div className="text-center mb-6 mt-10">
          <h1 className="text-4xl font-semibold">Our Candidates</h1>
          <p className="text-gray-500 text-sm mt-2 md:w-8/12 mx-auto">
            Fino Partners is a leading accounting and bookkeeping services firm based in the United States, dedicated to helping businesses.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto p-4">
        {/* Header */}
        {/* Tabs */}
        <div className="flex gap-3 justify-center mb-6 flex-wrap">
          <button
            className={`px-4 py-2 rounded-lg ${status == '' ? 'bg-[#9985BD] text-white ' : 'bg-gray-100 text-gray-600 cursor-pointer hover:bg-[#9985BD] hover:text-white'}  text-sm font-medium`}
            onClick={() => selectStatus('')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${status == 'tax' ? 'bg-[#9985BD] text-white ' : 'bg-gray-100 text-gray-600 cursor-pointer hover:bg-[#9985BD] hover:text-white'}  text-sm font-medium`}
            onClick={() => selectStatus('Tax')}
          >
            Tax
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${status == 'accountant' ? 'bg-[#9985BD] text-white ' : 'bg-gray-100 text-gray-600 cursor-pointer hover:bg-[#9985BD] hover:text-white'}  text-sm font-medium`}
            onClick={() => selectStatus('Accountant')}
          >
            Accoutant
          </button>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {candidates.map((item, index) => (
            <div className="mx-auto" key={item.id}>
              <div className="full bg-white rounded-2xl shadow-sm border border-gray-300 overflow-hidden text-center">
                {/* Image Section */}
                <div className="relative ">
                  <img
                    src={`https://thefinopartners.com/uploads/profile/${item.image}`}
                    alt="Profile"
                    className="w-full h-84 object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#EADEFF]/100 to-transparent blur-4xl pointer-events-none"
                    style={{ height: '200px' }}
                  ></div>

                  {/* Play Button */}
                  <div className="absolute w-full flex justify-center bottom-0">
                    <button
                      className="cursor-pointer w-16 h-16 bg-[#4d00db68] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition border border-[#4E00DB]"
                      key={item.id}
                      onClick={() => openModal(item, 'video')}
                    >
                      <span className="text-[#4E00DB] text-2xl ml-1">▶</span>
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4 bg-[#EADEFF] border-t border-gray-300">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-lg text-gray-500 mb-3">{item.role}</p>

                  {/* Tags */}
                  <div className="flex justify-between gap-4 flex-wrap items-center">
                    <div>
                      <p className="text-[#221668] font-semibold text-2xl">{`$${item.price}/Month`}</p>
                    </div>
                    <div>
                      <button
                        className="cursor-pointer hover:scale-105 transition border border-gray-300 rounded-sm py-1 px-2"
                        onClick={() => openModal(item, 'desc')}
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* button */}
                  <div className="mt-4">
                    <a
                      href={`https://calendly.com/ben-thefinopartners/30min?utm_source=${item.name}&utm_medium=${encodeURIComponent(item.role)}&utm_campaign=Hire-a-Accountant`}
                      className="cursor-pointer hover:bg-[#704fb1] px-6 py-2 rounded-lg bg-[#8c68d3] text-white text-xl font-semibold"
                      target="_blank"
                    >
                      Meet a Candidate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-1 gap-6 mt-10">
        {caseStudy.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="bg-white rounded-xl shadow p-4 lg:flex lg:gap-10 gap-5">
              {/* Image */}
              <div className="lg:w-4/12 w-full">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg mb-3" />
              </div>

              {/* Content */}
              <div className="lg:w-8/12 w-full">
                <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                <p className="text-xl text-gray-500 mb-3">{item.tag}</p>

                {/* HTML Content */}
                <div
                  className={`text-gray-600 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-5' : ''}`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />

                {/* Button */}
                <button onClick={() => toggleReadMore(item.id)} className="text-[#8c68d3] font-medium mt-2">
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="text-center w-full px-4 my-10 lg:mt-15">
          <h2 className="text-4xl font-semibold">The Strength of Fino</h2>
          <p className="md:w-9/12 mx-auto">
            Our team is the true strength behind The Fino Partners. A group of passionate professionals dedicated to supporting CPA firms
            and businesses across the United States. Together, we focus on delivering reliable accounting, tax, and client support
            solutions.
          </p>
        </div>
        <img src="https://thefinopartners.com/public/assets/images/tfp-journey-Our-team.jpeg" alt="The fino partners team" />
      </div>
    </>
  );
}
