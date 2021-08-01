<template>
    <div class="block">
        <label>{{ title }}</label>

        <ul class="block">
            <li v-for="(item,index) in items" :key="index" class="pl-4 py-1.5" :class="{ 'inline-block': this.isInline }">
                <tw-check @change="check(item, $event)" :checked="(this.modelValue.indexOf(item) > -1) ? true:false" class="mr-1" :id="item.replace(' ', '_').toLowerCase()" :value="item"></tw-check>
                <label :for="item.replace(' ', '_').toLowerCase()">{{ item }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
import TwCheck from './TWCheck.vue';

export default {
    components: {
        TwCheck
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        isInline: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Array
        }
    },
    computed: {
        
    },
    methods: {
        check(item, $event) {
            const isChecked = $event.target.checked;
            const items = this.modelValue;

            if (isChecked) {
                items.push(item);
            } else {
                const index = items.findIndex((arr) => arr === item);
                items.splice(index, 1);
            }

            this.$emit('update:modelValue', items);
        }
    },
}
</script>