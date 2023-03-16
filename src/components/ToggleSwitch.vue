<template>
	<div class="toggle-control">
		<label>
			<input
				type="checkbox"
				:disabled="disabled"
				@click="toggle"
			>
			<span class="control" />
		</label>
		<p>
			{{ label }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		checked: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: "",
		},
		id: {
			type: String,
			default: "a",
		},
	},
	data() {
		return {
			// checked: false,
		};
	},
	methods: {
		toggle() {
			// this.checked = !this.checked;
			this.$emit("toggle", this.checked);
		},
	},
};
</script>
