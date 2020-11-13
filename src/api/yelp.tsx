import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DaKFbA2f2unF1y6Nj3sxIOH_h99dtPDCpHpts3HkmRsRNtX-KyiwiGsp0IdypneBTgnNK1UmMYGDb4OSLwHrG4xCCLs6HFbBHD86bN5NRMwrCIlRYVOrm_-e_EmcX3Yx",
  },
});
