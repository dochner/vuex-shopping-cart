<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const myTopNav = ref(null)

    function responsiveNav () {
      let className = myTopNav.value
      if (className === 'topnav') {
        className += ' responsive'
      } else {
        className = 'topnav'
      }
    }

    return { myTopNav, responsiveNav }
  }
})
</script>
<template lang="pug">
div(ref="myTopNav").topnav
  div(class="navbar-items")
    a.active(href="#home") Home
    a(href="/products") Products
    a(href="/cart") Cart
    a.icon(href="javascript:void(0);" onclick="responsiveNav()")
      i.fa.fa-bars
</template>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

.navbar-items {
  margin-left: auto;
}
</style>
