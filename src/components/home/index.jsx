import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import FeedbackCard from "../feedbackCard";

import { getFunctions, httpsCallable } from "firebase/functions";

const Home = () => {
  const [message, setMessage] = useState("Default Message");

  async function callMyFunction() {
    const functions = getFunctions();
    const myFunction = httpsCallable(functions, "myFunction");

    try {
      const data = {};

      const result = await myFunction(data);

      if (result.data.sucess) {
        setMessage("Firebase function called sucessfully.");
      } else {
        setMessage("Firebase function has an error.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  const { currentUser } = useAuth();
  return (
    <div className="mt-14">
      <div className="flex flex-col gap-y-2 w-fit mx-auto mt-10">
        <FeedbackCard />
      </div>
    </div>
  );
};

export default Home;
