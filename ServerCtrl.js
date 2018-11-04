let books = [];
let id = 0;

module.exports = {
  read: (req, res, next) => {
    res.status(200).send(books);
  },

  create: (req, res, next) => {
    const { title, author } = req.body;
    let book = {
      id: id,
      title: title,
      author: author
    };
    books.push(book);
    id++;
    res.status(200).send(books);
  },

  update: (req, res, next) => {
    let { id } = req.params;
    let { title, author } = req.body;

    books[id] = {
      id: books[id],
      title: title,
      author: author
    };
    res.status(200).send(books);
  },

  delete: (req, res, next) => {
    let { id } = req.params;
    books.splice(id, 1);
    res.status(200).send(books);
  }
};
