// @/plugins/GlobalComponents.js
import BaseButton from "@/components/BaseButton";
import BottomSheet from "@/components/Dialogs/BottomSheet";
import TextField from "@/components/Forms/TextField";
import Slider from "@/components/Slider/Slider";
import FixedTabs from "@/components/Tabs/FixedTabs";
import Tabs from "@/components/Tabs/Tabs";
import Tooltip from "@/components/Tooltip/Tooltip";
import { Column, Hidden, Row } from "vue-grid-responsive";

import Vue from "vue";

Vue.component("Row", Row);
Vue.component("Column", Column);
Vue.component("Hidden", Hidden);
Vue.component("BaseButton", BaseButton);
Vue.component("TextField", TextField);
Vue.component("Tabs", Tabs);
Vue.component("FixedTabs", FixedTabs);
Vue.component("Tooltip", Tooltip);
Vue.component("BottomSheet", BottomSheet);
Vue.component("Slider", Slider);

// 컴포 예약
// Vue.component("Dialog", Dialog);
