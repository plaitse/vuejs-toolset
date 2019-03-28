<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
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
        <!-- We specify mode to tell VueJS to add/remove one element after the other remove/added -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="1">Multiple elements transitioning</div>
          <div class="alert alert-warning" v-else key="2">Multiple elements transitioning</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        alertAnimation: 'fade'
      }
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
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out backwards;
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
</style>
