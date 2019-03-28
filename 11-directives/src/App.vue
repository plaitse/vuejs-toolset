<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <h2>Global</h2>
        <!-- <p v-highlight>Color this simply</p> -->
        <!-- <p v-highlight="'orangered'">Color this with value</p> -->
        <p v-highlight:background="'orangered'">Background color this with parameter and value</p>
        <p v-highlight="'orangered'">Color this with value only</p>
        <p v-highlight:background.delayed="'orangered'">Background color this with parameter and modifier and value</p>
        <h2>Local</h2>
        <p v-local-highlight:background.delayed="'purple'">Background color this with parameter and modifier and value</p>
        <p v-local-highlight:background.delayed.blink="'orangered'">Background color this with parameter and multiple modifiers and value</p>
        <p v-local-highlight-complex:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Background color this with parameter and multiple complex modifiers and value</p>
        <h2>Remake v-on</h2>
          <button v-customOn:click="clicked" class="btn btn-primary">Click Me</button>
          <hr>
          <div
            style="width: 100px; height: 100px; background-color: lightgreen"
            v-customOn:mouseenter="mouseEnter"
            v-customOn:mouseleave="mouseLeave"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          vnode; // To remove error
          let delay = 0;
          if (binding.modifiers['delayed']) delay = 1000;
          if (binding.modifiers['blink']) {
            let mainColor = binding.value;
            let secondColor = 'blue';
            let currentColor = mainColor;
            setTimeout(() => {
              // setInterval(() => {
                currentColor = currentColor == secondColor ? mainColor : secondColor;
                binding.arg == 'background' ? el.style.backgroundColor = currentColor : el.style.color = currentColor;
              // }, 1000);
            }, delay);
          } else {
            setTimeout(() => {
              binding.arg == 'background' ? el.style.backgroundColor = binding.value : el.style.color = binding.value;
            }, delay);
          }
        }
      },
      'local-highlight-complex': {
        bind(el, binding, vnode) {
          vnode; // To remove error
          let delay = 0;
          if (binding.modifiers['delayed']) delay = 1000;
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              // setInterval(() => {
                currentColor = currentColor == secondColor ? mainColor : secondColor;
                binding.arg == 'background' ? el.style.backgroundColor = currentColor : el.style.color = currentColor;
              // }, binding.value.delay);
            }, delay);
          } else {
            setTimeout(() => {
              binding.arg == 'background' ? el.style.backgroundColor = binding.value.mainColor : el.style.color = binding.value.mainColor;
            }, delay);
          }
        }
      },
      customOn: {
        bind(el, binding) {
//        el.onclick = function() {
//          binding.value();
//        }
          const type = binding.arg;
          const fn = binding.value;
          el.addEventListener(type, fn);
        }
      },
      methods: {
        clicked() {
          alert('I was clicked!');
        },
        mouseEnter() {
          console.log('Mouse entered!');
        },
        mouseLeave() {
          console.log('Mouse leaved!');
        }
      }
    }
  }
</script>

<style>

</style>
