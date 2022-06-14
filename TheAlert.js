export default {
  props: ['Name'],
  template: '<li>{{ Name }} <button @click="clickMe">按我</button></li>',
  methods: {
    clickMe() {
      this.$emit('clickme2')
      // alert(this.Name)
    }
  }
}