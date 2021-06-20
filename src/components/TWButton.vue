<template>
    <button class="rounded-md border-0 font-bold tracking-wider cursor-pointer text-white transition-colors" :class="customClasses" :type="type">{{ text }}</button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button'
        },
        text: {
            type: String
        },
        variant: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'md'
        }
    },
    data() {
        return {
            customClasses: {
                'bg-blue-500': false,
                'bg-green-500': false,
                'bg-red-500': false,
                'bg-yellow-500': false,
                'hover:bg-blue-700': false,
                'hover:bg-green-700': false,
                'hover:bg-red-700': false,
                'hover:bg-yellow-700': false,
                'py-2.5': false,
                'px-2': false,
                'py-2': false,
                'px-1.5': false,
                'text-sm': false,
                'text-base': false
            },
        }
    },
    created() {
        switch (this.variant) {
            case 'primary':
                this.customClasses['bg-blue-500'] = true;
                this.customClasses['hover:bg-blue-700'] = true;
                break;
            case 'danger':
                this.customClasses['bg-red-500'] = true;
                this.customClasses['hover:bg-red-700'] = true;
                break;
            case 'warning':
                this.customClasses['bg-yellow-500'] = true;
                this.customClasses['hover:bg-yellow-700'] = true;
                break;

            default:
                this.customClasses['bg-green-500'] = true;
                this.customClasses['hover:bg-green-700'] = true;
                break;
        }

        switch (this.size) {
            case 'md':
                this.customClasses['py-2.5'] = true;
                this.customClasses['px-2'] = true;
                this.customClasses['text-base'] = true;
                break;
        
            default:
                this.customClasses['py-2'] = true;
                this.customClasses['px-1.5'] = true;
                this.customClasses['text-sm'] = true;
                break;
        }
    }
}
</script>