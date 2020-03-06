export const helloMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin! %o',this.$store.state)
    }
  }
}
