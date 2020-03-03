<template>
  <div>
    <group
      v-for="group in groups"
      :key="group.id"
      :title="group.title"
      :content="group.content"
      :image="group.image"
      :tags="group.tags"
      :owner="group.owner"
      :members="group.members"
    />
  </div>
</template>

<script>
import Group from './Group'
import generateGroups from '~/utils/mock/groups'
const groups = generateGroups()

export default {
  components: { Group },
  data() {
    return {
      groups
    }
  }
}
</script>

<style scoped></style>
