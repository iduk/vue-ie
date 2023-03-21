<template>
    <div class="tabGroupRoot">
        <div class="tabs">
            <TabItem 
                v-for="aTabData in tabData" 
                v-bind:key="aTabData.keyValue" 
                v-bind="aTabData"
                v-model="selectedTabID"
                v-on:click.native="onItemClick"/>
        </div>
        
        <div class="contents">
            <transition>
                <section class="item" :key="selectedTabID">
                    <!-- Dynamic Component Loader -->
                    <component v-if="selectedTabID !== -1" :is="componentLoader" />
                </section>
            </transition>
        </div>
    </div>
</template>

<script>
import TabItem from './TabItem.vue'
export default {
    components: { TabItem },
    props : {
        requestTabID : Number,
        tabData : Array
    },
    computed: {
        currentTab() {
            return this.tabData.find(el => el.keyValue === this.selectedTabID) || {}
        },
        currentIndex() {
            return this.tabData.findIndex(el => el.keyValue == this.selectedTabID)
        },
        componentLoader() {
            const tab = this.currentTab

            /// If SelectedTabID is not in tabData
            return Object.keys(tab).length != 0 ? (
                () => import(`./${tab.componentName}.vue`)
             ) : (
                alert(`No Component Found ${this.selectedTabID} \\ ${tab}`)
             )
        }
    },
    watch: {
        /// Handle Change Tab Request from Parent Component
        'requestTabID' : {
            handler(newValue) {
                this.selectedTabID = newValue
            },
            immediate: false
        },
        /// Send Event to Parent Component
        'selectedTabID' : {
            handler(newValue, oldValue) {
                this.$emit("on-tab-changed", newValue, oldValue)
            },
            immediate: false
        }
    },
    methods: {
        /// Move TabItem to Center of Parent
        onItemClick() {
            const tabIndex = this.currentIndex
            return tabIndex === -1 ? null : this.$children[tabIndex].$el.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    },
    data: function() {
        return {
            selectedTabID : this.requestTabID
        }
    }
}
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