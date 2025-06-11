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
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
    }"
  >
    <v-container fluid class="fill-height d-flex align-center justify-center">
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
          <div class="d-flex justify-center">
            <v-btn
              class="mb-2 text-white"
              elevation="10"
              style="
                width: 175px;
                background: linear-gradient(135deg, #8b0000, #333333);
                text-transform: none;
              "
              target="_blank"
              href="mailto:jakogelderblom18@gmail.com"
            >
              <v-img
                src="src/assets/Pictures/icons8-email-48.png"
                height="30"
                width="30"
                class="mr-3"
              ></v-img>
              <span class="font-weight-bold">Email</span>
            </v-btn>
          </div>

          <!-- LinkedIn -->
          <div class="d-flex justify-center">
            <v-btn
              class="mb-2 text-white"
              elevation="10"
              style="
                width: 175px;
                background: linear-gradient(135deg, #8b0000, #333333);
                text-transform: none;
              "
              target="_blank"
              href="https://www.linkedin.com/in/jakogelderblom/"
            >
              <v-img
                src="src/assets/Pictures/icons8-linkedin-48.png"
                height="30"
                width="30"
                class="mr-3"
              ></v-img>
              <span class="font-weight-bold">LinkedIn</span>
            </v-btn>
          </div>

          <!-- GitHub -->
          <div class="d-flex justify-center">
            <v-btn
              class="mb-2 text-white"
              elevation="10"
              style="
                width: 175px;
                background: linear-gradient(135deg, #8b0000, #333333);
                text-transform: none;
              "
              target="_blank"
              href="https://github.com/Buckshot18"
            >
              <v-img
                src="src/assets/Pictures/icons8-github-50.png"
                height="30"
                width="30"
                class="mr-3"
              ></v-img>
              <span class="font-weight-bold">GitHub</span>
            </v-btn>
          </div>

          <!-- Discord -->
          <div class="d-flex justify-center">
            <v-btn
              class="mb-2 text-white"
              elevation="10"
              style="
                width: 175px;
                background: linear-gradient(135deg, #8b0000, #333333);
                text-transform: none;
              "
              target="_blank"
              href="https://discordapp.com/users/791775922171805746"
            >
              <v-img
                src="src/assets/Pictures/icons8-discord-24.png"
                height="30"
                width="30"
                class="mr-3"
              ></v-img>
              <span class="font-weight-bold">Discord</span>
            </v-btn>
          </div>

          <!-- HyperionDev -->
          <div class="d-flex justify-center">
            <v-btn
              class="mb-2 text-white"
              elevation="10"
              style="
                width: 175px;
                background: linear-gradient(135deg, #8b0000, #333333);
                text-transform: none;
              "
              target="_blank"
              href="https://www.hyperiondev.com/portfolio/380771/"
            >
              <v-img
                src="src/assets/Pictures/Hyperion.png"
                height="30"
                width="30"
                class="mr-3"
              ></v-img>
              <span class="font-weight-bold">HyperionDev</span>
            </v-btn>
          </div>

          <!-- CV pdf -->
          <div class="d-flex justify-center">
            <v-btn
              class="mb-2 text-white"
              elevation="10"
              style="
                width: 175px;
                background: linear-gradient(135deg, #8b0000, #333333);
                text-transform: none;
              "
              target="_blank"
              href="public\files\Jako_Gelderblom_CV.pdf"
            >
              <v-img
                src="src/assets/Pictures/CV_logo.png"
                height="30"
                width="30"
                class="mr-3"
              ></v-img>
              <span class="font-weight-bold">CV</span>
            </v-btn>
          </div>
        </v-col>
        <v-col><BodyComponents /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.transparent-card {
  background-color: rgba(0, 0, 0, 0.4); /* semi-transparent black */
  backdrop-filter: blur(5px); /* frosted glass effect */
  border-radius: 0;
}
</style>
