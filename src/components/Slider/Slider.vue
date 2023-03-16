<template>
	<div class="slider-wrapper">
		<input
			type="range"
			class="styled-slider slider-progress"
			v-bind="{ ...$attrs }"
			list="values"
			@input="updateInput"
		/>
		<datalist id="values">
			<option
				v-for="(option, index) in options"
				:key="index"
				:value="option.value"
				:label="option.label"
				v-bind="{ ...$attrs }"
			/>
		</datalist>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
		},
	},
	data() {
		return {};
	},
	mounted() {
		for (let e of document.querySelectorAll(
			'input[type="range"].slider-progress'
		)) {
			e.style.setProperty("--value", e.value);
			e.style.setProperty("--min", e.min == "" ? "0" : e.min);
			e.style.setProperty("--max", e.max == "" ? "100" : e.max);
			e.addEventListener("input", () =>
				e.style.setProperty("--value", e.value)
			);
		}
	},
	methods: {
		updateInput($event) {
			this.$emit("input", $event.target.value, $event);
			if ($event.target.value < 1) {
				this.$emit("input", ($event.target.value = 1));
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./Slider.scss";
</style>

<!--
	[사용 예시]

	1. Html
	<Slider :min="min" :max="max" :step="step" :value="value" v-model="value" :options="options" />

	2. Script
	data() {
		return {
			min: 0,
			max: 12,
			step: 4,
			value: 4,
			options: [
				{ id: 0, value: 1, label: '1' },
				{ id: 1, value: 4, label: '4' },
				{ id: 2, value: 8, label: '8' },
				{ id: 3, value: 12, label: '12' },
			],
		}
	}

	3. Etc
	현재 값을 표시해야 할 경우 <p>{{ value }}</p>

	참고 사이트
	toughengineer.github.io/demo/slider-styler/slider-styler.html
-->
