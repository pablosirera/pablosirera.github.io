<template>
  <PageLayout>
    <section class="blog">
      <component :is="idComponent" v-if="idComponent" />
      <CoffeeWidget />
    </section>
  </PageLayout>
</template>

<script>
import { POSTS_IDS, POSTS, ROUTES } from '@/shared/constants'
import CoffeeWidget from '@/components/CoffeeWidget'

export default {
  title: 'Pablo Sirera Mata',
  name: 'BlogView',
  components: {
    CoffeeWidget,
    PageLayout: () => import('@/components/PageLayout.vue'),
    'deploy-apps-vue': () => import('@/views/Posts/DeployAppsVue.vue'),
    'add-i18n-vue': () => import('@/views/Posts/Addi18nVue.vue'),
    'event-bus': () => import('@/views/Posts/EventBus.vue'),
    'scaffolding-vue': () => import('@/views/Posts/ScaffoldingVue.vue'),
    disconnect: () => import('@/views/Posts/Disconnect.vue'),
  },
  data: () => ({
    idComponent: '',
  }),
  created() {
    this.setDocumentTitle(this.$route.params.id)
  },
  mounted() {
    this.idComponent = this.$route.params.id

    this.$ga.page(`${ROUTES.BLOG.BASE_URL}/${this.idComponent}`)

    if (!POSTS_IDS.includes(this.idComponent)) {
      this.$router.push({ name: 'PostListView' })
    }
  },
  methods: {
    setDocumentTitle(id) {
      const title = this.$t(POSTS.find(post => post.nameComponent === id).title)
      document.title = title
    },
  },
}
</script>

<style lang="scss" scoped>
.blog {
  .article-blog {
    width: 75%;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (max-width: 720px) {
      width: 100%;
    }
  }

  margin-bottom: 50px;
}
</style>
