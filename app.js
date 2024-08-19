require('dotenv').config();
const axios = require('axios');

const query = `
mutation {
  CompanyCreate(
    input: {
        company: {
          name: "Krishna Book Stores",
          "externalId": "01456606-0001",
          customerSince: "2018-08-19T09:26:13Z
        }
    } 
  ) {
    userErrors {
      field
      code
      message
    }
  }
}
`;

axios({
  url: 'https://kl-training-store.myshopify.com/admin/api/2021-07/graphql.json',
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': process.env.KL_TRAINING_STORE_ACCESS_TOKEN
  },
  data: {
    query: query
  }
})
.then((result) => {
  console.log(result.data.data.discountAutomaticBxgyCreate.userErrors);
})
.catch((error) => {
  console.error(error);
});