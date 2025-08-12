import profiles from "../Data/profiles.js";

export const getallfiles = (req, res) => {
  res.json(profiles);
};

export const getProfileById = (req, res) => {
  const profile = profiles.find(p => p.id === parseInt(req.params.id));
  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }
  res.json(profile);
};
