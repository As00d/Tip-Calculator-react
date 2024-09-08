import Bill from "./components/Bill";
import Service from "./components/Service";
import Result from "./components/Result";
import Reset from "./components/Reset";
import { useState } from "react";
function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");
  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Service
        text={"How do you like the service ?"}
        percentage={percentage1}
        setPercentage={setPercentage1}
      />
      <Service
        text={"How did your friend like the service ?"}
        percentage={percentage2}
        setPercentage={setPercentage2}
      />
      <Result bill={bill} percentage1={percentage1} percentage2={percentage2} />
      <Reset onSetBill={setBill} />
    </div>
  );
}

export default App;
