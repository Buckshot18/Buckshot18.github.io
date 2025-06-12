<script lang="ts" setup>
import { ref } from 'vue'
import { MdChevronRight, MdChevronLeft } from 'vue-icons-plus/md'

const onboarding = ref(0)

// Slide content: update or add more slides here
const slides = [
  {
    image: 'Pictures/whats_next.png',
    title: 'Whats Next for me?',
  },
  {
    image: 'Pictures/career.png',
    title: 'Gain Work Experience',
    text: 'Look for internship or graduate opportunities in the field.',
  },
  {
    image: 'Pictures/Udemy.png',
    title: 'Continue Learning',
    text: 'Enroll in more Udemy courses to strengthen my development skills.',
  },
]
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card elevation="10" rounded="xl" class="pa-6" color="transparent">
          <!-- About Me Section -->
          <h2 class="text-center text-white">About Me</h2>
          <v-divider
            :thickness="3"
            class="border-opacity-100 mt-1 mb-2"
            color="#8b0000"
          ></v-divider>
          <p class="text-center text-white">
            Hi! My name is Jako, and I'm passionate about computers, mechanical work, and gaming.
            I'm at the beginning of an exciting journey into the world of development, with a
            growing foundation in web and software development. I thrive on continuous improvement
            and always aim to move forward. Recently, I completed a bootcamp at HyperionDev, where I
            learned the fundamentals of web and software development. <br />
            Now, I'm actively seeking opportunities such as internships or graduate programs to
            further expand my skills and put my knowledge into practice. In my free time, you can
            find me exploring computer hardware, collaborating with friends on coding projects, or
            diving into gaming sessions to relax and recharge.
          </p>
          <v-divider
            :thickness="3"
            class="border-opacity-100 mt-1 mb-2"
            color="#8b0000"
          ></v-divider>

          <!-- Project button -->
          <v-col md="4" class="mx-auto">
            <v-btn
              rounded="lg"
              size="30"
              block
              :to="`/projects`"
              elevation="0"
              style="background: linear-gradient(135deg, #8b0000, #333333)"
              class="text-white"
              >Projects</v-btn
            >
          </v-col>

          <!-- Slides Section -->
          <v-window v-model="onboarding" show-arrows="hover" class="text-black">
            <template v-slot:prev="{ props }">
              <v-btn
                icon
                variant="text"
                @click="props.onClick"
                style="background-color: rgba(189, 189, 189, 0.5)"
              >
                <MdChevronLeft size="28" color="black" />
              </v-btn>
            </template>
            <template v-slot:next="{ props }">
              <v-btn
                icon
                variant="text"
                @click="props.onClick"
                style="background-color: rgba(170, 170, 170, 0.4)"
              >
                <MdChevronRight size="28" color="black" />
              </v-btn>
            </template>
            <v-window-item v-for="(slide, index) in slides" :key="`card-${index}`">
              <v-card class="ma-2 slide-card" elevation="4" rounded="lg">
                <img :src="slide.image" alt="Slide Image" class="slide-img" />
                <div class="overlay">
                  <h2 class="text-h4 mb-2">{{ slide.title }}</h2>
                  <p>{{ slide.text }}</p>
                </div>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.975);
  border: 2px solid rgb(0, 0, 0);
}

.slide-card {
  color: white;
  height: 300px;
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: stretch;
  filter: brightness(0.8); /* Slightly lighter for better visibility */
}

.overlay {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5); /* Increased opacity for stronger contrast */
  padding: 1.5rem;
  text-align: center;
  border-radius: 12px;
}
</style>
