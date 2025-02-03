import React, { useState } from "react";
import "./QnA.css";

export default function QnA() {
  // Separate states for each card's active question
  const [activeQuestionLeft, setActiveQuestionLeft] = useState(null);

  const toggleAnswerLeft = (questionId) => {
    setActiveQuestionLeft((prevQuestionId) =>
      prevQuestionId === questionId ? null : questionId
    );
  };



  const questions = [
    {
      id: 1,
      question: "What is KIBOKO DAO NFT Collection?",
      answer:
        "Group of non-fungible token that allow community secure membership with the DAO.",
    },
    {
      id: 2,
      question: "Why should we choose KIBOKO NFT?",
      answer:
        "Grant membership that unlocks; voting, proporsing, mentorship, access to funding & grants.",
    },
    {
      id: 3,
      question: "How secure is this token?",
      answer:
        "Our tokens have been tested by the best smart contract auditors, and are open-source any errors, bugs or vulnerability can easily be identified.",
    },
    {
      id: 4,
      question: "How can one start buying NFTs?",
      answer:
        "To start buying NFTs, you need to set up a digital wallet, purchase cryptocurrency (such as Ethereum), and then use a marketplace platform to buy the NFTs. Follow the instructions on the platform to complete your purchase.",
    }
  ];

  return (
    <section className="QnA">
      <div className="container-fluid">
        <div className="row">
          <h2>ASKED <span>QUESTIONS</span></h2>
        </div>
        <div className="row">
          <div className="col-md-6 card">
            {questions.map((q, index) => (
              <div className="question" key={q.id}>
                <h5 onClick={() => toggleAnswerLeft(q.id)} data-active={activeQuestionLeft === q.id}>
                  {q.question}
                  {activeQuestionLeft === q.id ? (
                    <i className="bi bi-dash-lg"></i>
                  ) : (
                    <i className="bi bi-plus-lg"></i>
                  )}
                </h5>
                {activeQuestionLeft === q.id && (
                  <p>{q.answer}</p>
                )}
                {index !== questions.length - 1 && <hr />}
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
