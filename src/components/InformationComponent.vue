<script lang="ts" setup>
import BodyComponents from './BodyComponents.vue'
</script>
<template>
  <div
    class="d-flex flex-column align-left"
    :style="{
      backgroundImage: 'url(src/assets/Pictures/wallpaper.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    }"
  >
    <v-container class="pa-0">
      <v-row>
        <v-col cols="3" class="d-flex flex-column align-left">
          <!-- Profile Picture -->
          <v-img
            width="200"
            class="rounded-lg mt-4 ml-4"
            src="src/assets/Pictures/profile-pic2.jpg"
          ></v-img>
          <h1 class="text-white mt-2 ml-2">Jako Gelderblom</h1>
          <v-chip label class="text-white ml-2">Inspired Web/Software Developer</v-chip>
          <v-divider :thickness="3" class="border-opacity-100 mt-4" color="warning"></v-divider>

          <!-- Email -->
          <v-container class="d-flex flex-column">
            <v-card
              class="pa-2"
              width="100%"
              elevation="4"
              style="background: linear-gradient(135deg, #ffcc99, #ff9966)"
              target="_blank"
              href="mailto:jakogelderblom18@gmail.com"
            >
              <v-row no-gutters align="center">
                <v-col cols="auto">
                  <v-img
                    src="src/assets/Pictures/icons8-email-48.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold">Email</div>
                </v-col>
              </v-row>
            </v-card>
          </v-container>

          <!-- LinkedIn -->
          <v-container class="d-flex">
            <v-card
              class="pa-2"
              width="100%"
              elevation="4"
              style="background: linear-gradient(135deg, #ffcc99, #ff9966)"
              target="_blank"
              href="https://linkedin.com/in/jakogelderblom"
            >
              <v-row no-gutters align="center">
                <v-col cols="auto">
                  <v-img
                    src="src/assets/Pictures/icons8-linkedin-48.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold">LinkedIn</div>
                </v-col>
              </v-row>
            </v-card>
          </v-container>

          <!-- GitHub -->
          <v-container class="d-flex">
            <v-card
              class="pa-2"
              width="100%"
              elevation="4"
              style="background: linear-gradient(135deg, #ffcc99, #ff9966)"
              target="_blank"
              href="https://github.com/Buckshot18"
            >
              <v-row no-gutters align="center">
                <v-col cols="auto">
                  <v-img
                    src="src/assets/Pictures/icons8-github-50.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold">Github</div>
                </v-col>
              </v-row>
            </v-card>
          </v-container>

          <!-- Discord -->
          <v-container class="d-flex">
            <v-card
              class="pa-2"
              width="100%"
              elevation="4"
              style="background: linear-gradient(135deg, #ffcc99, #ff9966)"
              target="_blank"
              href="https://discord.com/users/791775922171805746"
            >
              <v-row no-gutters align="center">
                <v-col cols="auto">
                  <v-img
                    src="src/assets/Pictures/icons8-discord-24.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold">Discord</div>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
        <v-col><BodyComponents /></v-col>
      </v-row>
    </v-container>
  </div>
</template>
