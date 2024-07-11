//UseState AND Useeffect
import React, {UseState,Useeffect, useState} from 'react';

import Sample2 from "../about/sample-2";

function Sample() {

  const [variablename,setvariablename] = useState(20);

  let  handleIncrement = () => setvariablename(variablename+1);
  return (
    <div>
      <button onClick={handleIncrement}>Work</button>

      <Sample2 value={variablename}/>
    </div>
  );
}
export default Sample;
