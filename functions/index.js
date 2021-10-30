const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JkCwyB2i1AudsHyUW9iPx8qsk0Dwn2AhJwnv8G43IdR7a4fX2oZpngLMTbFi3MheV8wUvSY1uC41qpcPlF3T0JD00MzX2MRjK");

const app = express();

app.use(cors({
  origin: true,
}));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  try {
    const {amount, billing} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      adress: billing,
      amount,
      currency: "usd",
    });

    res
        .status(200)
        .send(paymentIntent.client_secret);
  } catch (error) {
    res
        .status(500)
        .json({
          statusCode: 500,
          message: error.message,
        });
  }
});

app.post("/subscription/create", async (req, res) => {

});

app.get("*", (req, res) => {
  res
      .status(404)
      .send("404, Not Found.");
});

exports.api = functions.https.onRequest(app);
