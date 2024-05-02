
<template><ion-page>
    <ion-menu contentId="main-content">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <ion-accordion-group>
  <ion-accordion value="Cliente">
    <ion-item slot="header" color="light">
      <ion-label>Cliente</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <ion-button href="/cliente" >Crear cliente</ion-button>
    </div>
  </ion-accordion>
  <ion-accordion value="Empleado">
    <ion-item slot="header" color="light">
      <ion-label>Empleado</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <ion-button href="/empleado" >Crear empleado</ion-button>
    </div>
  </ion-accordion>
  <ion-accordion value="third">
    <ion-item slot="header" color="light">
      <ion-label>Estudiante</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <ion-button href="/estudiante" >Crear estudiante</ion-button>
    </div>
  </ion-accordion>
</ion-accordion-group>
    </ion-content>

  </ion-menu>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button>
            
          </ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
        
    </ion-content>
  </div>
</ion-page></template>
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

</script>