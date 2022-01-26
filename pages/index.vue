<template>
<div class="flex items-center justify-center h-screen relative">
  <div class="grid grid-cols-3 w-[300px] h-[300px] gap-3">
    <div v-for="(item, i) in 9" :key="i" class="bg-black p-4  bg-gray-200 flex items-center justify-center"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
