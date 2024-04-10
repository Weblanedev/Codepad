import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="flex flex-col-reverse md:flex-row h-[90vh] md:h-[85vh] mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[30px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Accelerating your business through innovative IT Solutions
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[600px]">
            Our highly skilled development teams specialized in Java, PHP,
            React, Angular and AWS help you accelarate your business via modern
            custom software solutions.
          </p>

          <Link
            to="/billing"
            className="text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-12 py-4 md:py-5 hover:bg-blue-600 flex items-center justify-center gap-3"
          >
            Explore Products
          </Link>
        </div>

        <img
          src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/team_339c3ad3fa.jfif"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[600px] object-cover rounded-xl shadow-lg"
        />
      </section>

      <section className="flex w-full flex-col md:flex-row items-center justify-center md:justify-between gap-5 bg-blue-500/30 py-14 md:py-20">
        <div className="mx-10 md:mx-[130px] flex flex-col md:flex-row justify-between items-center w-full gap-5">
          <div className="flex gap-[30px] flex-col sm:flex-row">
            <div className="flex flex-col gap-5 items-start justify-center p-8 bg-white rounded-2xl w-[300px] md:w-[400px]">
              <img
                src="https://images.ctfassets.net/5i1m3im8l2b5/gjZWf327jNvv0W7SKVUIi/3efb176d4ca48296f367c35f05224f08/icon-enterprise.png?w=81&h=81&q=75&fm=webp"
                alt=""
              />
              <h3 className="font-medium text-[28px] leading-tight">
                Codepad Business Access
              </h3>
              <p className="">
                Secure, high-performance remote access from any device,
                anywhere, at an unbeatable price
              </p>
              <button className="text-base md:mt-10 font-medium text-white bg-blue-500 rounded-full px-7 md:px-9 py-3 hover:bg-blue-600 flex items-center justify-center gap-3">
                Learn More
              </button>
            </div>
            <div className="flex flex-col gap-5 items-start justify-center p-8 bg-white rounded-2xl w-[300px] md:w-[400px]">
              <img
                src="https://images.ctfassets.net/5i1m3im8l2b5/gjZWf327jNvv0W7SKVUIi/3efb176d4ca48296f367c35f05224f08/icon-enterprise.png?w=81&h=81&q=75&fm=webp"
                alt=""
              />
              <h3 className="font-medium text-[28px] leading-tight">
                Codepad Business Access
              </h3>
              <p className="">
                Secure, high-performance remote access from any device,
                anywhere, at an unbeatable price
              </p>
              <button className="text-base md:mt-10 font-medium text-white bg-blue-500 rounded-full px-7 md:px-9 py-3 hover:bg-blue-600 flex items-center justify-center gap-3">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-center p-8 bg-white rounded-2xl w-[300px] md:w-[400px]">
            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/gjZWf327jNvv0W7SKVUIi/3efb176d4ca48296f367c35f05224f08/icon-enterprise.png?w=81&h=81&q=75&fm=webp"
              alt=""
            />
            <h3 className="font-medium text-[28px] leading-tight">
              Codepad Business Access
            </h3>
            <p className="">
              Secure, high-performance remote access from any device, anywhere,
              at an unbeatable price
            </p>
            <button className="text-base md:mt-10 font-medium text-white bg-blue-500 rounded-full px-7 md:px-9 py-3 hover:bg-blue-600 flex items-center justify-center gap-3">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center md:justify-between gap-[30px] bg-white py-14 md:py-20 px-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row gap-[30px] w-full items-center justify-center">
          <Link
            to="/blog/one"
            className="w-full sm:w-[660px] h-[334px] md:w-[760px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/4USD6n19mDElNYSVJGb3rS/de02a8a1774953e5429b6dfbadcb0dbf/offset-card-03.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                How organisations can champion women every day of the year
              </h1>
            </div>
          </Link>

          <Link
            to="/blog/one"
            className="w-full sm:w-[660px] h-[334px] md:w-[470px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/1WN9uB05X2ieNVAR5n9UK4/218fda8193a361ca4c5f9e7ea4922ea4/offset-card-04.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                How organisations can champion women every day of the year
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-[30px] w-full items-center justify-center">
          <Link
            to="/blog/one"
            className="w-full sm:w-[660px] h-[334px] md:w-[760px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/4USD6n19mDElNYSVJGb3rS/de02a8a1774953e5429b6dfbadcb0dbf/offset-card-03.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                How organisations can champion women every day of the year
              </h1>
            </div>
          </Link>

          <Link
            to="/blog/one"
            className="w-full sm:w-[660px] h-[334px] md:w-[470px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/1WN9uB05X2ieNVAR5n9UK4/218fda8193a361ca4c5f9e7ea4922ea4/offset-card-04.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                How organisations can champion women every day of the year
              </h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
