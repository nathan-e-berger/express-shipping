"use strict";
const BASE_URL = "http://localhost:3001/ship";

const fetchMock = require("fetch-mock");

const {
  shipProduct,
} = require("./shipItApi");


test("shipProduct", async function () {
  fetchMock.post(BASE_URL, {
      "receipt": {
       "name": "Test Tester",
       "addr": "100 Test St",
       "zip": "12345-6789",
       "shipId": 12309
     },
     status: 200
  })

  const shipId = await shipProduct({
    productId: 1000,
    name: "Test Tester",
    addr: "100 Test St",
    zip: "12345-6789",
  });

  console.log("shipId", shipId);

  expect(shipId).toEqual(12309);
});


