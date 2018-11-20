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

module.exports = {
  readSpecs,
  createProduct,
  createSpec
};

// Email Controller

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.G_EMAIL,
    pass: process.env.G_PASS
  }
});

const emailForm = (req, res, next) => {
  console.log(req.body);
  const { issuecategory, trainingcategory, sendemail } = req.body;
  //   console.log(sendemail);
  const mailOptions = {
    from: process.env.G_EMAIL,
    to: sendemail,
    subject: "QA Audit Form Complete",
    html: `<div>
        A new Form has been created! The main issue was
        identified by ${issuecategory} and training was requested based on ${trainingcategory}.
      </div>`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
  });
  res.status(200).json("Email Sent to the manager");
};

module.exports = {
  emailForm
};

// Many Data type conversions practice

const db = req.app.get("db");
// console.log(req.body);
db.forms
  .create_form([
    machinetype,
    shift,
    parseInt(shopordernumber, 10),
    parseInt(productid, 10),
    workstation,
    parseInt(temp, 10),
    parseInt(productspeed, 10),
    parseInt(hrid, 10),
    parseInt(productdensity, 10),
    parseInt(rejects),
    parseInt(waterpressure),
    parseFloat(drylevel).toFixed(2),
    issuelog,
    Boolean(machineoperating),
    comments,
    issuecategory,
    issueresolution,
    Boolean(packagingissue),
    Boolean(training),
    trainingcategory,
    imgurl
  ])
  .then(response => {
    res.status(200).send(response);
  })
  .catch(err => {
    // console.log(err);
    res.status(500).send(err);
  });

// Making an axios call to an API instead of using front end to make the call.

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

// Consistent read from the database

const readRejects = (req, res, next) => {
  const db = req.app.get("db");
  db.charts
    .get_rejects()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const readHrUsersFacility = (req, res, next) => {
  const db = req.app.get("db");
  db.charts
    .get_hrUsers_facility()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  readRejects,
  readHrUsersFacility
};

// Chatting Software test......

const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", function(client) {
  const {
    handleRegister,
    handleJoin,
    handleLeave,
    handleMessage,
    handleGetChatrooms,
    handleGetAvailableUsers,
    handleDisconnect
  } = makeHandlers(client, clientManager, chatroomManager);

  client.on("register", handleRegister);

  client.on("join", handleJoin);

  client.on("leave", handleLeave);

  client.on("message", handleMessage);

  client.on("chatrooms", handleGetChatrooms);

  client.on("avaialableUsers", handleGetAvailableUsers);

  client.on("disconnect", function() {
    console.log("client disconnect...", client.id);
    handleDisconnect();
  });

  client.on("error", function() {
    console.log("received error from client:", client.id);
    console.log(err);
  });
});

server.listen(3000, function(err) {
  if (err) throw err;
  console.log(`listening on port 3000`);
});

module.exports = {
  io
};

// Charts controller

const readRejects = (req, res, next) => {
  const db = req.app.get("db");
  db.charts
    .get_rejects()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const readHrUsersFacility = (req, res, next) => {
  const db = req.app.get("db");
  db.charts
    .get_hrUsers_facility()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  readRejects,
  readHrUsersFacility
};
