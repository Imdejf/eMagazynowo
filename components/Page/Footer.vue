<template>
  <footer aria-label="Site Footer" class="bg-gray-900">
    <div class="mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-md">
        <strong
          class="block text-center text-xl font-medium text-white sm:text-3xl"
        >
          Chcesz żebyśmy wysyłali ci informacje o najnowyszych ofertach?
        </strong>

        <form class="mt-6">
          <div class="relative max-w-lg">
            <label class="sr-only" for="email"> Email </label>

            <input
              class="w-full rounded-full p-4 pr-32 text-sm font-medium border-gray-700 bg-gray-800 text-white"
              id="email"
              type="email"
              placeholder="newsletter@emagazynowo.com"
            />

            <button
              class="absolute top-2/28 right-1 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-600 text-white transition hover:bg-blue-600"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
        <div class="mx-auto max-w-sm lg:max-w-none">
          <div
            class="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
          >
            <div>
              <strong class="font-medium text-white font-700"> Firma </strong>

              <nav
                aria-label="Footer About Nav"
                class="mt-6 flex flex-col space-y-1"
              >
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">O nas</span>
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Jak kupować?</span>
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Oferta sklepu</span>
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line"
                    >Polityka prywatności</span
                  >
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Regulamin</span>
                </a>
              </nav>
            </div>

            <div>
              <strong class="font-medium text-white font-700"> Usługi </strong>

              <nav
                aria-label="Footer Services Nav"
                class="mt-6 flex flex-col space-y-1"
              >
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Kontakt</span>
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line"> Dostawa produktu</span>
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Zwrot produktu</span>
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Płatności</span>
                </a>
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Gwarancja</span>
                </a>
              </nav>
            </div>

            <div>
              <strong class="font-medium text-white font-700">
                Wspracie
              </strong>

              <nav
                aria-label="Footer Support Nav"
                class="mt-6 flex flex-col space-y-1"
              >
                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Blog</span>
                </a>

                <a class="transition text-white hover:text-white/75" href="/">
                  <span class="section_text text_line">Kontakt</span>
                </a>
              </nav>
            </div>
          </div>

          <div class="mt-6 flex justify-center gap-4 lg:justify-start">
            <a
              class="transition text-cyan-300 hover:text-cyan-400"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Facebook </span>

              <Icon name="simple-icons:facebook" class="h-6 w-6" />
            </a>

            <a
              class="transition text-cyan-300 hover:text-cyan-400"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Linkedin </span>

              <Icon name="akar-icons:linkedin-v1-fill" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left"
        >
          <div>
            <strong class="font-medium text-white font-700">
              eMagazynowo.pl
            </strong>

            <div
              aria-label="Footer About Nav"
              class="mt-6 flex flex-col space-y-1"
            >
              <a class="transition text-white hover:text-white/75" href="/">
                <span class="section_text text_line"
                  >kontakt@emagazynowo.pl</span
                >
              </a>
              <a class="transition text-white hover:text-white/75" href="/">
                <span class="section_text text_line"
                  >tel.kom.: +48 698 304 621</span
                >
              </a>
            </div>
          </div>

          <div>
            <strong class="font-medium text-white font-700">
              Operator sklepu
            </strong>

            <div
              aria-label="Footer Support Nav"
              class="mt-6 flex flex-col space-y-1"
            >
              <img
                data-src="/assets/DS-min.png"
                class="lazyload w-30px h-30px"
              />
              <p class="text-white" href="/">
                Data Sharp<br />Polna 6 66-340 Przytoczna <br />
                NIP: 523999467
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 hidden border-t pt-border-gray-800">
        <p class="text-center text-xs leading-relaxed text-gray-400">
          © DataSharp 2022. All rights reserved.

          <br />

          Created with
          <a
            href="https://nuxt.com/"
            class="underline transition text-white hover:text-white/75"
            >Nuxt 3</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<style>
.text_line {
  position: relative;
  text-decoration: none;
  transition: all 0.35s ease;
}

.text_line::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3b82f6;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.section_text:hover {
  color: #3b82f6;
}
.section_text:hover::before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
