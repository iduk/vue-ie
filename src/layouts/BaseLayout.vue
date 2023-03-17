<template>
	<div class="base-layout">
		<!-- appbar -->
		<appbar @toggle="handleMenu" />

		<transition name="menu" appear>
			<Sidebar v-show="showMenu" class="menu" @close="showMenu = false" />
		</transition>

		<main class="main">
			<Transition :name="transitionName" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
				<router-view />
			</Transition>
		</main>

		<!-- tabnav -->
		<tab-nav />
	</div>
</template>

<script>
import Appbar from "@/components/Appbar/Appbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import TabNav from "@/components/TabNav/TabNav.vue";

const DEFAULT_TRANSITION = "";

export default {
	name: "BaseLayout",
	components: {
		Appbar,
		TabNav,
		Sidebar,
	},
	data() {
		return {
			showMenu: false,
			prevHeight: 0,
			transitionName: DEFAULT_TRANSITION,
		};
	},
	created() {
		this.$router.beforeEach((to, from, next) => {
			let transitionName = to.meta.transitionName || from.meta.transitionName;

			if (transitionName === "slide") {
				const toDepth = to.path.split("/").length;
				const fromDepth = from.path.split("/").length;
				transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
			} else if (transitionName === "fade") {
				this.transitionName = transitionName;
			}

			this.transitionName = transitionName || DEFAULT_TRANSITION;

			next();
		});
	},
	methods: {
		handleMenu() {
			this.showMenu = !this.showMenu;
		},
		beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
			element.style.height = height;
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
	},
};
</script>

<style lang="scss" scoped>
@import "./BaseLayout";
</style>
