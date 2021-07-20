<template>
  <div class="container mx-auto py-12">
    <h2 class="text-2xl font-bold">Buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" variant="light"></tw-button>
      <tw-button text="Primary Button"></tw-button>
      <tw-button text="Success Button" variant="success"></tw-button>
      <tw-button text="Warning Button" variant="warning"></tw-button>
      <tw-button text="Danger Button" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl font-bold pt-5">Smaller Buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" variant="light" size="sm"></tw-button>
      <tw-button text="Primary Button" size="sm"></tw-button>
      <tw-button text="Success Button" size="sm" variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl font-bold pt-5">Outline Buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" size="sm" :outline="true" variant="light"></tw-button>
      <tw-button text="Primary Button" size="sm" :outline="true"></tw-button>
      <tw-button text="Success Button" size="sm" :outline="true" variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" :outline="true" variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" :outline="true" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl font-bold pt-5">Buttons with loading indicators</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" size="sm" is-loading variant="light"></tw-button>
      <tw-button text="Primary Button" size="sm" is-loading></tw-button>
      <tw-button text="Success Button" size="sm" is-loading variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" is-loading :outline="true" variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" is-loading :outline="true" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl font-bold pt-5">Disabled buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Primary Button" size="sm" disabled></tw-button>
      <tw-button text="Success Button" size="sm" disabled variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" disabled variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" disabled variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl font-bold pt-5">Link buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button type="link" text="Primary Button" size="sm"></tw-button>
      <tw-button type="link" text="Success Button" size="sm" variant="success"></tw-button>
      <tw-button type="link" text="Warning Button" size="sm" variant="warning"></tw-button>
      <tw-button type="link" text="Danger Button" size="sm" variant="danger"></tw-button>
    </div>
    
    <h2 class="text-2xl font-bold pt-5">Cards</h2>
    <hr>
    <div class="mt-5 grid grid-cols-2 gap-5">
      <div class="flex">
        <div>
          <tw-card 
            title="The Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ac quam a maximus. Nunc augue urna, lobortis a orci id, rhoncus commodo enim."
            img="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
          </tw-card>
        </div>
        <div class="ml-4">
          <tw-card 
            title="The Card Title 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ac quam a maximus. Nunc augue urna, lobortis a orci id, rhoncus commodo enim."
            img="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80">
          </tw-card>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="block mt-3">
          <tw-card 
            title="The Card Title"
            type="side"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ac quam a maximus. Nunc augue urna, lobortis a orci id, rhoncus commodo enim."
            img="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
          </tw-card>
        </div>
        <div class="block mt-3">
          <tw-card 
            title="Side Card Title 2"
            type="side"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ac quam a maximus. Nunc augue urna, lobortis a orci id, rhoncus commodo enim."
            img="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80">
          </tw-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwButton from '../components/TWButton.vue';
import TwCard from '../components/TWCard.vue';

export default {
  name: 'Home',
  components: {
    TwButton,
    TwCard
  }
}
</script>
