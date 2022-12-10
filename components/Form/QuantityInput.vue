<template>
  <div>
    <label for="Quantity" class="sr-only"> Quantity </label>

    <div class="flex items-center gap-1">
      <input
        type="number"
        id="Quantity"
        value="1"
        class="bg-gray-200 w-50px text-center appearance-none border-2 border-gray-200 rounded-l-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
      />
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
