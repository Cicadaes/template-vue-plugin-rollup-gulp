<template>
  <div class="container">Hello {{text}}!</div>
</template>

<script>
export default {
  name: '{@name@}',
  props: {
    text: String
  },
  data () {
    return {
      //
    }
  }
}
</script>
