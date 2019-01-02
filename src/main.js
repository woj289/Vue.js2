import Vue from "vue";

Vue.config.productionTip = false;

const NewComponent = {
  name: "NewComponent",
  data() {
    return {
      myColor: {
        color: "#fab"
      }
    };
  },
  template: `
    <div>
    <h2 :style="myColor">Best IT vlog in YT</h2>
    <label for="color">Change color </lable>
    <input name="color" id="color" v-model='myColor.color' />
    </div>
  `
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    NewComponent
  },
  data: {
    name: "Wojtek",
    mycolor: {
      color: "#fab"
    }
  },
  methods: {
    handleClick() {
      alert("Pierwszy alercik");
    }
  },
  template: `
          <div>
            <h1 :style='mycolor'>Hello {{ name }}</h1>
            <NewComponent/>
            <button @click="handleClick">Hello</button>
          </div>
           `
});
