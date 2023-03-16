// @/plugins/GlobalComponents.js
import BaseButton from "@/components/BaseButton";
import TextField from "@/components/Forms/TextField";
import Tabs from "@/components/Tabs/Tabs";
// import Tab from "@/components/Tabs/Tab";
import FixedTabs from "@/components/Tabs/FixedTabs";
import { Column, Hidden, Row } from "vue-grid-responsive";

import Vue from "vue";

Vue.component("Row", Row);
Vue.component("Column", Column);
Vue.component("Hidden", Hidden);
Vue.component("BaseButton", BaseButton);
Vue.component("TextField", TextField);
Vue.component("Tabs", Tabs);
// Vue.component("Tab", Tab);
Vue.component("FixedTabs", FixedTabs);
