import axios from "axios";
const Instance = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  // timeout: 1000,
  headers: {
    Authorization:
      "Bearer mlDrdNVE1dMnzbWwHFNKF4KqXBqZ-AxX00-ppNCv1YCrG4jyvh95rlhXMDGiV5-Us0wE6B5XDPzUbI4W7gVKwoqY8_LrYJak6djZo-pb1uksQNw1jAGTWX3cq2wzYXYx",
  },
});
export default Instance;
