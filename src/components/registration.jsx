import { useState } from "react";

const RegistrationPage = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [players, setPlayers] = useState([]);

  const eventPlayerCount = {
    "it-quiz": 2,
    "web-designing": 2,
    coding: 1,
    "it-manager": 1,
    "product-launch": 3,
    videography: 1,
    "cultural-dance": 10,
  };

  const eventAmounts = {
    "it-quiz": 400,
    "web-designing": 400,
    coding: 200,
    "it-manager": 200,
    "product-launch": 600,
    videography: 200,
    "cultural-dance": 1500,
  };

  const handleEventChange = (event) => {
    const eventNumber = event.target.value;
    setSelectedEvent(eventNumber);
    const initialCount = eventPlayerCount[eventNumber] || 0;
    setPlayers(Array(initialCount).fill({ name: "", email: "", phone: "" }));
  };

  const handlePlayerChange = (index, field, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
    setPlayers(updatedPlayers);
  };

  const handleSubmit = () => {
    const teamName = document.getElementById("teamName");
    const collegeName = document.getElementById("collegeName");
    const transactionId = document.getElementById("transactionId");

    if (teamName.value == "") {
      alert("Kindly give a Team name!");
      return;
    }

    if (collegeName.value == "") {
      alert("Kindly enter college name!");
      return;
    }

    if (transactionId.value == "") {
      alert("Kindly enter Transaction ID!");
      return;
    }

    if (teamName.value == collegeName.value) {
      alert("Team name cannot be the same as college name!");
      return;
    }

    if (!selectedEvent) {
      alert("Kindly select an Event to register.");
      return;
    }
    for (
      let i = 0;
      i < (selectedEvent === "cultural-dance" ? 8 : players.length);
      i++
    ) {
      const { name, email, phone } = players[i];
      if (!name || !email || !phone) {
        alert(`Kindly fill all fields for Player ${i + 1}.`);
        return;
      }
    }
    const registrationData = {
      teamName: teamName.value,
      collegeName: collegeName.value,
      transactionId: transactionId.value,
      event: selectedEvent,
      players: players,
      paymentStatus: false,
    };

    const jsonData = JSON.stringify(registrationData, null, 2);
    console.log(jsonData);
    alert("Registration successful!");
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      <h1 className="mt-20 mb-10 text-blue-400 text-3xl md:text-4xl font-bold font-primary">
        Register Now
      </h1>
      <div className="mt-5 max-w-xl w-11/12 flex flex-col items-center bg-blend-luminosity font-primary rounded-2xl overflow-hidden">
        {/* Team Name */}
        <div className="my-3 w-5/6 flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between">
          <label
            className="text-nowrap text-lg md:pr-3 text-white font-semibold"
            htmlFor="teamName"
          >
            Team Name:{" "}
          </label>
          <input
            id="teamName"
            name="teamName"
            className="w-full text-blue-400 md:text-lg focus:outline-none text-base font-semibold"
            type="text"
            placeholder="Must not be same as college"
            required
            maxLength={10}
          />
        </div>
        {/* College Name */}
        <div className="my-3 w-5/6 flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between">
          <label
            className="text-nowrap text-lg md:pr-3 text-white font-semibold"
            htmlFor="collegeName"
          >
            College Name:{" "}
          </label>
          <input
            id="collegeName"
            name="collegeName"
            className="w-full text-blue-400 md:text-lg focus:outline-none text-base font-semibold"
            type="text"
            placeholder="Must not be same as Team name"
            required
            maxLength={50}
          />
        </div>
        {/* Event Name */}
        <div className="my-3 w-5/6 flex flex-col md:flex-row items-start justify-center md:items-center md:justify-center">
          <label
            className="text-nowrap text-lg md:pr-3 text-white font-semibold"
            htmlFor="eventName"
          >
            Event:{" "}
          </label>
          <select
            id="eventName"
            name="eventname"
            className="text-black text-sm font-semibold border-none rounded-sm w-full h-10 bg-blue-400 p-2"
            value={selectedEvent}
            onChange={handleEventChange}
          >
            <option value="" disabled hidden>
              Choose an event
            </option>
            <option value="it-quiz">Tech-Know: IT Quiz</option>
            <option value="web-designing">Pixel-Craft: Web Designing</option>
            <option value="coding">Byte-Battle: Coding</option>
            <option value="it-manager">Tech-Tix: IT Manager</option>
            <option value="product-launch">Tech-Reveal: Product Launch</option>
            <option value="videography">Cine-Scope: Videography</option>
            <option value="cultural-dance">Rhythm: Cultural Dance</option>
          </select>
        </div>
        {/* Player Input Fields */}
        {players.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg text-white font-semibold mb-2">Teammates</h3>
            {players.map((player, index) => (
              <div key={index} className="mb-3 p-3 bg-gray-800 rounded">
                <label className="block text-white text-sm font-semibold">
                  Player {index + 1}{" "}
                  {selectedEvent === "cultural-dance" && index >= 8 ? (
                    <span className="text-amber-400">(Optional)</span>
                  ) : (
                    ""
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-white font-semibold border border-blue-400 p-2 rounded mt-1 focus:outline-none "
                  value={player.name}
                  onChange={(e) =>
                    handlePlayerChange(index, "name", e.target.value)
                  }
                  required={selectedEvent !== "cultural-dance" || index < 8}
                  maxLength={20}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-white font-semibold border border-blue-400 p-2 rounded mt-1 focus:outline-none"
                  value={player.email}
                  onChange={(e) =>
                    handlePlayerChange(index, "email", e.target.value)
                  }
                  required={selectedEvent !== "cultural-dance" || index < 8}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full text-white font-semibold border border-blue-400 p-2 rounded mt-1 focus:outline-none"
                  value={player.phone}
                  onChange={(e) =>
                    handlePlayerChange(index, "phone", e.target.value)
                  }
                  required={selectedEvent !== "cultural-dance" || index < 8}
                />
              </div>
            ))}
          </div>
        )}
        {/* UPI Payment Button */}
        {selectedEvent && (
          <div className="mt-4 py-4 px-6 bg-gray-800 rounded-xl text-base md:text-2xl">
            <h1 className="text-white text-center">
              Pay ₹{eventAmounts[selectedEvent] || 0} to
            </h1>
            <span className="text-blue-400">UPI:</span>{" "}
            <span className="select-text text-white">shi1104shir@oksbi</span>{" "}
            <br />
            <span className="text-blue-400">Phone No:</span>{" "}
            <span className="select-text text-white">8108452426</span>
          </div>
        )}
        {/* Transaction ID */}
        {selectedEvent && (
          <div className="mt-6 w-5/6 px-2 py-1 flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between border-2 border-blue-400 rounded">
            <label
              className="text-nowrap text-lg md:pr-3 text-white font-semibold"
              htmlFor="transactionId"
            >
              Transaction ID:{" "}
            </label>
            <input
              id="transactionId"
              name="transactionId"
              className="w-full text-blue-400 md:text-lg focus:outline-none text-base font-semibold"
              type="text"
              placeholder="Transaction ID / UPI ID"
              required
              maxLength={20}
            />
          </div>
        )}
        {selectedEvent && (
          <h1 className="mt-2 text-white w-3/4 text-center text-xs md:text-sm">
            <span className="font-bold">Note:</span> Registration will only be
            processed after we confirm the payment through the transaction ID
          </h1>
        )}
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-3/4 bg-green-500 text-black font-semibold py-2 rounded-sm cursor-pointer"
        >
          Register
        </button>
        <h1 className="mt-2 mb-6 text-white w-3/4 text-center text-xs md:text-sm">
          <span className="font-bold">Note:</span> Incase of any technical
          issues, Kindly contact <span className="font-bold">Shishir:</span>{" "}
          <span className="select-text">8108452426</span>
        </h1>
      </div>
    </div>
  );
};

export default RegistrationPage;
