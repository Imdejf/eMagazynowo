<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
</script>
<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle></PageTitle>
    </PageHeader>
    <PageBody>
      <PageSection>
        <div
          class="section__category__filters container mx-auto block my-3 <md:px-2 text-md"
        >
          <div class="pb-5 flex items-center justify-end">
            <div class="form-group form-check text-center">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              />
              <label
                class="form-check-label mr-5 inline-block text-gray-800 cursor-pointer"
                >Nowości</label
              >
            </div>
            <div class="form-group form-check text-center">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              />
              <label
                class="form-check-label mr-5 inline-block text-gray-800 cursor-pointer"
                >Promocje</label
              >
            </div>
            <div class="mr-5">
              <FormFilterCollectionFilter />
            </div>
            <FormFilterPagination />
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div
          class="section__category__items container mx-auto block my-3 <md:px-2"
        >
          <div class="pb-5">
            <GridCategoryProduct />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
