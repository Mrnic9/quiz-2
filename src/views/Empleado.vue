<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Empleado</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content >
      <ion-card>

        <div >
   <FormComponent/>
      </div>

      </ion-card>
    
      <ButtonComponent id=" guardar" value="Agregar" expand="full" color="warning"/>
    </ion-content>
    <ButtonComponent id=" guardar" value="home" color="success" href="/home"/>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import FormComponent from '@/components/FormComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>
