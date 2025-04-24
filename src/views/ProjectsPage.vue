<script lang="ts" setup></script>

<template>
  <!--background-image-->
  <div
    class="d-flex flex-column app-wrapper"
    :style="{
      filter: 'blur(0px)',
      backgroundImage: 'url(src/assets/Pictures/background1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
    }"
  >
    <v-container>
      <!-- Header -->
      <div class="mx-auto text-center text-white mb-3">
        <h1>Welcome to the Projects Page</h1>
        <p>Stay tuned—exciting updates and content are on the way!</p>
      </div>

      <!-- Back to Home Button -->
      <v-col md="2" class="mb-4">
        <v-row>
          <v-btn
            rounded="rounded"
            size="30"
            block
            :to="`/home-info`"
            elevation="10"
            style="background: linear-gradient(135deg, #8b0000, #333333)"
            class="text-white"
            >Home</v-btn
          >
        </v-row>
      </v-col>

      <!-- Card Grid -->
      <v-row>
        <!-- Column 1 -->
        <v-col cols="12" md="4">
          <v-card
            class="mb-6 mx-auto d-flex flex-column"
            color="surface-variant"
            max-width="500"
            style="height: 400px"
          >
            <v-img src="src/assets/Project_page/vue.jpg" height="200" cover></v-img>

            <div class="pa-4 mt-auto">
              <v-card-title class="text-h6">Personal Portfolio</v-card-title>
              <v-card-subtitle class="mb-4">Built with Vue.js and Vuetify. </v-card-subtitle>

              <v-btn
                color="red-lighten-2"
                text="To Repository"
                variant="outlined"
                block
                target="_blank"
                href="https://github.com/Buckshot18/Personal-website"
              />
            </div>
          </v-card>

          <v-card
            class="mb-6 mx-auto d-flex flex-column"
            color="surface-variant"
            max-width="500"
            style="height: 400px"
          >
            <v-img src="src/assets/Project_page/python.jpg" height="200" cover></v-img>

            <div class="pa-4 mt-auto">
              <v-card-title class="text-h6">Ebookstore Inventory</v-card-title>
              <v-card-subtitle class="mb-4">Build with Python</v-card-subtitle>

              <v-btn
                color="red-lighten-2"
                text="To Repository"
                variant="outlined"
                block
                target="_blank"
                href="https://github.com/Buckshot18/My-Projects/tree/main/Ebookstore_inventory"
              />
            </div>
          </v-card>
        </v-col>

        <!-- Column 2 -->
        <v-col cols="12" md="4">
          <v-card
            class="mb-6 mx-auto d-flex flex-column"
            color="surface-variant"
            max-width="500"
            style="height: 400px"
          >
            <v-img src="src/assets/Project_page/django-logo.jpg" height="200" cover></v-img>

            <div class="pa-4 mt-auto">
              <v-card-title class="text-h6">A Random Band Website</v-card-title>
              <v-card-subtitle class="mb-4">Build with Django and CSS</v-card-subtitle>

              <v-btn
                color="red-lighten-2"
                text="To Repository"
                variant="outlined"
                block
                target="_blank"
                href="https://github.com/Buckshot18/My-Projects/tree/main/band_site"
              />
            </div>
          </v-card>

          <v-card
            class="mb-6 mx-auto d-flex flex-column"
            color="surface-variant"
            max-width="500"
            style="height: 400px"
          >
            <v-img src="src/assets/Project_page/construction.png" height="200" cover></v-img>

            <div class="pa-4 mt-auto">
              <v-card-title class="text-h6">🚀Exciting projects are loading...</v-card-title>
              <v-card-subtitle class="mb-4">...???...</v-card-subtitle>

              <v-btn color="red-lighten-2" text="To Repository" variant="outlined" block />
            </div>
          </v-card>
        </v-col>

        <!-- Column 3 -->
        <v-col cols="12" md="4">
          <v-card
            class="mb-6 mx-auto d-flex flex-column"
            color="surface-variant"
            max-width="500"
            style="height: 400px"
          >
            <v-img src="src/assets/Project_page/python.jpg" height="200" cover></v-img>

            <div class="pa-4 mt-auto">
              <v-card-title class="text-h6">Finance Calculator</v-card-title>
              <v-card-subtitle class="mb-4">Build with Python</v-card-subtitle>

              <v-btn
                color="red-lighten-2"
                text="To Repository"
                variant="outlined"
                block
                target="_blank"
                href="https://github.com/Buckshot18/My-Projects/tree/main/Finance_Calculator"
              />
            </div>
          </v-card>

          <v-card
            class="mb-6 mx-auto d-flex flex-column"
            color="surface-variant"
            max-width="500"
            style="height: 400px"
          >
            <v-img src="src/assets/Project_page/construction.png" height="200" cover></v-img>

            <div class="pa-4 mt-auto">
              <v-card-title class="text-h6">🚀Exciting projects are loading...</v-card-title>
              <v-card-subtitle class="mb-4">...???...</v-card-subtitle>

              <v-btn color="red-lighten-2" text="To Repository" variant="outlined" block />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
