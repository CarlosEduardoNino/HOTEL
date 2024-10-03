<template>
    <div>
      <img src="path/to/banner-image.jpg" alt="Banner del Hotel" class="banner">
      <section>
        <h1>Bienvenidos a nuestro Hotel</h1>
        <p>
          Nuestro hotel ha sido un ícono de hospitalidad desde 1990, brindando a nuestros huéspedes una experiencia inolvidable.
        </p>
        <router-link to="/servicios">Descubre nuestros servicios</router-link>
        <router-link to="/deportes">Explora deportes extremos</router-link>
      </section>
    </div>
  </template>
  
  <script setup>
  // Lógica si es necesario
  </script>
  
  <style>
  .banner {
    width: 100%;
    height: auto;
  }
  </style>