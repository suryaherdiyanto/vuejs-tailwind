<template>
    <base-box>
        <div :class="{ 'flex': (type === 'side'), 'block': (type === 'up') }">
            <div v-if="img" class="overflow-hidden bg-cover bg-center" :class="imageClasses" :style="customStyles"></div>
            <div class="p-4" :class="textClasses">
                <slot name="title">
                    <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
                </slot>
                <slot name="description">
                    <p v-if="description" class="text-gray-500 mt-4 font-medium">
                        {{ description }}
                    </p>
                </slot>
            </div>
        </div>
    </base-box>
</template>

<script>
import BaseBox from './Base/BaseBox.vue';

export default {
    props: {
        img: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'up'
        }
    },
    components: {
        BaseBox
    },
    data() {
        return {
            customStyles: {
                'background-image': ''
            },
            imageClasses: {
                'w-full': false,
                'w-1/4': false,
                'h-48': false,
                'rounded-l-lg': false,
                'rounded-t-lg': false
            },
            textClasses: {
                'w-full': false,
                'w-3/4': false,
                'h-48': false
            }
        }
    },
    mounted() {
        if (this.img) {
            this.customStyles['background-image'] = `url(${this.img})`;
        }

        if (this.type === 'up') {
            this.imageClasses['w-full'] = true;
            this.imageClasses['h-48'] = true;
            this.imageClasses['flex-1'] = true;
            this.imageClasses['rounded-t-lg'] = true;
            this.textClasses['w-full'] = true;
            this.textClasses['w-full'] = true;
            this.textClasses['flex-1'] = true;

        } else {
            this.imageClasses['w-1/4'] = true;
            this.imageClasses['rounded-l-lg'] = true;
            this.textClasses['w-3/4'] = true;
            this.textClasses['h-48'] = true;
        }
    }   
}
</script>