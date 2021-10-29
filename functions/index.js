//https://github.com/stripe-samples/subscription-use-cases/blob/master/fixed-price-subscriptions/server/node/server.js Github repository
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JkCwyB2i1AudsHyUW9iPx8qsk0Dwn2AhJwnv8G43IdR7a4fX2oZpngLMTbFi3MheV8wUvSY1uC41qpcPlF3T0JD00MzX2MRjK");

const app = express();

//Defaults
const defaultCurrency = "usd";

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
      currency: defaultCurrency,
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

app.post("/subscribtion/create", async (req, res) => {
  try {
    const { amount, payment_method } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      address: billing,
      amount,
      currency: defaultCurrency,
    });

    res 
        .status(200)
        .send(paymentIntent.client_secret);
  } catch (error) {
    res
        .status(500)
        .json({
          statusCode: 500,
          message: error.message
        });
  }
});

app.post('/create-subscription', async (req, res) => {
  // Simulate authenticated user. In practice this will be the
  // Stripe Customer ID related to the authenticated user.
  const customerId = req.cookies['customer'];

  // Create the subscription
  const priceId = req.body.priceId;

  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{
        price: priceId,
      }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    res.send({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
});

app.get("*", (req, res) => {
  res
      .status(404)
      .send("404, Not Found.");
});

exports.api = functions.https.onRequest(app);
