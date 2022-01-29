<template>
   <Card class="item" v-bind="$attrs">
      <h2 class="name">{{ title }}</h2>
      <div class="content">
         <div class="term">{{ period }}</div>
         <div class="price">{{ price }}</div>
      </div>
   </Card>
</template>

<script>
import Card from "./Card.vue";
export default {
   name: "SignalCard",
   components: {Card},
   props: {
      title: {
         type: String,
         required: true
      },
      period: {
         type: String,
         required: true
      },
      price: {
         type: String,
         required: true
      },
   },
}
</script>

<style lang="scss" scoped>
.item{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   min-height: 156px;
   padding: 16px 20px;
   box-sizing: border-box;
   background-color: var(--light-blue);
   border-radius: 10px;
}
.name{
   font-size: var(--title-size);
   font-weight: 600;
   line-height: 1.2;
   color: var(--white);
   text-align: center;
}
.content{
   display: flex;
   justify-content: space-between;
   font-size: var(--article-text-size);
   line-height: 1.2;
   font-weight: 500;
   color: var(--white);
}
.price{
   color: var(--orange);
}
</style>
