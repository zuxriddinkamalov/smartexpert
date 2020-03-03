<template>
  <Container>
    <groups />
  </Container>
</template>

<script>
import Groups from '~/components/community/Groups'
import Container from '~/components/Container'
export default {
  name: 'Community',
  components: { Groups, Container },
  layout: 'admin'
}
</script>

<style scoped></style>
