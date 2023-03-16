<template>
	<div v-if="activeTab" role="tabpanel">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		label: String,
		title: String,
	},
	data() {
		return {
			activeTab: false,
		};
	},
	mounted() {
		this.activeTab = this.selectedTab;
	},
};
</script>

<style lang="scss">
.tab-wrap {
	width: 100%;
}
.tab-btn {
	position: relative;
}
.tab {
	position: relative;
	display: block;
	text-align: center;
	width: 100%;
	height: 52px;
	padding: 1rem;
	font-size: 16px;
	font-weight: 600;
	color: #70747e;
	border-top: 1px solid #fcfcfe;
	border-left: 1px solid #fcfcfe;
	border-right: 1px solid #fcfcfe;
	border-radius: 0;
	background-color: #fcfcfe;
	&:before {
		content: "";
		display: block;
		position: absolute;
		width: calc(100% + 2px);
		height: 1px;
		bottom: 0;
		left: -1px;
		background-color: #2763f6;
	}
	&.router-link-active:before {
		background-color: #fff;
		width: 100%;
		left: 0;
	}
	&.router-link-active {
		color: #2763f6;
		border-color: #2763f6;
		background-color: #fff;
		border-radius: 6px 6px 0 0;
	}
}

.tabs {
	display: flex;
	width: 100%;

	> li {
		width: 100%;
	}
}

.tab-content {
	padding-top: 40px;

	> section {
		transition: all 0.1s;
	}
}

.v-leave-active {
	position: absolute;
}

.v-enter {
	opacity: 0;
}

.v-leave-to {
	opacity: 1;
}
</style>
