<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import type { ButtonInstance } from "./components/Button/type";

const buttonRef = ref<ButtonInstance | null>(null);
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref);
  }
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">确定</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />

    <Collapse>
      <CollapseItem name="a">
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>headline title</h1>
        <div>this is a content a aaa</div>
      </CollapseItem>
      <CollapseItem name="b" title="nice title b item b">
        <div>this is a content b bbb</div>
      </CollapseItem>
      <CollapseItem name="c" title="nice title c item c" disabled>
        <div>this is a content ccc 哈哈哈</div>
      </CollapseItem>
    </Collapse>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
