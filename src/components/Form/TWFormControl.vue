<template>
    <div class="pb-1.5">
        <label class="font-medium text-gray-800" :for="name">{{ title }}</label>
        <slot></slot>
        <p class="text-red-500" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        errorMessage: {
            type: String,
            default: null
        }
    }
}
</script>