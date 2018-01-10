var Grid = Vue.component('grid', {
  template: '#grid',
  data: function() {
    return {
      rows: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    };
  }
});

var App = new Vue({
  el: '#app',
  components: {
    Grid
  },
  render: function(createElement) {
    return createElement(Grid);
  }
});