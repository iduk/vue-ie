<template>
	<div class="tooltip-wrap">
		<v-popover
			:placement="position"
			:boundaries-element="boundariesElement"
			:open="open"
			:handle-resize="handleResize"
			:container="container"
		>
			<div class="label-wrap">
				<slot name="label" />
			</div>
			<template slot="popover">
				<div
					class="content"
					:class="[{ close: close == true }, { error: error == true }]"
				>
					<div class="arrow" aria-hidden="true" />
					<slot name="popover" />
					<button v-close-popover class="btn-close">
						<span class="sr-only">닫기</span>
					</button>
				</div>
			</template>
		</v-popover>
	</div>
</template>

<script>
import VTooltip from "v-tooltip";
import Vue from "vue";

Vue.use(VTooltip);

export default {
	props: {
		open: Boolean,
		close: Boolean,
		error: Boolean,
	},
	data() {
		return {
			position: "auto-start",
			boundariesElement: ".label-wrap",
			handleResize: true,
			container: ".label-wrap",
		};
	},
};
</script>

<style lang="scss" scoped>
@import "./Tooltip.scss";
</style>
