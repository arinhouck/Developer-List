import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const list = [
      { name: 'Nintendo 64',          image: 'n64.png' },
      { name: 'Craft Beer',           image: 'beer.png' },
      { name: 'Coffee',               image: 'coffee.jpg' },
      { name: 'Stand-up Desk',        image: 'stand-up-desk.jpg' },
      { name: '5K Apple Monitor',     image: '5k-monitor.jpg' },
      { name: 'Ember',                image: 'ember.png' },
      { name: 'Rails',                image: 'ruby.png' },
      { name: 'Macbook Pro',          image: 'macbook-pro.jpg' }
    ];
    const items = [];

    for (let i = 0 ; i < list.length; i++) {

      const item = this.store.createRecord('item', {
        id: (i+1),
        name: list[i].name,
        imageUrl: list[i].image
      });

      items.push(item);
    }
    return items;
  }
});
