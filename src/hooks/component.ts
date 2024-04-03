import { computed } from "vue";
import { pick } from "lodash-es";
import { AllComponentProps } from "@/types/component";

// 提取组件的样式，点击事件
export const useComponentCommon = <
  T extends AllComponentProps & { isEditer: boolean }
>(
  props: Readonly<Partial<T>>,
  fieldsNames: string[]
) => {
  const commonStyle = computed(() => pick(props, fieldsNames));
  const handler = () => {
    if (props.url && !props.isEditer) {
      window.location.href = props.url;
    }
  };
  return { commonStyle, handler };
};
