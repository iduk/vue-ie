<template>
	<button :class="['tab', active]" @click="$emit('input', keyValue)">
		{{ textLabel }}
	</button>
</template>

<script>
export default {
	props: {
		keyValue: Number,
		textLabel: String,
		value: Number,
	},
	computed: {
		active() {
			return this.value === this.keyValue ? "active" : false;
		},
	},
};
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
