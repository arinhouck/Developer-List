import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['three', 'columns'],
  selected: false,
  parent: null,

  camelizedName: function() {
    return Ember.String.camelize(this.get('item.name'));
  }.property('item.name'),

  drunkEmber: function() {
    return this.get('parent.drunk') && this.get('item.name') === "Ember";
  }.property('parent.drunk'),

  checkDrunk: function() {
    if (this.get('item.name') === "Craft Beer") {
      this.toggleProperty('parent.drunk', true);
    }
  }.observes('selected'),

  actions: {
    selectItem: function() {
      this.toggleProperty('selected');
    }
  }

});
