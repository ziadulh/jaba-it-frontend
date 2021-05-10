<template>
  <div class="sidenav">
    <router-link to="/Dashboard"> Dashboard </router-link>
    <router-link to="/Dashboard/About"> About </router-link>
    <router-link to="/Dashboard/posts"> Posts </router-link>
    <a href="#services">Table</a>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
  </div>

  <div class="main">
    <h3>Dashboard</h3>
    <router-view/>
  </div>
</template>

<script>

export default {
  
  
}
</script>

<style scoped>
  .sidenav {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
  }

  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .main {
    margin-left: 160px; /* Same as the width of the sidenav */
    font-size: 28px; /* Increased text to enable scrolling */
    padding: 0px 10px;
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>
