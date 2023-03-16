<template>
  <div>
    <label :for="id + '-yes'">
      <input type="radio"
        id="id + '-yes'"
        :name="name"
        :checked="checked === true"
        @change="$emit('update:checked', true)"
      >
      예
    </label>
    <label :for="id + '-no'">
      <input
        type="radio"
        :id="id + '-no'"
        :name="name"
        :checked="checked === false"
        @change="$emit('update:checked', false)"
      >
      아니오
    </label>
  </div>
</template>

<script>
export default {
  name: 'VueIeMobileButtonToggle',

  props: {
    checked: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>