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
        <div class="pb-5">
          <GridBlogCard />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
