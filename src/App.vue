<template>
  <v-app>
    <!-- Navbar render -->

    <v-app-bar flat app hide-on-scroll class="primary">
      <v-btn
        class="mx-0 white--text"
        href="https://przemyslawbartosiak.pl"
        icon
      >
        <v-img
          :src="logo.transparent"
          max-height="36px"
          max-width="32px"
        ></v-img>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        v-for="link in links"
        :key="link.label"
        class="mx-0 white--text"
        :href="link.url"
        icon
      >
        <v-icon size="32px">{{ link.icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main content render -->
    <v-main app>
      <router-view></router-view>
    </v-main>

    <!-- Footer render -->
    <v-footer color="primary" padless>
      <v-layout justify-center wrap>
        <v-card flat tile class="primary white--text text-center pt-5">
          <v-btn
            v-for="link in links"
            :key="link.label"
            class="mx-0 white--text"
            :href="link.url"
            icon
          >
            <v-icon size="24px">{{ link.icon }}</v-icon>
          </v-btn>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            <strong>
              Copyright
              <span>&#169;</span> All rights reserved by Przemysław Bartosiak
            </strong>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      title: 'Przemysław Bartosiak - Portfolio',
      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/przemysław-bartosiak-0977161a6/',
          icon: 'mdi-linkedin'
        },
        {
          label: 'GitHub',
          url: 'https://github.com/PrzemyslawBartosiak',
          icon: 'mdi-github'
        }
      ],
      sideNav: false,
      logo: {
        transparent: require('./assets/logoTransparent.png')
      }
    }
  }
}
</script>

<style></style>
