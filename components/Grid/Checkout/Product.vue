<template>
  <div class="bg-white rounded-xl mb-4">
    <div class="p-1 bg-slate-200 rounded-t-xl pl-4 text-center text-blue-600">
      <Icon name="game-icons:cardboard-box" class="h-5 w-5" />
      <span class="font-600 ml-2">Przesyłka 1/2</span>
      <span class="ml-2">Artech</span>
    </div>
    <div class="p-5">
      <ul class="flex flex-col divide-y divide-gray-700">
        <li
          class="flex flex-col py-6 sm:flex-row sm:justify-between border-b-2"
        >
          <div class="flex w-full space-x-2 sm:space-x-4">
            <img
              class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt="Polaroid camera"
            />
            <div class="flex flex-col justify-between w-full pb-4">
              <div class="flex justify-between w-full pb-2 space-x-2">
                <div class="space-y-1">
                  <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                    Polaroid camera
                  </h3>
                  <p class="text-sm dark:text-gray-400">Artech</p>
                </div>
                <div class="text-right">
                  <p
                    class="line-through decoration-red-700 font-600 text-md text-red-500"
                  >
                    75.50€
                  </p>
                  <p class="text-lg font-semibold">59.99€</p>
                </div>
              </div>
              <div class="self-end"><FormQuantityPlusMinus /></div>
              <div class="flex flex-1 justify-between text-sm">
                <div class="flex divide-x">
                  <button
                    type="button"
                    class="font-medium px-2 py-1 pl-0 space-x-1 text-blue-400 hover:text-blue-600"
                  >
                    <Icon name="mdi:heart-outline" class="w-4 h-4" />
                    Do ulubionych
                  </button>
                  <button
                    type="button"
                    class="font-medium text-red-400 hover:text-red-700 pl-2 py-1 space-x-1"
                  >
                    <Icon name="octicon:trash-24" class="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
