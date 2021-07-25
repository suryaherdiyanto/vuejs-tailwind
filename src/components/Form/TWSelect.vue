<template>
    <div 
        @blur="showItems = false" 
        @focus="showItems = true"
        @keydown.self.down.prevent="selectItem"
        @keydown.self.up.prevent="selectItem"
        @keyup.enter.prevent="chooseItem" 
        class="relative focus:border-gray-200" 
        tabindex="0"
    >
        
        <div class="w-full h-9 p-1.5 font-light border border-gray-200 rounded-md font-sm  focus:outline-none">
            <span v-if="!selectedItem" class="text-gray-400">{{ placeholder }}</span>
            <span v-if="selectedItem && multiple" class="mr-1 bg-blue-500 text-white inline-block px-1 py-0.5 text-xs font-medium rounded-xl">
                {{ selectedItem }} <a href="#" class="ml-0.5">&times;</a>
            </span>
            <span v-if="!multiple">{{ selectedItem }}</span>
            <span 
                class="relative right-1.5 w-5 h-5 text-center transition-transform float-right custom-border-color origin-center before:relative before:top-1/2 before:align-middle before:w-6 before:h-6 before:border-t-4 before:border-r-4 before:border-l-4 before:border-b-0"
                :class="{showItems, 'transform': showItems, 'rotate-180': showItems}"
                >
            </span>
        </div>

        <div v-if="showItems" @hover="showItems = true" class="w-full max-h-52 mt-1.5 bg-white border shadow-lg overflow-y-auto absolute rounded-md">
            <input
                v-if="filterable"
                v-model="selectedItem"
                class="w-full h-9 font-light p-3 border border-gray-200 rounded-md font-sm focus:outline-none"
                placeholder="Search...." 
                :class="{ 'border-green-500': isSuccess, 'border-red-500': isError, 'hover:border-gray-400': (!isError && !isSuccess), 'focus:border-gray-800': (!isError && !isSuccess) }"
            >
            <ul class="w-full">
                <li 
                    v-for="(item,index) in selectItems"
                    @click.stop="chooseItem(item)" 
                    :key="index" 
                    class="block cursor-pointer p-2 hover:bg-gray-200"
                    :class="{ 'bg-gray-200': item.selected }"
                >
                    {{ item.value }}
                </li>
            </ul>
        </div>
    </div>

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
        },
        placeholder: {
            type: String,
            default: 'Select item'
        },
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        keyValue: {
            type: String,
            default: ''
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selectItems: [],
            selectPosition: -1,
            selectedItem: '',
            showItems: false
        }
    },
    methods: {
        selectItem($event) {

            if (this.selectPosition > -1) {
                this.selectItems[this.selectPosition].selected = false;
            }

            if ($event.code === 'ArrowDown' || $event.keyCode === 40) {
                if (this.selectPosition === this.selectItems.length-1) {
                    return;
                }

                this.selectPosition += 1;
                if (this.selectItems[this.selectPosition]) {
                    this.selectItems[this.selectPosition].selected = true;
                }
            }

            if ($event.code === 'ArrowUp' || $event.keyCode === 38) {
                
                if (this.selectPosition === -1) {
                    return;
                }

                this.selectPosition -= 1;
                if (this.selectItems[this.selectPosition]) {
                    this.selectItems[this.selectPosition].selected = true;
                }
            }
        },
        chooseItem(item = null) {
            if (item === null) {
                this.selectedItem = this.selectItems[this.selectPosition].value;
                this.selectItems[this.selectPosition].selected = false;
                this.selectPosition = -1;
            } else {
                this.selectedItem = item.value;
                this.selectPosition = -1;
            }
        },
        populateItems() {
            this.items.forEach((item) => {
                

                if (typeof(item) === "object") {
                    this.selectItems.push({ key: this.keyValue, value: this.items[this.keyValue], selected: false });
                } else {
                    this.selectItems.push({ key: item, value: item, selected: false });
                }

            });
        }
    },
    created() {
        this.populateItems();
    }
}
</script>

<style scoped>
.custom-border-color::before {
    border-color: #9CA3AF transparent;
}
</style>