'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE: What value is in 'module'? What is the purpose of this line of code?
  // Module is the parameter, this line of code makes the aboutController accessible to the window/browser
  module.aboutController = aboutController;

})(window);
