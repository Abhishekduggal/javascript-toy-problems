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
