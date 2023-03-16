<template>
	<div class="bottom-sheet">
		<div class="dimm" aria-hidden="true" />
		<transition name="slide-up" appear>
			<div
				class="pop"
				:password="password"
				:class="{ password: password == true }"
			>
				<div class="title-wrap">
					{{ label }}
				</div>
				<div class="body">
					<div class="contents">
						<slot name="body" />
					</div>
				</div>
				<div v-if="!password" class="footer">
					<slot name="footer" />
				</div>
				<button v-if="!password" class="btn-close" @click="closePop()">
					<img
						inline
						src="@/assets/images/icon_20/close.svg"
						aria-hidden="true"
					/>
					<span class="sr-only">닫기</span>
				</button>
				<button v-if="password" class="btn-close" @click="closePop()">
					<img
						inline
						src="@/assets/images/icon_20/close_white2.svg"
						aria-hidden="true"
					/>
					<span class="sr-only">닫기</span>
				</button>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: "Title",
		},
		password: {
			type: Boolean,
			default: false,
		},
		close: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		closePop() {
			const popup = document.querySelector(".pop");
			popup.classList.add("slide-down");
			setTimeout(() => {
				this.$emit("close");
			}, 300);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./BottomSheet.scss";
</style>
