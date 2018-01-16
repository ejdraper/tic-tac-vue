var Grid = Vue.component('grid', {
  template: '#grid',
  data: function() {
    return {
      rows: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      next: 'x',
      finished: false
    };
  },
  methods: {
    tap: function(e) {
      if (!this.finished && e.target.innerText == '') {
        let rows = this.rows;
        rows[e.target.attributes['data-row'].value][e.target.attributes['data-column'].value] = this.next;
        this.rows = rows.slice(0);

        if (this.checkWinner()) {
          this.finished = true
        } else {
          this.nextPlayer();
        }
      }
    },
    restart: function(e) {
      this.rows = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      this.finished = false;
      this.nextPlayer();
    },
    nextPlayer: function() {
      this.next = (this.next == 'x' ? 'o' : 'x');
    },
    checkWinner: function() {
      return (
        this.checkValues(this.rows[0]) ||
        this.checkValues(this.rows[1]) ||
        this.checkValues(this.rows[2]) ||
        this.checkValues([this.rows[0][0], this.rows[1][0], this.rows[2][0]]) ||
        this.checkValues([this.rows[0][1], this.rows[1][1], this.rows[2][1]]) ||
        this.checkValues([this.rows[0][2], this.rows[1][2], this.rows[2][2]]) ||
        this.checkValues([this.rows[0][0], this.rows[1][1], this.rows[2][2]]) ||
        this.checkValues([this.rows[0][2], this.rows[1][1], this.rows[2][0]]));
    },
    checkValues: function(values) {
      return (values[0] != '' && values[1] != '' && values[2] != '' && (values[0] === values[1]) && (values[1] === values[2]));
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