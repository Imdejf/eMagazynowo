<template>
  <div>
    <label for="Quantity" class="sr-only"> Quantity </label>

    <div
      class="flex items-center rounded-lg border border-gray-200 divide-x divide-gray-200 rounded"
    >
      <button
        type="button"
        class="w-10 h-10 border-1 rounded-l-lg leading-10 text-gray-600 transition hover:opacity-75"
      >
        &minus;
      </button>

      <span>
        <input
          type="number"
          id="Quantity"
          value="1"
          class="h-10 w-16 border-transparent text-center"
        />
      </span>

      <button
        type="button"
        class="w-10 h-10 leading-10 border-1 rounded-r-lg text-gray-600 transition hover:opacity-75"
      >
        &plus;
      </button>
    </div>
  </div>
</template>

<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
