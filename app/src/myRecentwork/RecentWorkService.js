(function(){
  'use strict';

  angular.module('recentWorkModule')
         .service('recentWorkService', ['$q', RecentWorkService]);

  function RecentWorkService($q){
    var recentWorks = [
      {
        name: 'My github personal page built with Angular Material',
        description: 'This is my personal page which contains information about me, my projects and other technologies I am working with. I designed it with angular matarial. Angular Material is the reference implementation of Google\'s Material Design Specification. This project provides a set of reusable, well-tested, and accessible UI components based on Material Design.',
		link : 'http://himanshu810e.github.io/',
		status : 'Frequently updated',
		technologies : 'html5,angular material,angular js'
      },
	  {
		name: 'LGBT Stars',
		description: 'A rating app to report the behaviour (from paradise to lethal) towards people who belong to LGBT and similar group for a given place using google maps.',
		link: 'https://github.com/himanshu810e/LGBTStars',
		status: 'Ongoing',
		technologies: 'MEAN stack, google cloud, google maps, geojson'
	  }
    ];

    // Promise-based API
    return {
      loadAllRecentWorkItems : function() {
        // Simulate async nature of real remote calls
        return $q.when(recentWorks);
      }
    };
  }

})();
