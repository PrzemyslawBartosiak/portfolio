<template>
  <v-container>
    <!-- Landing screen -->
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="8" class="pb-0">
        <div align="center" justify="center">
          <div class="landing-top">
            <h1
              class="grey--text font-weight-bold text-lg-h3 text-md-h4 text-sm-h5 text-h6 mt-4"
            >
              Designer, Front-end Developer
            </h1>
            <p
              class="font-weight-light text-lg-h6 text-md-subtitle-1 text-sm-body-1 text-body-2 mt-2"
            >
              Projektuję i wdrażam proste oraz eleganckie aplikacje.
            </p>
            <div class="chibi">
              <v-img
                :src="images.avatar"
                max-height="237"
                max-width="217"
              ></v-img>
            </div>
          </div>
          <div class="landing-bottom">
            <v-img :src="images.setup" max-width="650" max-height="265"></v-img>
          </div>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <!-- About me -->
    <v-row class="about-me primary pb-10">
      <v-spacer></v-spacer>
      <v-col cols="10" md="8" lg="6" class="pb-0">
        <div align="center" justify="center">
          <div class="white--text my-15">
            <h1
              class="font-weight-bold text-lg-h5 text-md-h4 text-sm-h5 text-h6 my-4"
            >
              Jestem Przemek, miło mi Cię poznać!
            </h1>
            <p
              class="font-weight-light text-md-subtitle-1 text-md-subtitle-2 text-sm-body-1 text-body-2"
            >
              Od kiedy rozpocząłem swoją przygodę z projektowaniem stron
              internetowych rok temu, większość swojego wolnego czasu poświęcam
              na szlifowanie swoich programistycznych umiejętności oraz
              poznawanie nowych technologii.
            </p>
          </div>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <!-- Skills -->
    <v-row class="skills">
      <v-spacer></v-spacer>
      <v-col cols="10" md="8" lg="4" class="pb-0">
        <v-card align="center" justify="center" class="py-4">
          <h3 class="grey--text py-3">Front-end Developer</h3>
          <h5 class="font-weight-thin py-1">
            <span class="font-weight-regular primary--text"
              >Technologie które znam:</span
            >
          </h5>
          <p class="font-weight-light py-1">HTML, CSS, JavaScript, Vue.js</p>
          <h5 class="font-weight-thin py-1">
            <span class="font-weight-regular primary--text"
              >Narzędzia z których korzystam:</span
            >
          </h5>
          <p class="font-weight-light py-1">
            Bootstrap, Vuetify, Bitbucket, Github
          </p>
          <v-divider light class="mx-15"></v-divider>
          <h3 class="grey--text py-3">Back-end Developer</h3>
          <h5 class="font-weight-thin py-1">
            <span class="font-weight-regular primary--text"
              >Technologie które znam:</span
            >
          </h5>
          <p class="font-weight-light py-1 pb-3">
            Firestore, podstawy: PHP, Symfony
          </p>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <!-- Projetcs intro -->
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="8" lg="4" class="pb-0">
        <div align="center" justify="center">
          <div class="landing-top">
            <h3
              class="grey--text font-weight-bold text-lg-h5 text-md-h4 text-sm-h5 text-h6 my-4"
            >
              Moje projekty
            </h3>
            <p
              class="font-weight-light text-md-subtitle-1 text-md-subtitle-2 text-sm-body-1 text-body-2"
            >
              Zachęcam do obejrzenia kilku stron które stworzyłem.
            </p>
          </div>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class="pb-5">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="5" md="5" xl="4">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img :src="images.wybierzszame" height="300px"></v-img>

            <v-card-title>WybierzSzame</v-card-title>

            <v-card-actions>
              <v-btn text href="https://praca-inzynierska-45ab0.web.app/">
                <v-icon left>mdi-fire</v-icon>Demo
              </v-btn>

              <v-btn
                text
                href="https://github.com/PrzemyslawBartosiak/praca-inzynierska"
              >
                <v-icon left>mdi-github</v-icon>Kod
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="showProject1 = !showProject1">
                <v-icon>{{
                  showProject1 ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showProject1">
                <v-divider></v-divider>

                <v-card-text
                  >Aplikacja wykonana na potrzeby pracy inżynierskiej. Celem
                  pracy było stworzenie serwisu, gdzie użytkownicy będą mogli
                  przeglądać oraz zamawiać dania z restauracji. Podstawowym
                  założeniem przy budowaniu aplikacji było zebranie funkcji
                  które umożliwią użytkownikowi przejście całego procesu
                  zamówienia jedzenia na dowóz.
                </v-card-text>

                <v-card-text
                  >Użytkownik wyszukuje interesujące go dania a następnie dodaje
                  je do odpowiednich osobistych kolekcji. Poprzez połączenie się
                  z innym użytkownikiem aplikacji, a nastepnę polubienie danego
                  dania można porównywać swoje gusta kulinarne wraz ze
                  znajomymi. Korzystający z aplikacji może również dodać danie
                  do osobistego schowka aby zawsze łatwo do niego powrócić.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="5" md="5" xl="4">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
          >
            <v-img :src="images.portfolio" height="300px"></v-img>

            <v-card-title>Portfolio</v-card-title>

            <v-card-actions>
              <v-btn text href="https://przemyslawbartosiak.pl">
                <v-icon left>mdi-fire</v-icon>Demo
              </v-btn>

              <v-btn
                text
                href="https://github.com/PrzemyslawBartosiak/portfolio"
              >
                <v-icon left>mdi-github</v-icon>Kod
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="showProject2 = !showProject2">
                <v-icon>{{
                  showProject2 ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showProject2">
                <v-divider></v-divider>

                <v-card-text>
                  Własnoręcznie zaprojektowane i wykonane od podstaw portfolio.
                  W całości stworzone w Vue.js z wykorzystaniem frameworka
                  Vuetify. Strona korzysta z technologii Firestore która
                  zapewnia prosty i intuicyjny hosting.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      showProject1: false,
      showProject2: false,
      showProject3: false,
      showProject4: false,
      images: {
        setup: require('../assets/hero.svg'),
        avatar: require('../assets/chibi-avatar.svg'),
        logo: require('../assets/logo.svg'),
        portfolio: require('../assets/portfolio.jpg'),
        wybierzszame: require('../assets/wybierzszame.png')
      }
    }
  }
}
</script>

<style scoped>
.landing-top {
  margin-top: 60px;
}
.chibi {
  padding-top: 45px;
}
.landing-bottom {
  margin-top: 170px;
}
.about-me {
  margin-top: -1px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.skills {
  margin-top: -50px;
}
</style>
