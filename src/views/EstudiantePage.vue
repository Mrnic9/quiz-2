<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Estudiante</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
     <FormComponent/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import FormComponent from '@/components/FormComponent.vue';
</script>
