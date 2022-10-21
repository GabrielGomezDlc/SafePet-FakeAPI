const products = require("./data/products.json");
const most_purchased_products = require("./data/most_purchased_products.json");
const veterinarians_near_you = require("./data/veterinarians_near_you.json");
const clients = require("./data/clients.json");
const checkups = require("./data/checkups.json");
const veterinarians = require("./data/veterinarians.json");
const appointments = require("./data/appointments.json");
const profile = require("./data/profile.json");
const reviews = require("./data/reviews.json");

module.exports = {
  products,
  most_purchased_products,
  veterinarians_near_you,
  clients,
  checkups,
  veterinarians,
  appointments,
  profile,
  reviews

}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
