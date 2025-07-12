<template>
  <div class="container mt-5">
    <h1>Bootstrap 5 Carousel</h1>
    <CarouselComponent :slides="slides" />
  </div>
</template>

<script setup>
const slides = [
  {
    title: 'Slide 1',
    description: 'This is the first local slide.',
    image: '/images/4b5f0b27-d6e2-4190-8cfc-f38dfda5f503.jpg'
  },
  {
    title: 'Slide 2',
    description: 'This is the second local slide.',
    image: '/images/48d280ce-efda-4a9d-9082-e86926b6326d.jpg'
  },
  {
    title: 'Slide 3',
    description: 'This is the third local slide.',
    image: '/images/f9678156-5794-493f-9b61-e577234efa33.jpg'
  },
  {
    title: 'Slide 4',
    description: 'This is the fourth local slide.',
    image: '/images/ffa7e460-7469-495d-966f-9b664d6cba6c.jpg'
  }
]
</script>