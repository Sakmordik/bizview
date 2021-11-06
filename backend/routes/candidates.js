import express from "express";
import Candidate from "../models/candidate.model.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Candidate.find()
    .then((candidates) => res.json(candidates))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const fullName = req.body.fullName;
  const gender = req.body.gender;
  const description = req.body.description;

  const newCandidate = new Candidate({ fullName, gender, description });

  newCandidate
    .save()
    .then(() => res.json("Candidate added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

export default router;
