import { useState } from "react";
import "./bmi.css"; // Import your CSS file for styling

const BMI = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmiResult, setBmiResult] = useState({ bmi: "0", result: "-" }); // Initialize result as '-'
  const [showPopup, setShowPopup] = useState(false); // New state for popup

  const validateForm = () => {
    if (!age || !height || !weight || !gender) {
      alert("All fields are required!");
    } else {
      countBmi();
    }
  };

  const countBmi = () => {
    const bmi = (parseFloat(weight) / (parseFloat(height) / 100) ** 2).toFixed(2);

    let result = "";
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = "Obese";
    } else if (bmi >= 35) {
      result = "Extremely obese";
    }

    setBmiResult({ bmi, result });

    if (result !== "Healthy") {
      setTimeout(() => {
        setShowPopup(true); // Show popup after 2-3 seconds if BMI is not normal
      }, 2000); // 3000 milliseconds = 3 seconds
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const resetForm = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setGender("");
    setBmiResult({ bmi: "0", result: "-" }); // Reset result to '-'
    setShowPopup(false);
  };

  const calculateHandPosition = (bmi) => {
    const maxBMI = 40;
    const minAngle = -90;
    const maxAngle = 90;

    if (bmi > maxBMI) bmi = maxBMI;

    const angle = (bmi / maxBMI) * (maxAngle - minAngle) + minAngle;
    return angle;
  };

  return (
    <div className="bmi-container">
      <h1 className="bmi-header">BMI Calculator</h1>
      <div className="bmi-form">
        <div className="bmi-inputRow">
          <label className="bmi-label">Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="bmi-input"
          />
        </div>
        <div className="bmi-inputRow">
          <label className="bmi-label">Height (cm)</label>
          <input
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="bmi-input"
          />
        </div>
        <div className="bmi-inputRow">
          <label className="bmi-label">Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bmi-input"
          />
        </div>
        <div className="bmi-genderRow">
          <button
            className={`bmi-genderButton ${
              gender === "male" ? "bmi-selectedGender" : ""
            }`}
            onClick={() => setGender("male")}
          >
            Male
          </button>
          <button
            className={`bmi-genderButton ${
              gender === "female" ? "bmi-selectedGender" : ""
            }`}
            onClick={() => setGender("female")}
          >
            Female
          </button>
        </div>
        <div className="bmi-both-button">
          <button className="bmi-submitButton" onClick={validateForm}>
            Calculate BMI
          </button>
          <button onClick={resetForm} className="bmi-reset-button">
            {" "}
            Reset
          </button>
        </div>

        <div className="bmi-result-layout">
          <div className="bmi-clockContainer">
            <svg width="300" height="200" viewBox="0 0 300 200">
              <defs>
                <linearGradient
                  id="bmiGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "red", stopOpacity: 1 }}
                  />
                  <stop
                    offset="30%"
                    style={{ stopColor: "yellow", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "green", stopOpacity: 1 }}
                  />
                  <stop
                    offset="71%"
                    style={{ stopColor: "yellow", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "red", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M10,150 A140,140 0 0,1 290,150"
                fill="none"
                stroke="url(#bmiGradient)"
                strokeWidth="20"
              />
              <g
                className="bmi-clockHand"
                style={{
                  transform: `rotate(${calculateHandPosition(
                    bmiResult.bmi
                  )}deg)`
                }}
              >
                {/* Main body of the arrow */}
                <line
                  x1="150"
                  y1="140"
                  x2="150"
                  y2="60"
                  stroke="#333"
                  strokeWidth="4"
                />

                {/* Arrowhead */}
                <polygon points="145,65 150,55 155,65" fill="#333" />
              </g>

              <text fontSize="12" fill="black">
                <textPath href="#bmiArc" startOffset="5%">
                  Underweight
                </textPath>
                <textPath href="#bmiArc" startOffset="33%">
                  Healthy
                </textPath>
                <textPath href="#bmiArc" startOffset="66%">
                  Overweight
                </textPath>
              </text>
            </svg>
          </div>

          <div className="bmi-resultContainer">
            <div>
            <p className="bmi-resultLabel">BMI:</p>
            <p className="bmi-resultText">{bmiResult.bmi}</p>
            </div>

            <div>

            <p className="bmi-resultLabel">Result:</p>
            <p
              className={`bmi-resultText ${
                bmiResult.result === "Healthy" ? "bmi-healthy" : "bmi-unhealthy"
              }`}
            >
              {bmiResult.result === "-" ? "-" : bmiResult.result}
            </p>
              
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="bmi-popup">
          <div className="bmi-popup-left">
            <div>SPRING SALE</div>
            <div><hr /></div>
            <div>40% OFF</div>
            <div><hr /></div>

          </div>
          <div className="bmi-popup-content">
            <span className="bmi-popup-close" onClick={closePopup}>
              &times;
            </span>
            <div className="bmi-popup-content-layout">
              <div className="bmi-popup-content-up">
               <div style={{width:'70%'}}> Your BMI seems Lorem ipsum</div>
               <button>Contact us for consulatation</button>
                </div>

              <div className="bmi-popup-content-bottom">
                <h1>Dowanlaod our expert diet plan</h1>
                <button> Click here</button>
                
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMI;
