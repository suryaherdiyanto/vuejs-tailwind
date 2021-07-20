<template>
    <div class="w-full bg-white rounded-lg" :class="{ 'shadow-xl': isShadow, 'border': !isShadow, 'border-gray-200': !isShadow }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isShadow: {
            type: Boolean,
            default: false
        }
    }
}
</script>