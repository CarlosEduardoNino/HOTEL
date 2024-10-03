<template>
  <q-layout view="lHr LpR lff">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/Inicio" label="Inicio" />
        <q-route-tab to="/Actividad" label="Servicios" />
        <q-route-tab to="/Habitaciones" label="Habitaciones" />
        <q-route-tab to="/Contactos" label="Actividades" />
        <q-route-tab to="/Servicios" label="Actividades" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>