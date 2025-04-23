<script lang="ts" setup>
import BodyComponents from './BodyComponents.vue'
</script>
<template>
  <div
    class="d-flex flex-column app-wrapper"
    :style="{
      filter: 'blur(0px)',
      backgroundImage: 'url(src/assets/Pictures/background1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }"
  >
    <v-container fluid class="fill-height d-flex align-center justify-center pa-0 mt-0">
      <v-row>
        <v-col cols="3" class="d-flex flex-column ml-10 mb-3">
          <!-- Profile Picture -->
          <v-img
            width="180"
            class="rounded-xl mx-auto"
            src="src/assets/Pictures/profile-pic2.jpg"
          ></v-img>
          <h1 class="text-white mx-auto">Jako Gelderblom</h1>
          <v-chip label class="text-white mx-auto">Inspired Web/Software Developer</v-chip>
          <v-divider
            :thickness="3"
            class="border-opacity-100 mt-4 mb-4"
            color="#8b0000"
          ></v-divider>

          <!-- Email -->
          <div class="mb-2">
            <v-card
              class="pa-1"
              width="100%"
              elevation="10"
              style="background: linear-gradient(135deg, #8b0000, #333333)"
              target="_blank"
              href="mailto:jakogelderblom18@gmail.com"
            >
              <v-row no-gutters align="center">
                <v-col cols="2">
                  <v-img
                    src="src/assets/Pictures/icons8-email-48.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold text-white">Email</div>
                </v-col>
              </v-row>
            </v-card>
          </div>

          <!-- LinkedIn -->
          <div class="mb-2">
            <v-card
              class="pa-1"
              width="100%"
              elevation="10"
              style="background: linear-gradient(135deg, #8b0000, #333333)"
              target="_blank"
              href="https://linkedin.com/in/jakogelderblom"
            >
              <v-row no-gutters align="center">
                <v-col cols="2">
                  <v-img
                    src="src/assets/Pictures/icons8-linkedin-48.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold text-white">LinkedIn</div>
                </v-col>
              </v-row>
            </v-card>
          </div>

          <!-- GitHub -->
          <div class="mb-2">
            <v-card
              class="pa-1"
              width="100%"
              elevation="10"
              style="background: linear-gradient(135deg, #8b0000, #333333)"
              target="_blank"
              href="https://github.com/Buckshot18"
            >
              <v-row no-gutters align="center">
                <v-col cols="2">
                  <v-img
                    src="src/assets/Pictures/icons8-github-50.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold text-white">Github</div>
                </v-col>
              </v-row>
            </v-card>
          </div>

          <!-- Discord -->
          <div class="mb-2">
            <v-card
              class="pa-1"
              width="100%"
              elevation="10"
              style="background: linear-gradient(135deg, #8b0000, #333333)"
              target="_blank"
              href="https://discord.com/users/791775922171805746"
            >
              <v-row no-gutters align="center">
                <v-col cols="2">
                  <v-img
                    src="src/assets/Pictures/icons8-discord-24.png"
                    height="30"
                    width="30"
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold text-white">Discord</div>
                </v-col>
              </v-row>
            </v-card>
          </div>

          <!-- HyperionDev -->
          <div class="mb-2">
            <v-card
              class="pa-1"
              width="100%"
              elevation="10"
              style="background: linear-gradient(135deg, #8b0000, #333333)"
              target="_blank"
              href="https://www.hyperiondev.com/portfolio/380771/"
            >
              <v-row no-gutters align="center">
                <v-col cols="2">
                  <v-img src="src\assets\Pictures\Hyperion.png" height="30" width="30"></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold text-white">HyperionDev</div>
                </v-col>
              </v-row>
            </v-card>
          </div>

          <!-- CV pdf -->
          <div class="mb-2">
            <v-card
              class="pa-1"
              width="100%"
              elevation="10"
              style="background: linear-gradient(135deg, #8b0000, #333333)"
              target="_blank"
              href="public\files\Jako Gelderblom CV.pdf"
            >
              <v-row no-gutters align="center">
                <v-col cols="2">
                  <v-img src="src/assets/Pictures/CV_logo.png" height="30" width="30"></v-img>
                </v-col>
                <v-col>
                  <div class="font-weight-bold text-white">CV</div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
        <v-col><BodyComponents /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.transparent-card {
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.3); /* frosted look */
  transition: all 0.3s ease;
}
</style>
