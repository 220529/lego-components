<template>
  <component :is="tag" @click="handler" :style="commonStyle">
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  textComponentOwnStyle,
  defaultTextComponentProps,
  mapPropsToComponentProps,
} from "@/types/component";
import { useComponentCommon } from "@/hooks/component";
export default defineComponent({
  name: "l-tg",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...mapPropsToComponentProps(defaultTextComponentProps),
  },
  setup(props) {
    const { commonStyle, handler } = useComponentCommon(
      props,
      textComponentOwnStyle
    );

    return {
      handler,
      commonStyle,
    };
  },
});
</script>

<style scoped>
.l-tg {
  color: red;
}
</style>
