<!-- tab 갯수 최대 4개까지 -->
<template>
	<div class="tabs-wrapper">
		<ul class="tabs">
			<li
				v-for="tab in tablist"
				:key="tab.id"
				role="tablist"
				:aria-labelledby="tab.id"
				:class="`tab-item ${selectedTab === tab.id ? 'active' : ''}`"
				@click="selectedTab = tab.id"
			>
				<button
					:id="tab.id"
					role="tab"
					:aria-selected="true"
					:aria-controls="tab.id"
				>
					<span class="focus">{{ tab.title }}</span>
					<!-- 갯수 2개일때만 badge -->
					<span
						v-if="tab.badge && tablist.length <= 2"
						class="badge"
					>
						{{ tab.badge }}
					</span>
				</button>
			</li>

			<!-- <div v-if="selectedTab === tab.id">
				<slot></slot>
			</div> -->
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tablist: [
				{ id: 1, title: "전체", badge: 23 },
				{ id: 2, title: "입출금" },
				// { id: 3, title: "예적금" },
				// { id: 4, title: "대출" },
				// { id: 5, title: "출자금" },
				// { id: 6, title: "거래정지/휴면" },
				// { id: 7, title: "해지" },
			],
			selectedTab: 1,
			moveScroll: false,
		};
	},

	methods: {
		// 스크롤 감지 추가해야댐
		handleTouch() {
			this.moveScroll = !this.moveScroll;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./FixedTabs.scss";
</style>
