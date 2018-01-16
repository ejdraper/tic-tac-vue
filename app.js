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
        let rows = this.rows;
        rows[e.target.attributes['data-row'].value][e.target.attributes['data-column'].value] = this.next;
        this.rows = rows.slice(0);
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