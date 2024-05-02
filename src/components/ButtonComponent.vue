<template>
    <ion-button  :id="id"  :color="color"  :href="href" :value="value">{{ value }}</ion-button>
  </template>
  
  <script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: { IonButton },
    props: {
      id: {
        type: String,
        required: true
      },
      name: String,
      expand: String,
      color: String,
      size: String,
      fill: String,
      shape: String,
      disabled: Boolean,
      type: String,
      href: String,
      value:String
    }
  });
  </script>
  
  <style scoped>
    /* Estilo global */
  </style>