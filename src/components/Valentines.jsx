import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bgmusic, fireworks, happy, happy1, happy2, rainheart, sad, sad1, sad2 } from "../assets";

function Valentines() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (step == "final") {
      audioRef.current.play();
    }
  }, [step]); 
  
  const messages = [
    "Pinakahini-hintay nimo na question hehe...",
    "Ready nakaa bebeh?...",
    "Sure ka nga ready najud?",
    "3",
    "2",
    "1",
    "Waaaaittt!!!",
    "Sure najud na nga ready najud bebeh?",
    "Will you be my Valentine?",
  ];

  const handleClick = () => {
    if (step < messages.length - 1) {
      setTimeout(() => setStep(step + 1), 700);
    }
  };

  return (
    <div
      className="min-h-screen bg-black/20 flex flex-col items-center justify-center text-center px-4 cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-2xl sm:text-5xl leading-tight font-bold text-pink-600 mb-20">
        {messages[step]}
      </h1>

      {step === messages.length - 1 && (
        <div className="flex gap-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setStep("yes");
            }}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-all"
          >
            Yes na yes!
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setStep("no");
            }}
            className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all"
          >
            Dele lang
          </button>
        </div>
      )}

      {step === "yes" && (
        <div className="flex flex-col items-center gap-6" onClick={() => setStep("final")}>
          <div
            className="absolute inset-0 z-100 opacity-50"
            style={{
              backgroundImage: `url(${rainheart})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <img
            src={happy}
            alt="Happy Jared"
            className="w-[300px] h-[300px] rounded-lg shadow-lg"
          />

          <h1 className="text-4xl sm:text-5xl font-bold text-pink-500">
            YEEEEYYY!!! Jareeedd so happpyy!!
          </h1>

          <div className="flex gap-4 mt-6">
            <img
              src={happy1}
              alt="Excited Jared"
              className="w-[250px] h-[250px] rounded-lg shadow-lg"
            />
            <img
              src={happy2}
              alt="Smiling Jared"
              className="w-[250px] h-[250px] rounded-lg shadow-lg"
            />
          </div>

          <button
            onClick={() => setStep("final")}
            className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all"
          >
            Continue
          </button>
        </div>
      )}

      {step == "final" && ( // Render the final message when finalStep is true
        <div className="flex flex-col items-center gap-6">
          <div
            className="absolute inset-0 z-100 opacity-50"
            style={{
              backgroundImage: `url(${rainheart})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

        <div
          className="absolute inset-0 z-100 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
            {/* Falling images of you */}
            <div className="falling-images absolute top-[-100px] left-0 w-full flex justify-center gap-10">
            <img
              src={happy}
              alt="Falling Jared 1"
              className="w-[1500px] h-[150px] animate-fall" 
            />
            <img
              src={happy1}
              alt="Falling Jared 2"
              className="w-[1500px] h-[150px] animate-fall" 
            />
            <img
              src={happy2}
              alt="Falling Jared 3"
              className="w-[1500px] h-[150px] animate-fall"      
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-6">
            Save the date, see you on Feb 14 my love!
          </h1>
          <audio ref={audioRef} src={bgmusic} /> 
        </div>
      )}

      {step === "no" && (
        <>
          <img
            src={sad}
            alt="Sad Jared"
            className="w-[400px] h-[400px] mb-6"
          />

          <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-6">
            Sure ka ana bebeh? 😢
          </h1>

          <button
            onClick={() => setStep("yes")}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-all"
          >
            Sige nalang gud
          </button>

          <button
            onClick={() => setStep("confirm1")}
            className="px-6 py-3 bg-white text-black  font-semibold rounded-lg shadow-md hover:bg-gray-400 mt-6 transition-all"
          >
            Yes, sure
          </button>
        </>
      )}

      {step === "confirm1" && (
        <>
          <img
            src={sad1}
            alt="Sad Jared"
            className="w-[400px] h-[400px] mb-6"
          />

          <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-6">
            BEBEHHHHH, SURE NAJUD NAAA?? 😢
          </h1>
          <button
            onClick={() => setStep("yes")}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-all"
          >
            Sige nalang gud
          </button>

          <button
            onClick={() => setStep("confirm2")}
            className="px-6 py-3 bg-white text-black  font-semibold rounded-lg shadow-md hover:bg-gray-400 mt-6 transition-all"
          >
            Yes, sure na sure
          </button>
        </>
      )}

      {step === "confirm2" && (
        <>
          <img
            src={sad2}
            alt="Sad Jared"
            className="w-[400px] h-[400px] mb-6"
          />

          <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-6">
            Sure najud ka ana bebeh kay muhilak nako huhu
          </h1>
          <button
            onClick={() => setStep("yes")}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-all"
          >
            Yes naaa!! (wana kay choice hehe)
          </button>
        </>
      )}
    </div>
  );
}

export default Valentines;
