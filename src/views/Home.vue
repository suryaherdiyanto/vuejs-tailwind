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


    <h2 class="text-2xl font-bold pt-5">Form</h2>
    <hr>
    <div class="mt-5">
      <tw-form>
        <div class="grid grid-cols-2 gap-5">
          <tw-form-control name="first_name" title="First Name">
            <tw-input type="text" name="first_name" placeholder="Enter your first name" id="first_name"></tw-input>
          </tw-form-control>
          <tw-form-control name="last_name" title="Last Name">
            <tw-input type="text" name="last_name" placeholder="Enter your last name" id="last_name"></tw-input>
          </tw-form-control>
          <tw-form-control name="email" title="Your email">
            <tw-input type="text" name="email" placeholder="Enter your email" id="email"></tw-input>
          </tw-form-control>
          <tw-form-control name="phone" title="Phone (Optional)">
            <tw-input type="text" name="phone" placeholder="Enter your phone number" id="phone"></tw-input>
          </tw-form-control>
          <tw-form-control class="col-span-2" name="message" title="Your message">
            <tw-textarea name="message" id="message" placeholder="Enter your message here..."></tw-textarea>
          </tw-form-control>
        </div>
      </tw-form>
    </div>
  </div>
</template>

<script>
import TwButton from '../components/TWButton.vue';
import TwCard from '../components/TWCard.vue';
import TwForm from '../components/Form/BaseForm.vue';
import TwInput from '../components/Form/TWInput.vue';
import TwTextarea from '../components/Form/TWTextarea.vue';
import TwFormControl from '../components/Form/TWFormControl.vue'

export default {
  name: 'Home',
  components: {
    TwButton,
    TwCard,
    TwInput,
    TwForm,
    TwFormControl,
    TwTextarea
  }
}
</script>
