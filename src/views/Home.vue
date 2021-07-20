<template>
  <div class="container mx-auto py-12">
    <h2 class="text-2xl">Buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" variant="light"></tw-button>
      <tw-button text="Primary Button"></tw-button>
      <tw-button text="Success Button" variant="success"></tw-button>
      <tw-button text="Warning Button" variant="warning"></tw-button>
      <tw-button text="Danger Button" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl pt-5">Smaller Buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" variant="light" size="sm"></tw-button>
      <tw-button text="Primary Button" size="sm"></tw-button>
      <tw-button text="Success Button" size="sm" variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl pt-5">Outline Buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" size="sm" :outline="true" variant="light"></tw-button>
      <tw-button text="Primary Button" size="sm" :outline="true"></tw-button>
      <tw-button text="Success Button" size="sm" :outline="true" variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" :outline="true" variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" :outline="true" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl pt-5">Buttons with loading indicators</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Light Button" size="sm" is-loading variant="light"></tw-button>
      <tw-button text="Primary Button" size="sm" is-loading></tw-button>
      <tw-button text="Success Button" size="sm" is-loading variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" is-loading :outline="true" variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" is-loading :outline="true" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl pt-5">Disabled buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button text="Primary Button" size="sm" disabled></tw-button>
      <tw-button text="Success Button" size="sm" disabled variant="success"></tw-button>
      <tw-button text="Warning Button" size="sm" disabled variant="warning"></tw-button>
      <tw-button text="Danger Button" size="sm" disabled variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl pt-5">Link buttons</h2>
    <hr>
    <div class="flex py-5 gap-5">
      <tw-button type="link" text="Primary Button" size="sm"></tw-button>
      <tw-button type="link" text="Success Button" size="sm" variant="success"></tw-button>
      <tw-button type="link" text="Warning Button" size="sm" variant="warning"></tw-button>
      <tw-button type="link" text="Danger Button" size="sm" variant="danger"></tw-button>
    </div>

    <h2 class="text-2xl pt-5">Text Box</h2>
    <hr>
    <div class="mt-5 grid grid-cols-4 gap-5">
      <tw-text-box title="Textbox 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales id massa in placerat. Etiam in neque ultrices, egestas elit eget, placerat augue. Vestibulum fringilla odio et justo cursus, in maximus tellus tristique. Sed porta interdum tortor at efficitur."></tw-text-box>
      <tw-text-box title="Textbox 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales id massa in placerat. Etiam in neque ultrices, egestas elit eget, placerat augue. Vestibulum fringilla odio et justo cursus, in maximus tellus tristique. Sed porta interdum tortor at efficitur."></tw-text-box>
      <tw-text-box title="Textbox 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales id massa in placerat. Etiam in neque ultrices, egestas elit eget, placerat augue. Vestibulum fringilla odio et justo cursus, in maximus tellus tristique. Sed porta interdum tortor at efficitur."></tw-text-box>
      <tw-text-box title="Textbox 4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales id massa in placerat. Etiam in neque ultrices, egestas elit eget, placerat augue. Vestibulum fringilla odio et justo cursus, in maximus tellus tristique. Sed porta interdum tortor at efficitur."></tw-text-box>
    </div>
    

  </div>
</template>

<script>
import TwButton from '../components/TWButton.vue';
import TwTextBox from '../components/TWTextBox.vue';

export default {
  name: 'Home',
  components: {
    TwButton,
    TwTextBox
  }
}
</script>
