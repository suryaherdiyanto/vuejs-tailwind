<template>
    <textarea 
        class="h-28 w-full h-9 font-light p-3 border border-gray-200 rounded-md focus:outline-none"
        :class="{ 'border-green-500': isSuccess, 'border-red-500': isError, 'hover:border-gray-400': (!isError && !isSuccess), 'focus:border-gray-800': (!isError && !isSuccess) }"></textarea>
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