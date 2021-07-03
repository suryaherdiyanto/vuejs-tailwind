<template>
    <button class="rounded-md border-2 font-medium cursor-pointer text-white relative transition-colors group focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed" :class="customClasses" :type="type">
        {{ text }} &nbsp; <span v-if="isLoading" class="w-5 h-5 border-r border-t inline-block float-right rounded-t-full rounded-r-full animate-spin" :class="loadingClasses"></span>
    </button>
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
        },
        outline: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
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
                'hover:bg-blue-500': false,
                'hover:bg-green-500': false,
                'hover:bg-red-500': false,
                'group-hover:border-white': false,
                'py-3': false,
                'px-3': false,
                'py-2': false,
                'px-2': false,
                'text-sm': false,
                'text-base': false,
                'border-transparent': true,
                'bg-transparent': false,
                'border-blue-500': false,
                'border-green-500': false,
                'border-red-500': false,
                'border-yellow-500': false,
                'text-blue-500': false,
                'text-green-500': false,
                'text-red-500': false,
                'text-yellow-500': false,
                'hover:text-white': false
            },
            loadingClasses: {
                'border-white': true,
                'border-blue-500': false,
                'border-green-500': false,
                'border-red-500': false,
                'border-yellow-500': false,
            }
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

        if (this.outline) {
            this.customClasses['border-transparent'] = false;
            this.customClasses['bg-transparent'] = false;
            this.customClasses['hover:text-white'] = true;

            this.customClasses['hover:bg-green-700'] = false;
            this.customClasses['hover:bg-red-700'] = false;
            this.customClasses['hover:bg-yellow-700'] = false;
            this.customClasses['hover:bg-blue-700'] = false;

            this.loadingClasses['border-white'] = false;
            
            switch (this.variant) {
                case 'primary':
                    this.customClasses['bg-blue-500'] = false;
                    this.customClasses['border-blue-500'] = true;
                    this.customClasses['text-blue-500'] = true;
                    this.customClasses['hover:bg-blue-500'] = true;
                    this.loadingClasses['border-blue-500'] = true;
                    this.loadingClasses['group-hover:border-white'] = true;
                    break;
                case 'danger':
                    this.customClasses['bg-red-500'] = false;
                    this.customClasses['border-red-500'] = true;
                    this.customClasses['text-red-500'] = true;
                    this.customClasses['hover:bg-red-500'] = true;
                    this.loadingClasses['border-red-500'] = true;
                    this.loadingClasses['group-hover:border-white'] = true;

                    break;
                case 'warning':
                    this.customClasses['bg-yellow-500'] = false;
                    this.customClasses['border-yellow-500'] = true;
                    this.customClasses['text-yellow-500'] = true;
                    this.customClasses['hover:bg-yellow-500'] = true;
                    this.loadingClasses['border-yellow-500'] = true;
                    this.loadingClasses['group-hover:border-white'] = true;
                    

                    break;

                default:
                    this.customClasses['bg-green-500'] = false;
                    this.customClasses['border-green-500'] = true;
                    this.customClasses['text-green-500'] = true;
                    this.customClasses['hover:bg-green-500'] = true;
                    this.loadingClasses['border-green-500'] = true;
                    this.loadingClasses['group-hover:border-white'] = true;


                    break;
            }
        }

        switch (this.size) {
            case 'md':
                this.customClasses['py-3'] = true;
                this.customClasses['px-3'] = true;
                this.customClasses['text-base'] = true;
                break;
        
            default:
                this.customClasses['py-2'] = true;
                this.customClasses['px-2'] = true;
                this.customClasses['text-sm'] = true;
                break;
        }
    }
}
</script>