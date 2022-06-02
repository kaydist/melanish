var contentful = require("contentful");

var client = contentful.createClient({
  space: "vez60okda1xl",
  accessToken: "bQLSKQMBL97Mv-zskM_yOy8JoBAivB1P3sYymAaHODo",
});

export const getAllOptions = () => {
  client.getEntries().then(function (entries) {
    entries.items.forEach(function (entry) {
      if (entry.fields.projectTitle) {
        return entry.fields.projectTitle;
      }
    });
  });
};
