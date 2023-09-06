// hooks/useAddUser.js
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Import the useRouter hook

const useAddUser = (url) => {
  const router = useRouter(); // Initialize the router
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const addUser = async (formData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Send a POST request to the API to add a new user
      const response = await axios.post(url, formData);

      if (response.status === 201) {
        setSubmitSuccess(true);
        router.push("/");
      }
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitError, submitSuccess, addUser };
};

export default useAddUser;
