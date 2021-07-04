<template>
  <div class="hello">
    <h1 data-testId="counterId">當前點擊次數{{ count }}</h1>
    <button @click="CountFn()">點我加1</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    CountFn () {
      this.count += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
