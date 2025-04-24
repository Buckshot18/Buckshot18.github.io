<script lang="ts" setup></script>

<template>
  <v-container>
    <!-- Header -->
    <div class="mx-auto text-center white-text mb-8">
      <h1>Welcome to the Projects Page</h1>
      <p>Stay tuned—exciting updates and content are on the way!</p>
    </div>

    <!-- Card Grid -->
    <v-row>
      <!-- Column 1 -->
      <v-col cols="12" md="4">
        <v-card class="mb-4" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
            <v-card-title>Card 1 Title</v-card-title>
          </v-img>
          <v-card-text>
            <div>Card 1 Description</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
        </v-card>

        <v-card max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
            <v-card-title>Card 2 Title</v-card-title>
          </v-img>
          <v-card-text>
            <div>Card 2 Description</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Column 2 -->
      <v-col cols="12" md="4">
        <v-card class="mb-4" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
            <v-card-title>Card 3 Title</v-card-title>
          </v-img>
          <v-card-text>
            <div>Card 3 Description</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
        </v-card>

        <v-card max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
            <v-card-title>Card 4 Title</v-card-title>
          </v-img>
          <v-card-text>
            <div>Card 4 Description</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Column 3 -->
      <v-col cols="12" md="4">
        <v-card class="mb-4" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
            <v-card-title>Card 5 Title</v-card-title>
          </v-img>
          <v-card-text>
            <div>Card 5 Description</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
        </v-card>

        <v-card max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
            <v-card-title>Card 6 Title</v-card-title>
          </v-img>
          <v-card-text>
            <div>Card 6 Description</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
