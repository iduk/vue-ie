<template>
    <!-- emit의 'input'은 부모 컴포넌트의 v-model 값의 변동을 전달하는 코드 -->
    <button @click="$emit('input', keyValue)" :class="['tab', active]">
        <span>{{ textLabel }}</span>
    </button>
</template>
  
<script>
export default {
    props: {
        // TabItem 컴포넌트에서 사용할 Props
        keyValue: Number,
        textLabel: String,

        // value 는 부모 컴포넌트의 v-model 의 변경된 값
        value: Number
    },
    computed: {
        active() {
            return this.value === this.keyValue ? 'active' : false
        }
    }
}
</script>
  
<style scoped>
.tab {
    border-radius: 2px 2px 0 0;
    background: #fff;
    color: #311d0a;
    line-height: 24px;

    /* Tab Item Width */
    flex-basis: 22%;
    flex-shrink: 0;
    flex-grow: 0;
}
.tab:hover {
    background: #eeeeee;
}
.active {
    background: #f7c9c9;
}

</style>