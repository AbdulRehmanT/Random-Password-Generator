import { useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [uprStr, setUprStr] = useState(true);
  const [lowStr, setLowStr] = useState(true);
  const [num, setNum] = useState(true);
  const [sym, setSym] = useState(true);

  const genPassword = () => {
    let genPass = "";

    if (uprStr) {
      genPass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowStr) {
      genPass += "abcdefghijklmnopqrstuvwxyz";
    }

    if (num) {
      genPass += "1234567890";
    }

    if (sym) {
      genPass += "~!@#$%^&*()_-+`{}[]|:<>/?";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      let getPass = Math.floor(Math.random() * genPass.length);
      let getChar = genPass.charAt(getPass);
      pass += getChar;
    }

    setPassword(pass);
  };

  useEffect(() => {
    if (uprStr || lowStr || num || sym) {
      genPassword();
    }
  }, [length, uprStr, lowStr, num, sym]);

  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="flex items-center justify-center h-screen p-4 mx-auto">
        <div className="flex flex-col items-center w-full lg:w-1/2 bg-white px-8 py-4 shadow-sm rounded-md">
          <h1 className="text-2xl font-bold mb-4">Random Password Generator</h1>
          <div className="border px-5 py-2 rounded mb-4 w-full bg-slate-50 shadow flex justify-between">
            <h3>{password}</h3>
          </div>

          <div className="flex w-full justify-around mt-4 text-lg flex-col md:flex-row">
            <div className="">
              <input
                min={1}
                max={20}
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="border shadow pl-3 py-1 mr-3"
              />
              <input
                min={1}
                max={20}
                type="range"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start">
              <div>
                <input
                  type="checkbox"
                  checked={uprStr}
                  onChange={(e) => setUprStr(e.target.checked)} className="mr-2"
                  id="upperCase"
                />
                <label htmlFor="upperCase">Uppercase</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={lowStr}
                  onChange={(e) => setLowStr(e.target.checked)} className="mr-2"
                  id="lowerCase"
                />
                <label htmlFor="lowerCase">Lowercase</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={num}
                  onChange={(e) => setNum(e.target.checked)} className="mr-2"
                  id="numbers"
                />
                <label htmlFor="numbers">Number</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={sym}
                  onChange={(e) => setSym(e.target.checked)} className="mr-2"
                  id="symbols"
                />
                <label htmlFor="symbols">Symbol</label>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm text-center w-full mt-5"
            onClick={() => navigator.clipboard.writeText(password)}

          >
            Copy Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
