<script>
import { mapActions } from 'vuex'
export default {
  name: 'CartListItem',
  props: {
    cartItem: {
      type: Object,
      required: false,
      default: () => {
        return {
          description: 'Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!',
          id: 2,
          image_tag: 'diesel-engine.png',
          price: 650.9,
          quantity: 1,
          title: 'MIKANO Engine'
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem'
    ])
  }
}
</script>

<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{cartItem.title}}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{cartItem.price}} X {{cartItem.quantity}}
        </span>

        <span>
          <i class="fa fa-arrow-circle-up cart-item__modify" @click="addCartItem(cartItem)"></i>
          <i class="fa fa-arrow-circle-down cart-item__modify" @click="removeCartItem(cartItem)"></i>
        </span>
      </div>

    </div>
  </div>
</template>
