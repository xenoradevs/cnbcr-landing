<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.links">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>
          {{ page.hero.headline.label }}
          <UIcon
            v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>

      <!-- <Placeholder /> -->
      <img
        :src="page.hero.image.src" alt="Hero image"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      >

      <ULandingLogos :title="page.logos.title" align="center">
        <UIcon
          v-for="icon in page.logos.icons" :key="icon" :name="icon"
          class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
        />
      </ULandingLogos>
    </ULandingHero>
    <ULandingSection
      :headline="page.mission.headline"
      :title="page.mission.title"
      :description="page.mission.description" :links="page.mission.links"
    />


    <ULandingSection
      :title="page.features.title"
      :headline="page.features.headline"
    >
      <UPageGrid id="features" class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.awareness.title"
      :headline="page.awareness.headline"
      :features="page.awareness.points"
      align="right"
    >
      <img
        :src="page.awareness.image.src" alt="Awareness image"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      >
    </ULandingSection>

 
    <ULandingSection :title="page.pricing.title" :description="page.pricing.description" :headline="page.pricing.headline">
      <UPricingGrid id="pricing" compact class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <UPricingCard v-for="(plan, index) in page.pricing.plans" :key="index" v-bind="plan" />
      </UPricingGrid>
    </ULandingSection>
    <!--

    <ULandingSection
      :title="page.pricing.title" :description="page.pricing.description"
      :headline="page.pricing.headline"
    >
      <ULandingCTA
        title="For Researchers"
        description="Explore the wealth of opportunities offered by the Cameroon National Breast Cancer Registry for researchers. Gain access to comprehensive data, research opportunities, population-based insights, collaborative partnerships, and ethical data access, all aimed at driving impactful breast cancer research forward."
        align="right" :card="false"
      >
        <img
          src="https://picsum.photos/640/360"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        >
      </ULandingCTA>

      <ULandingCTA
        title="For Healthcare Organizations"
        description="Explore the wealth of opportunities offered by the Cameroon National Breast Cancer Registry for researchers. Gain access to comprehensive data, research opportunities, population-based insights, collaborative partnerships, and ethical data access, all aimed at driving impactful breast cancer research forward."
        align="left" :card="false"
      >
        <img
          src="https://picsum.photos/640/360"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        >
      </ULandingCTA>
    </ULandingSection>

    <ULandingSection
      :headline="page.testimonials.headline" :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns id="testimonials" class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection class="bg-primary-50 dark:bg-primary-900 dark:bg-opacity-30">
      <ULandingCTA v-bind="page.cta" :card="false" />
    </ULandingSection>

   -->
    <ULandingSection
      id="faq" :title="page.faq.title" :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ
        multiple :items="page.faq.items" :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6'
            }
          }
        }" class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
