<template>
    <base-box>
        <div class="p-4 border-b border-gray-300">
            <h2 class="font-bold text-2xl">{{ title }}</h2>
        </div>
        <div class="p-4">
            <p class="text-base">{{ description }}</p>
        </div>
    </base-box>
</template>

<script>
import BaseBox from './Base/BaseBox.vue';

export default {
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        }
    },
    components: {
        BaseBox
    }
}
</script>