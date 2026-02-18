import React from 'react';
import styles from './NewGoogleAdsBanner.module.css';

function NewGoogleAdsBanner({ setIsDialogOpen, sourceId }) {
  return (
    <section
      className="w-full lg:mt-18 bg-[#f5f8ff] pb-10 py-5 scroll-mt-24"
      id="Home"
      style={{
        backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/role-top-banner.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center'
      }}
    >
      {/* Top Offer Section */}
      <div className={`${styles.offerContainer}`}>
        {/* <!-- LEFT SIDE (ANIMATED) --> */}
        <div className={`${styles.offerLeft}`}>
          <div className={`${styles.offerTextSlider}`}>
            <div>
              David Collins, <strong>EA</strong> hired Rahul Mehta as Tax Preparer <strong>7 days ago.</strong>
            </div>
            <div>
              Mark Reynolds, <strong>CPA</strong> hired Kavita Nair as Senior Accountant <strong>4 days ago.</strong>
            </div>
            <div>
              Mehul Shah, <strong>Tax Accountant</strong> is available <strong>@ $15</strong> per hour
            </div>
            <div>
              Jennifer Adams, <strong>CPA</strong> hired Ankit Verma as Staff Accountant <strong>2 days ago.</strong>
            </div>
            <div>
              Garima Joshi, <strong>Senior Bookkeeper</strong> is available <strong>@ $12</strong> per hour.
            </div>
            <div>
              Thomas Green, <strong>CPA</strong> hired Ritu Verma as Tax Preparer <strong>5 days ago.</strong>
            </div>
          </div>
        </div>
        {/* <!-- RIGHT SIDE --> */}
        <div className={`${styles.offerRight}`}>
          <button onClick={() => setIsDialogOpen(true)} className="cursor-pointer">
            Get offer →
          </button>
        </div>
      </div>

      <div className="w-full mt-3 px-20">
        <div className="row">
          <div className={`${styles.newhireBannerpage}`}>
            <h2 className="leading-25 text-white">Hire the Best Accountant & Tax Preparer for CPA & Accounting Firms </h2>
            {/* <h2 className="leading-25 text-white">Hire a Skilled Tax Preparer & Accountant for Your Firm</h2> */}
            {/* for your Firm */}
            <p className="lg:col-10 mx-auto mt-10">
              <span className="bg-amber-400 px-3 py-5 text-4xl rounded-sm">
                <span className="bg-white py-2 px-3 border border-black rounded-sm">
                  Starting @ <b>$12/Hour</b>
                </span>
              </span>
            </p>
          </div>

          <div className="mt-15 flex justify-center">
            <div className="w-full max-w-5xl">
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${styles.statsWrapper}`}>
                {/* Stat 1 */}
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statText}>Years Experience</div>
                </div>

                {/* Stat 2 */}
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statText}>CPAs Trust us!</div>
                </div>

                {/* Stat 3 */}
                <div className={styles.statItem}>
                  <div className={`flex items-center justify-center gap-3 ${styles.ratingBox}`}>
                    <div className={styles.ratingNumber}>4.9</div>

                    <div className={styles.ratingText}>
                      <p className={styles.stars}>★★★★★</p>
                      <p>Avg. Clients Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-6 py-3 bg-[#1D2B72] text-white rounded-lg hover:bg-white transition cursor-pointer hover:text-black"
            >
              Hire an Accountant
            </button>

            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-6 py-3 border bg-[#3A58EF] border-blue-600 text-white rounded-lg hover:bg-blue-50 hover:text-black transition cursor-pointer"
            >
              Hire a Tax Preparer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewGoogleAdsBanner;
