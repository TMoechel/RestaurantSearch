import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pizza");
  }, []);

  const searchApi = async (value: string) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: value,
          location: "frankfurt",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error happened!");
    }
  };

  return [searchApi, results, errorMessage] as const;
  // as const is required not to throw an exception
  // This expression is not callable.
  // Not all constituents of type 'string | ((value: string) => Promise<void>) | never[]' are callable.
  // Type 'string' has no call signatures
  // https://stackoverflow.com/questions/58745576/how-to-type-custom-react-hooks-that-are-created-in-js-and-used-in-a-tsx-file
};
