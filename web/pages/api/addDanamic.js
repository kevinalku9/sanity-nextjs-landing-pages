const fs = require('fs');
export default async function handler(req, res) {
  console.log("teeeeeeeeessssssttttt ", req.body)
  var name = './data/dataJson.json';
  var m = JSON.parse(fs.readFileSync(name).toString());

  var data = [...m.data]

  for(i= 0 ; i<4; i++){
    data.push(req.body)
  }
  data.push(req.body)

  m.data = data

  console.log("test 555", m)
//   m.forEach(function (p) {
//     p.name = m.name;
//   });
  fs.writeFileSync(name, JSON.stringify(m));
  res.status(200).send("test data send")
}