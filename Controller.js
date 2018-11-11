let arrMessages = [];
let id = 0;

module.exports = {
  create: (req, res, next) => {
    let { text, time } = req.body;
    arrMessages.push({
      id: id,
      text: text,
      time: time
    });
    id++;

    res.status(200).send(arrMessages);
  },

  read: (req, res, next) => {
    // res.send(arrMessages);
    res.status(200).send(arrMessages);
  },

  update: (req, res, next) => {
    const { text } = req.body;
    const { id } = req.params;
    //console.log(updateID);

    const messageID = arrMessages.findIndex(message => message.id == id);
    console.log(messageID);
    console.log(text);
    let newMessage = arrMessages[messageID];

    arrMessages[messageID] = {
      id: newMessage.id,
      text: text || newMessage.text,
      time: newMessage.time
    };
    console.log(newMessage);
    res.status(200).send(arrMessages);
  },
  delete: (req, res, next) => {
    const deleteID = req.params.id;
    const messageInd = arrMessages.findIndex(
      message => message.id === parseInt(deleteID)
    );
    arrMessages.splice(messageInd, 1);
    //arrMessages.splice(parseInt(deleteID), 1);
    res.status(200).send(arrMessages);
  }
};

const axios = require("axios");

const youtubesearch = (req, res, next) => {
  //   let data = [];

  const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=qualitytraining&type=video&key=${
    process.env.YOUTUBE_KEY
  }`;

  axios
    .get(baseUrl)
    .then(response => {
      // console.log(response.data.items);
      res.status(200).send(response.data.items);
      //   data = res.data.items;
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  youtubesearch
};

const createSpec = (req, res, next) => {
  let {
    productid,
    temp,
    productspeed,
    productdensity,
    rejects,
    waterpressure,
    drylevel,
    machinespeed
  } = req.body;

  const db = req.app.get("db");
  db.specifications
    .create_spec([
      productid,
      parseInt(temp, 10),
      parseInt(productspeed, 10),
      parseInt(productdensity, 10),
      parseInt(rejects, 10),
      parseInt(waterpressure, 10),
      parseFloat(drylevel).toFixed(2),
      parseInt(machinespeed, 10)
    ])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
