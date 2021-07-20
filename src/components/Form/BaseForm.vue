<template>
    <form :class="{ 'inline-block': isInline }">
        <slot></slot>
    </form>
</template>

<script>
export default {
    props: {
        isInline: {
            type: Boolean,
            default: false
        }
    }
}
</script>