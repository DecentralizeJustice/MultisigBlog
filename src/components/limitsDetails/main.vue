<template>

    <v-layout align-start row wrap style="overflow:hidden;" xs12 pa-0 ma-0 >
      <landingPage :title='articleInfo.landingPage.title'
        :subHeading='articleInfo.landingPage.subHeading'
        :background='articleInfo.landingPage.background'
        :color= 'articleInfo.landingPage.color' />

      <paragraph :paragraph='articleInfo._1.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_1'
      :backgroundColor2 ='articleInfo.backgroundColor_2'
      />
      <paragraph :paragraph='articleInfo._2.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_2'
      :backgroundColor2 ='articleInfo.backgroundColor_1'
      :title='articleInfo._2.title'/>

      <paragraph :paragraph='articleInfo._3.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_1'
      :backgroundColor2 ='articleInfo.backgroundColor_2'
      :title='articleInfo._3.title'/>

      <paragraph :paragraph='articleInfo._4.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_2'
      :backgroundColor2 ='articleInfo.backgroundColor_1'
      :title='articleInfo._4.title'/>

      <paragraph :paragraph='articleInfo._5.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_1'
      :backgroundColor2 ='articleInfo.backgroundColor_2'
      :title='articleInfo._5.title'/>

      <paragraph :paragraph='articleInfo._6.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_2'
      :backgroundColor2 ='articleInfo.backgroundColor_1'
      :title='articleInfo._6.title'/>

      <paragraph :paragraph='articleInfo._7.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_1'
      :backgroundColor2 ='articleInfo.backgroundColor_2'
      :title='articleInfo._7.title'/>

      <paragraph :paragraph='articleInfo._8.paragraph'
      :backgroundColor1 ='articleInfo.backgroundColor_2'
      :backgroundColor2 ='articleInfo.backgroundColor_1'/>

    </v-layout >
</template>

<script>
import articleInfo from '@/components/limitsDetails/data.js'
import landingPage from '@/components/articleComponents/landingPage.vue'
import paragraph from '@/components/articleComponents/paragraph.vue'
export default {
  name: 'embraceWeirdness',
  components: {
    landingPage,
    paragraph
  },
  data () {
    return {
      articleInfo: articleInfo
    }
  },
  mounted () {
  }
}
</script>
<!-- styling for the component -->
<style scoped>
a {
  color: black;
  text-decoration: none; /* no underline */
}
</style>
