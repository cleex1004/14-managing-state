'use strict';

page('/', articleController.loadAll, articleController.index);
page('/about', aboutController.index);
page('/article/:article_id', articleController.loadById, articleController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');

page('/author/:authorName', articleController.loadByAuthor, articleController.index);
page('/category/:categoryName', articleController.loadByCategory, articleController.index);

// DONE: What does this do? Is it necessary?
// This line of code is what invokes the page.js middleware to allows us to have a true single page application and control the functionality and views of our app. It is what makes page.js middleware work so yes, it is necessary.
page();
