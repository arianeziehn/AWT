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
  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'no-selection',   title: 'Select'},
      { route: 'contacts',  moduleId: 'contact-list',  name:'contacts'},
      { route: 'contacts/:id',  moduleId: 'contact-detail', name:'contactsDetail' },
      { route: 'friends',  moduleId: 'friend-list', name:'friends' },
      { route: 'friends/:id',  moduleId: 'friend-detail', name:'friendsDetail' }
    ]);

    this.router = router;
  }
}
