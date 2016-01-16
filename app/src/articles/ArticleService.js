(function(){
  'use strict';

  angular.module('articleModule')
         .service('articleService', ['$q', ArticleService]);

  function ArticleService($q){
    var articles = [
      {
        name: 'Microservices',
        description: 'The term "Microservice Architecture" has sprung up over the last few years to describe a particular way of designing software applications as suites of independently deployable services. While there is no precise definition of this architectural style, there are certain common characteristics around organization around business capability, automated deployment, intelligence in the endpoints, and decentralized control of languages and data.',
		link : 'http://www.martinfowler.com/articles/microservices.html',
      },
	  {
		name: 'Richardson Maturity Model',
		description: 'A model (developed by Leonard Richardson) that breaks down the principal elements of a REST approach into three steps. These introduce resources, http verbs, and hypermedia controls.',
		link: 'http://martinfowler.com/articles/richardsonMaturityModel.html',
	  }
    ];

    // Promise-based API
    return {
      loadAllArticleItems : function() {
        // Simulate async nature of real remote calls
        return $q.when(articles);
      }
    };
  }

})();
