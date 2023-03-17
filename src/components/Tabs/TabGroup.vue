<template>
	<div class="tabGroupRoot">
		<div class="tabs">
			<TabItem
				v-for="aTabData in tabData"
				v-bind="aTabData"
				:key="aTabData.keyValue"
				v-model="selectedTabID"
				@click.native="onItemClick"
			/>
		</div>
		<div class="contents">
			<transition>
				<section :key="selectedTabID" class="item">
					<!-- Dynamic Loader -->
					<!-- <component :is="componentLoader" /> -->
				</section>
			</transition>
		</div>
	</div>
</template>

<script>
import TabItem from "./TabItem.vue";
export default {
	name: "TabGroup",
	components: { TabItem },
	data() {
		return {
			selectedTabID: 1,
			tabData: [
				{ keyValue: 1, textLabel: "Tab1" },
				{ keyValue: 2, textLabel: "Tab2" },
				{ keyValue: 3, textLabel: "Tab3" },
				{
					keyValue: 4,
					textLabel: "Tab4",
				},
				{ keyValue: 5, textLabel: "Tab5" },
				{
					keyValue: 6,
					textLabel: "Tab6",
				},
				{ keyValue: 7, textLabel: "Tab7" },
				{
					keyValue: 8,
					textLabel: "Tab8",
				},
				{ keyValue: 9, textLabel: "Tab9" },
			],
		};
	},
	computed: {
		current() {
			return (
				this.tabData.find((el) => el.keyValue === this.selectedTabID) || {}
			);
		},
		// componentLoader() {
		// 	// Do Not Remove Below Assignment - for Ignoring Computed Cache Problem
		// 	const tab = this.tabData.find((el) => el.keyValue === this.selectedTabID);
		// 	return tab
		// 		? () => import(`./${tab.componentName}.vue`)
		// 		: alert(`No Component Found ${this.selectedTabID} \\ ${tab}`);
		// },
	},
	methods: {
		onItemClick() {
			const tabIndex = this.tabData.findIndex(
				(el) => el.keyValue == this.selectedTabID
			);
			return tabIndex === -1
				? null
				: this.$children[tabIndex].$el.scrollIntoView({
						behavior: "smooth",
						block: "neareast",
						inline: "center",
				  });
		},
	},
};
</script>

<style scoped>
.tabs {
	width: 100%;
	display: flex;

	/* Overflow Handling */
	overflow-x: scroll;
}

.contents {
	width: 100%;
	position: relative;
	overflow: hidden;
	border: 2px solid #000;
}

.item {
	box-sizing: border-box;
	padding: 10px;
	transition: all 0.8s ease;
}

/* Transitions */
.v-leave-active {
	position: absolute;
}
.v-enter {
	transform: translateX(-100%);
}
.v-leave-to {
	transform: translateX(100%);
}
</style>
