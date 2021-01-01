import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HookCakeContainer() {
  const [cakeCount, setCakeCount] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={cakeCount}
        onChange={(e) => setCakeCount(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(cakeCount))}>
        Buy {cakeCount} Cake
      </button>
    </div>
  );
}

export default HookCakeContainer;
