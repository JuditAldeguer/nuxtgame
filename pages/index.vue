<template>
<div class="flex bg-red-400 intem-center justify-center h-screen flex-col relative">
  <div class="tablero grid grid-cols-3">
    <div v-for="(item, i) in 9" :key="i" class="bg-black p-4 text-white">0</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
