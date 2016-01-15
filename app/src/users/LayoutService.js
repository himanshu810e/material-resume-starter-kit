(function(){
  'use strict';

  angular.module('layoutModule')
         .service('layoutService', ['$q', LayoutService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function LayoutService($q){
    var menuItems = [
      {
        name: 'About Me',
        avatar: 'svg-1',
		link: '/aboutme',
        content: 'I loved computers from the very beginning. I describe myself as a singer and programmer. I love solving problems.I would like to work for an organisation where working impacts the world in positive way. I have a sharp learning curve and can be an asset in time critical situations.Currently I am working with REST, AngularJS and microservice architecture. In my private time I love to play with MEAN stack and cloud infrastructure to familiarize myself with latest trend in the industry.I stick to clean code practices and I am searching for a challenge!'
      },
      {
        name: 'My experience',
        avatar: 'svg-2',
		link: '/experience',
        content: 'I have more than 6 years of experience as Java developer. In past 7+ years I have worked for small and big corporate companies. I have worked with many different specifications and framework built on top of Java. At the moment I am involved in migration of old java enterprise application to new web 2.0 aligned architecture and frameworks. In my personal time I like to play with MEAN stack and cloud. I would like to work with cutting edge technology at my work as well.I have a steep learning curve which might be helpful in time critical situation. \n\r I am not afraid of new technology and I am always ready for a challenge. '
      },
      {
        name: 'Articles',
        avatar: 'svg-3',
		link: '/articles',
        content: "Not yet started writing articles, but below you can find some really good reads about IT Architecture and best practices."
      },
      {
        name: 'My recent work',
        avatar: 'svg-4',
		link: '/recent',
        content: 'Here you can find my recent tryouts. This place holds the link to things which I take personal interest in my free time.'
      },
      {
        name: 'Contact',
        avatar: 'svg-5',
		link: '/contact',
        content: 'I am reachable through all the channels mentiones below:'
      }
    ];

    // Promise-based API
    return {
      loadAllMenuItems : function() {
        // Simulate async nature of real remote calls
        return $q.when(menuItems);
      }
    };
  }

})();
