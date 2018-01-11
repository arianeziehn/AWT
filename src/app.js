/*
         
      { route: 'contacts',  moduleId: 'contact-list',  nav: true, name:'contacts'},
      { route: 'contacts/:id',  moduleId: 'contact-detail', name:'contactsDetails' },
      { route: 'friends',  moduleId: 'friend-list',  nav: true, name:'friends' },
      { route: 'friends/:id',  moduleId: 'friend-detail',  nav: true, name:'friendsDetail' }
    ]);
    this.router = router;
  }
}*/
export class App {
  constructor(){
  this.router = null
  }
  configureRouter(config, router){

    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'no-selection', name: 'Home' , title: 'Home'},
      { route: ['contacts' , 'contacts/:id'],  moduleId: 'contact-list',  name:'contacts', title: 'Kontaktliste'},
     // { route: 'contacts/:id',  moduleId: 'contact-detail', name:'contactsDetail' },
      { route:  ['friends', 'friends/:id'] ,  moduleId: 'friend-list', name:'friends', title : 'Freunde' },
     // { route: 'friends/:id',  moduleId: 'friend-detail', name:'friendsDetail' }
    ]);

    this.router = router;
  }
}
