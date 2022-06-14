export default {
  template: /*html*/`<h1>Hello World {{Name}}<span>{{ Age }}</span></h1>`,
  props: ['Name', 'Age']
  // props: {
  //   Name: {
  //     type: String
  //   },
  //   Age: {
  //     type: Number,
  //     // default: 0
  //     required: true
  //   }
  // }
}