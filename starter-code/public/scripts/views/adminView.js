// DONE: Where is this invoked? Where does it interact elsewhere in the code?
// This is an IIFE so it invokes itself. The only interaction is in article.js when fetching the articles and using them to calculate the number of words per article/per author. It will interact with admin.html when it populates the page.

(function() {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
})();
