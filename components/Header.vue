<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'About Us',
  to: '/about-us',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('about-us')
}, {
  label: 'Awareness',
  to: '/awareness',
  icon: 'i-heroicons-credit-card',
  active: activeHeadings.value.includes('awareness')
}, {
  label: 'Donate',
  to: '/donate',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('donate')
}, {
  label: 'News & Events',
  to: '/news-events',
  icon: 'i-heroicons-question-mark-circle',
  active: activeHeadings.value.includes('news-events')
},
{
  label: 'Contact Us',
  to: '/contact-us',
  icon: 'i-heroicons-question-mark-circle',
  active: activeHeadings.value.includes('contact-us')
},

])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      CNBCR <UBadge label="by ABCRF" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Sign in" color="white" variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>
</template>
