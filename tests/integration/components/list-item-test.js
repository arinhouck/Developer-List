import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('list-item', 'Integration | Component | list item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  const item = Ember.Object.extend({
    name: Ember.computed(() => 'Test'),
    imageUrl: Ember.computed(() => 'test.png'),
  }).create();

  this.set('item', item);

  this.render(hbs`{{list-item item=item}}`);

  assert.equal(this.$('h5').text().trim(), 'Test');
  assert.equal(this.$('img').attr('src'), '/assets/images/test.png');
});

test('it renders drunk Ember', function(assert) {
  assert.expect(1);

  const item = Ember.Object.extend({
    name: Ember.computed(() => 'Ember'),
    imageUrl: Ember.computed(() => 'ember.png')
  }).create();

  this.set('item', item);
  this.set('drunk', true);

  this.render(hbs`{{list-item item=item parent=this}}`);

  assert.equal(this.$('img').attr('src'), '/assets/images/drunk-ember.png');
});
