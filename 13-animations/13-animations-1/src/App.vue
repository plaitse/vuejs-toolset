<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <h2>Single animations</h2>
        <button class="btn btn-primary" @click="show = !show">Show animations</button>
        <br><br>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This info uses a effect</div>
        </transition>
        <!-- We specify a type to tell VueJS to add/remove the element when animation specified is finished
          it could be also type="transition" -->
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-show="show">This info uses a slide effect</div>
        </transition>
        <br><br><hr><br><br>
        <transition
          appear
          enter-class=""
          enter-active-class="animated bounce"
          leave-class=""
          leave-active-class="animated shake">
          <div class="alert alert-info" v-show="!show">This info uses Animation.css</div>
        </transition>
        <br><br><hr><br><br>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <hr>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This info is binded to the select input</div>
        </transition>
        <br><br><hr><br><br>
        <!-- We specify mode to tell VueJS to add/remove one element only after the other remove/added -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="1">Multiple elements transitioning</div>
          <div class="alert alert-warning" v-else key="2">Multiple elements transitioning</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove element</button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <!-- We specify :css="false" to tell VueJS we're not using css so it immediately executes JS hooks -->
          <div style="width:300px;height:100px;background-color:lightgreen;" v-if="load">This load with full JS animation</div>
        </transition>
        <hr>
        <button class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle component</button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <h2>Grouped transitions</h2>
        <button class="btn btn-primary" @click="addItem">Add item</button>
        <!-- <transition> is not rendered to the DOM whereas <transition-group> renders a new HTML tag.
          By default, it'll be a <span> that we can overwrite by setting <transition-group tag="TAG"> -->
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)">{{ number }}</li>
          </transition-group>
        </ul>
        <br><br><br>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert';
import SuccessAlert from './SuccessAlert';
  export default {
    data() {
      return {
        show: false,
        load: true,
        alertAnimation: 'fade',
        elementWidth: 100,
        selectedComponent: 'app-success-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('beforeEnter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterEnter(el) {
        console.log('afterEnter');
      },
      enterCancelled(el) {
        console.log('enterCancelled');
      },
      beforeLeave(el) {
        console.log('beforeLeave');
        this.elementWidth = 290;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log('beforeLeave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('afterLeave');
      },
      leaveCancelled(el) {
        console.log('leaveCancelled');
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1)
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      }
    },
    components: {
      appDangerAlert: DangerAlert,
      appSuccessAlert: SuccessAlert
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
    /* opacity: 1; Default value */
  }
  .fade-leave {
    /* opacity: 1; Default value */
  }
  .fade-leave-active {
    transition: opacity 2s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 2s ease-out forwards;
    transition: opacity 2s;
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out backwards;

    /* For the transition-group,
      to make sure that other elements may move above this element
      while this element is still being animated. */
    position: absolute;
  }
  @keyframes slide-in {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(40px);
      opacity: 0;
      transition: opacity .5s;
    }
  }

  .slide-move {
    transition: transform 1s;
  }
</style>
