<template>
    <input
        class="w-full h-9 font-light p-3 border border-gray-200 rounded-md font-sm focus:outline-none" 
        :class="{ 'border-green-500': isSuccess, 'border-red-500': isError, 'hover:border-gray-400': (!isError && !isSuccess), 'focus:border-gray-800': (!isError && !isSuccess) }">
</template>

<script>
export default {
    props: {
        isError: {
            type: Boolean,
            default: false
        },
        isSuccess: {
            type: Boolean,
            default: false
        }
    }
}
</script>