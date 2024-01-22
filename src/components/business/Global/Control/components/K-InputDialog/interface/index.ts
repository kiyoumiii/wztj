/** @description 输入弹窗配置 */
export interface InputConfig {
  /** 原始值 */
  value: string;
  /** 左上角标题 */
  title: string;
  /** 输入框提示 */
  placeholder: string;
  /** 确定回调 */
  confirm: (value: string) => void;
}
