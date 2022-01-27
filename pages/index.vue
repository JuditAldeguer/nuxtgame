<template>
  <div class="flex items-center justify-center h-screen relative">
    <div class="grid grid-cols-3 w-[300px] h-[300px] gap-3">
      <div
        v-for="({ icon }, i) in configuration.grid"
        :key="i"
        class="p- relative hover:cursor-pointer bg-gray-200 flex items-center justify-center"
        @click="play(i)"
      >
        <div class="absolute flex items-center justify-center">
          <span v-html="icon"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      configuration: {
        grid: [
          { icon: '', element: '' },
          { icon: '', element: '' },
          { icon: '', element: '' },
          { icon: '', element: '' },
          { icon: '', element: '' },
          { icon: '', element: '' },
          { icon: '', element: '' },
          { icon: '', element: '' },
          { icon: '', element: '' },
        ],
        isGaming: true,
        elements: {
          x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>',
          0: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z"></path></svg>',
        },
      },
      game: {
        zero: false,
        winner: null,
      },
    }
  },
  methods: {
    play(i) {
      this.game.zero = !this.game.zero
      if (this.game.zero) {
        this.configuration.grid.splice(i, 1, {
          icon: this.configuration.elements.x,
          element: 'x',
        })
      } else {
        this.configuration.grid.splice(i, 1, {
          icon: this.configuration.elements['0'],
          element: '0',
        })
      }
    },
  },
}
</script>
