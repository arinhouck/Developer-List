import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import makeDeveloperItems from '../../helpers/make-developer-items';

moduleForComponent('developer-list', 'Integration | Component | developer list', {
  integration: true
});

test('it renders title', function(assert) {
  assert.expect(1);

  this.render(hbs`{{developer-list}}`);

  // Assert title exists
  assert.equal(this.$('h2').text(), "Developer's Hipster's List");

});

test('it renders all list items', function(assert) {
  assert.expect(1);

  this.set('model', makeDeveloperItems());
  this.render(hbs`{{developer-list model=model}}`);

  // Assert title exists
  assert.equal(this.$('.list-panel').length, 8);

});

test('it can set drunk true from craft beer', function(assert) {
  assert.expect(1);

  this.set('model', makeDeveloperItems());
  this.set('drunk', false);
  this.render(hbs`{{developer-list model=model drunk=drunk}}`);

  this.$('#craftBeer').click();

  assert.equal(this.get('drunk'), true);
});
