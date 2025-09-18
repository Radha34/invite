import React, { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [datePlan, setDatePlan] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [reply, setReply] = useState("");
  const [submittedReply, setSubmittedReply] = useState(false);

  const handleSubmit = () => {
    if (!datePlan || !selectedDate) {
      alert("Please pick a date plan and a day! 💌");
      return;
    }
    setConfirmed(true);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (reply.trim()) {
      setSubmittedReply(true);
    }
  };

  return (
    <div className="container">
      {confirmed && <Confetti />}
      <div className="card">
        <h1>Hey Jayyy 💌</h1>
        <p>
          It's your birthday tomorrow, and I want to plan something special for u! 🎉
        </p>

        {!confirmed ? (
          <>
            <label>
              Pick your dream date:
              <select
                value={datePlan}
                onChange={(e) => setDatePlan(e.target.value)}
              >
                <option value="">-- Choose one --</option>
                <option value="Trampoline Park 🌌">Trampoline Park 🌌</option>
                <option value="Pottery Date 🎬">Pottery Date🎬</option>
                <option value="Mystery Room 🎬">mystery Room🎬</option> 
                <option value="Road trip 🚗">Road trip 🚗</option>
                <option value="Massage & spa for you 🧖‍♂️">Massage & spa for you 🧖‍♂️</option>
              </select>
            </label>

            <button onClick={handleSubmit}>Confirm 🎁</button>
          </>
        ) : (
          <div className="confirmation">
            <h2>Yay! 🎊</h2>
            <p>
              We're going on a <strong>{datePlan}</strong> on{" "}
              <strong>20</strong>! 💖 Can't
              wait to celebrate you !
            </p>

            {!submittedReply ? (
              <form onSubmit={handleReplySubmit} className="reply-form">
                <label>
                  Your turn! Leave me a message 😊
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    rows="4"
                    placeholder="Type your message here..."
                  />
                </label>
                <button type="submit">Send 💌</button>
              </form>
            ) : (
              <div className="reply-message">
                <h3>💬 Your Message</h3>
                <p>{reply}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
