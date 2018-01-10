var Grid = Vue.component('grid', {
  template: '#grid',
  data: function() {
    return {
      rows: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      next: 'x'
    };
  },
  methods: {
    tap: function(e) {
      if (e.target.innerText == '') {
        e.target.innerText = this.next;
        this.next = (this.next == 'x' ? 'o' : 'x');
      }
    }
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