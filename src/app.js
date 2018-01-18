export class App {
  constructor(){
  this.router = null
  }
  configureRouter(config, router){

    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'no-selection', name: 'Home' , title: 'Home'},
      { route: ['contacts' , 'contacts/:id'],  moduleId: 'contact-list',  name:'contacts', title: 'Kontaktliste'},
      { route:  ['friends', 'friends/:id'] ,  moduleId: 'friend-list', name:'friends', title : 'Freunde' },
      { route:  ['group', 'group/:id'] ,  moduleId: 'group', name:'group', title : 'Gruppen' },
    ]);
    this.router = router;
  }
}
