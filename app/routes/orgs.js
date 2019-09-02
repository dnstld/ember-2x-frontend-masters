import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  favorites: service(),

  setupController() {
    this._super(...arguments);
  },
  model() {
    return [
      {
        id: 'emberjs'
      },
      {
        id: 'ember-cli'
      },
      {
        id: 'microsoft'
      },
      {
        id: 'yahoo'
      },
      {
        id: 'netflix'
      },
      {
        id: 'facebook'
      }
    ];
  },
  actions: {
    favoriteClicked(org) {
      this.get('favorites').favoriteItem(org);
    }
  }
});
