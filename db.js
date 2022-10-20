const treatments_by_patient = require("./data/treatments_by_patient.json");
const treatments = require("./data/treatments.json");
const physiotherapists = require("./data/physiotherapists.json");
const reviews = require("./data/reviews.json");
const patients = require("./data/patients.json");
const appointments = require("./data/appointments.json");
const medical_histories = require("./data/medical-histories.json");
const users = require("./data/users.json");



module.exports = {
  treatments_by_patient,
  treatments,
  physiotherapists,
  reviews,
  patients,
  appointments,
  medical_histories,
  users
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
