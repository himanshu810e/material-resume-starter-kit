(function(){
  'use strict';

  angular.module('projectModule')
         .service('projectService', ['$q', ProjectService]);

  function ProjectService($q){
    var projects = [
      {
        name: 'Directnet Modularization POC',
        client: 'Credit Suisse AG',
		employer : 'Cognizant Technology Solutions AG',
		duration : '07 2015-Today',
        description: 'As of now Credit Suisse online banking is one really big application with quarterly deployment cycle. With the rise of mobile/tablet banking the release cycle is too long and heavy to cope with existing competition in market. The idea is to employ microservice architecture to modularize one big application into fine grained group of applications which can work stand alone and hence enables more agile deployments. The proof of concept also targets the migration of existing struts code to angular based SPAs.',
		contribution : 'My job in this project is to find the possible challenges of breaking a big monolith application into microservices. Analyse each challenges carefully and suggest an elegant way which can make the migration in incremental way with maximum code reusability. I am responsible for high-medium level technical design of new microservice oriented architecture and FAAS (Framework As A Service) to enable the smooth transition from monolith application to smaller and easily manageable services.',
		technologies : 'HTML5, ReST, Java, J2EE, Struts, Coherence, Web entry server, Require js, Angular JS'
      },
      {
        name: 'CS Invest',
        client: 'Credit Suisse AG',
		employer : 'Cognizant Technology Solutions AG',
		duration : '04 2015 to 06 2015',
        description: 'CS Invest is the new banking package by Credit Suisse AG which enable the customer toview/receive updates/prediction on its current market portfolio.',
		contribution : 'Design restful services for the widgets related to investment in online banking. Write directives for UI components. Suggest better logging in case of a third party restful calls.',
		technologies : 'HTML5, REST, JAVA, J2EE, Angular js, Bootstrap'
      },
      {
        name: 'Architectural Simplification',
        client: 'Credit Suisse AG',
		employer : 'Cognizant Technology Solutions India',
		duration : '03 2014 to 09 2014',
        description: 'Architectural simplification is a program to migrate the existing platform for applicationdevelopment to new frameworks in market. This project was targeted for the presentation and business layer components of web applications, mobile applications of Credit Suisse bank.',
		contribution: 'Evaluate various frameworks for restful service built in java and select which technology stack will be the best to use for client. Design the wrapper framework as per the enterprise needs of the current application.',
		technologies : 'HTML5, REST, JAVA, J2EE, Struts, Freemarker, Jersey, Angular js'
      },
      {
        name: 'Highly Secure Application',
        client: 'Credit Suisse AG',
		employer : 'Cognizant Technology Solutions India',
		duration : '02 2012 to 02 2014',
        description: 'Highly Secure Applications is a program which is responsible for developing and maintaining the applications which process and provides the secure mechanism to access sensitive data such as Client Identifying Data, sensitive documents, etc. This program comprises of more than 5 projects mainly used by Front Office to store the data of partners and also by Legal & Compliance. Also management of customer related documents (i.e. formalities) are managed with this application. This program also includes reporting application which requires a big amount of data processing.',
		contribution : 'Refactoring, 3rd level support, writing services, enhancing security of application, change requests accross all layers',
		technologies : 'JSF, EJB, Camel, LDAP, Weblogic, Servlet, Java, Profiling, Centera'
      },
      {
        name: 'Activity Management',
        client: 'Credit Suisse AG',
		employer : 'Cognizant Technology Solutions India',
		duration : '10 2011 to 02 2012',
        description: 'Activity Management is a Global Front Solution (GFS) Business component that provides ClientRelationship Management (CRM) functionalities.The Activity Management GFS was developed as part of Activity Management Wave 1 and will be provided to selected regions (e.g. USA and C&IC on SBIP) to support the client facing staff.',
		contribution : 'Wrote composite components in JSF for global and local components of the application.',
		technologies : 'JAVA, J2EE, JSF 2.0, AJAX'
      },
      {
        name: 'Online Banking Administrative System OBAS',
        client: 'Credit Suisse AG',
		employer : 'Cognizant Technology Solutions India',
		duration : '09 2009 to 09 2011',
        description: 'Online Banking Administration System (OBAS) is the portal which will be used by the Hotline users and Relationship Managers. It will be the single point of entry into administration tool to manage contracts and user credentials.',
		contribution: 'Wokred primarily as JSF developer. In later phase took over EJB and CORBA services',
		technologies : 'JAVA, J2EE, CSJSF, JSF, CORBA'
      }
    ];

    // Promise-based API
    return {
      loadAllProjectItems : function() {
        // Simulate async nature of real remote calls
        return $q.when(projects);
      }
    };
  }

})();
