<template>
    <div class="fileList">
        <div v-for="item in iaFileListForMobile" :key="item.id">
            <div :style="{display : 'flex'}" :id="item.id">
                <div :style="{width : '100px'}">{{ item.name }} </div>
                <div :style="{width : '100px'}">{{ item.category }} </div>
                <div :style="{width : '200px'}">{{ item.id }} </div>
                <div :style="{color : '#00F'}" v-if="item.filelink && item.filelink.length > 0">
                <a href="">{{ item.filelink }}</a>
                </div>
                <div :style="{color : '#F00'}" v-else>File Not Found</div>
            </div>
        </div>
    </div>
</template>

<script>
/* Show .vue Files in Components Directory */
const files = require.context('@/components', true, /\.vue$/)
// console.log(files.keys())

/* Show IA File */
import iaFile from "@/assets/fileListM.json"

export default {
    computed: {
        iaFileListForMobile() {
        return iaFile.map((items) => {
            // console.log(files);
            for (var aFile of files.keys()) {
            const modifedName = aFile.replace("./", "").replace(/\.[^/.]+$/, "")
            if (items.id === modifedName && items.filelink !== "퍼블링크") {
                items.filelink = aFile
                continue
            }
            }
            return items;
        });
        }
    }
}
</script>