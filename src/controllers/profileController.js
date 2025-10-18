import { fetchCatFact} from '../services/catFactApi.js';
export const getProfile = async (req, res) => {
  try {
    const catFact = await fetchCatFact();
    const response = {
      status: "success",
      user: {
        email: process.env.USER_EMAIL,
        name: process.env.USER_NAME,
        stack: process.env.USER_STACK
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };
    return res.status(200).json(response);
  } catch (error) {
    console.log(error, "error fetching profile");
    return res.status(500).json({ status: "error", message: "failed to fetch profile" });
  }
};


