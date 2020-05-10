import React, {useState} from 'react';
import axios from 'axios'

export default () => {

  const [status, setStatus] = useState(false);

  const post = async () => {
    const result = await axios.post('/api/test', {
      test: 'test'
    })
    console.log(result)
  }

  const Status = () => {
    if (status) {
      return <p>Status OK</p>
    }
    return <p>Status NG</p>;
  }

  const changeStatus = () => {
    setStatus(!status)
  }

  return (
    <div>
      <Status />
      <div onClick={async () => {await post()}}>
          <p>fecth</p>
      </div>
      <div onClick={changeStatus}>Change Status</div>
    </div>
  );
}
