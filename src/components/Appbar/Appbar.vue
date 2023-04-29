<template>
	<header
		class="app-bar"
		:class="setScroll ? 'active' : ''"
		@scroll="handleScroll"
		@touchmove="touchMoveEvent"
	>
		<!-- Home Appbar -->
		<nav v-if="$route.path === '/man'">
			<div class="actions start">
				<button class="dropdown-logo">
					<h1 class="logo">
						<img src="@/assets/images/pig1.png" alt="로고" />
					</h1>
					<span>함께해요어부바</span>
				</button>
			</div>
			<div class="actions end">
				<button class="btn noti" @click="setFlag = !setFlag">
					<span v-if="(setFlag = true)" class="new-flag" />
					<iconNoti />
				</button>
				<button class="btn menu-toggler" @click="$emit('toggle')">
					<span class="sr-only">홈</span>
					<iconMenu />
				</button>
			</div>
		</nav>

		<!-- Sub Appbar -->
		<nav v-else>
			<div class="actions start">
				<button class="btn" @click="$router.go(-1)">
					<iconBack />
				</button>
			</div>
			<router-link to="/" class="title">
				{{ $route.name }}
			</router-link>
			<div class="actions end">
				<button class="btn menu-toggler" @click="$emit('toggle')">
					<iconMenu />
				</button>
			</div>
		</nav>
	</header>
</template>

<script>
import iconBack from "@/assets/images/icon_24/appbar_history_back.svg";
import iconMenu from "@/assets/images/icon_24/appbar_menu.svg";
import iconNoti from "@/assets/images/icon_24/appbar_noti.svg";
import toggleMixin from "@/mixin/toggleMixin";

let winScroll = window.scrollY;

export default {
	name: "AppHeader",
	components: { iconMenu, iconNoti, iconBack },
	mixins: [toggleMixin],
	// vue-meta 테스트
	metaInfo: {
		title: "신협이에요!",
		// titleTemplate: '%s | ...',
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, user-scalable=no",
			},
			{ vmid: "description", name: "description", content: "description" },
			// vmid: Unique Metadata, index.html 에서 설정한 메타와 중복되지 않게 하기 위함
			// index meta - component meta 순으로 노출
		],
	},
	data() {
		return {
			setScroll: true,
			setFlag: true,
			mobile: "",
		};
	},

	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	mounted() {
		this.checkMobile();
	},

	methods: {
		checkMobile() {
			//userAgent 값 얻기
			let myDevice = navigator.userAgent.toLowerCase();
			this.mobile = myDevice;

			if (myDevice.indexOf("android") > -1) {
				console.log("나는 AOS");
				return "android";
			} else if (
				myDevice.indexOf("iphone") > -1 ||
				myDevice.indexOf("ipad") > -1
			) {
				//IOS
				console.log("나는 IOS");
				return "ios";
			} else {
				console.log("나는 그냥 Web");
				return "other";
			}
		},

		handleScroll() {
			// const header = document.querySelector('.app-header');
			const headerScroll = window.scrollY;
			// console.log(`스크롤: ${winScroll}`)

			// Top으로 올리면 header가 내려옴
			if (winScroll >= headerScroll) {
				this.setScroll = true;
			} else {
				this.setScroll = false;
			}
			return (winScroll = headerScroll);
		},
		touchMoveEvent() {
			console.log("무브무브");
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./Appbar.scss";
</style>
