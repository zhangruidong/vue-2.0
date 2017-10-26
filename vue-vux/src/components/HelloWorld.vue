<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'

  export default {
    name: 'hello',
    components: {
      Group,
      Cell
    }
  }
</script>
