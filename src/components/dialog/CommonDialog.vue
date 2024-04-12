<template>
  <el-dialog
    @close="$emit('close')"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    v-model="config.show"
    :width="config.width"
    top="5vh"
    :append-to-body="true"
  >
    <template #header>
      <div class="headTitle" v-if="config.name">{{ config.name }}</div>
      <template v-if="config.tabConfig || false">
        <div class="flex justify-center items-center" style="margin-top:-15px;">
          <div
            @click="changeTab(index)"
            v-for="(item, index) in config.tabConfig.list"
            :key="item.name"
            class="tabContent"
          >
            <span
              :class="index === config.tabConfig.index ? 'tab_active' : ''"
              >{{ item.name }}</span
            >
          </div>
          <div v-if="config.tabConfig.index == config.tabConfig.list.length-1">
            <el-date-picker
              type="daterange"
              
              v-model="config.tabConfig.time"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
              value-format='YYYY-MM-DD'
              @change="changeTime"
              >
            </el-date-picker>
          </div>
        </div>
      </template>
      <slot name="headerContent"></slot>
      <div class="splitLineHeader"></div>
    </template>
    <div class="dialog-content">
      <slot></slot>
    </div>
    <!-- <div class="bottomPart"></div> -->
    <template #footer>
      <div class="dialog-footer" v-if="config.footerBtn || false">
        <el-button type="primary" @click="$emit('sure')">确认</el-button>
        <el-button @click="$emit('close')">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
/**
 * config配置项
 * {
 *   name:左侧header部分的标题,
 *   width:弹窗宽度,百分比
 *   show:弹窗是否显示,
 *   footerBtn:是否显示页面下部的取消确认按钮
 * }
 */
const props=defineProps({
  config: Object,
});
//设置下拉框最外层样式
if(document.getElementsByClassName('el-popper').length >0 ){
  document.getElementsByClassName('el-popper')[0].nextSibling.parentNode.style.cssText='width: 100%;position: relative;height: 100%;top: 0;'
}

const emit = defineEmits(["close", "sure", "changeTab"]);
const changeTab = (index) => {
  emit("changeTab", { index });
};
// 自定义时间值改变
const changeTime = (value) => {
  console.log('value111>>>',value);
  emit("changeTab",{ index:props.config.tabConfig.index,date:value});
};
</script>

<style scoped>
.headTitle {
  margin-top: 25px;
  font-size: 30px;
  font-weight: 800;
}
:global(.el-dialog) {
  box-shadow: none;
  /* border-radius: 10px !important; */
  --el-dialog-bg-color: rgb(20 20 20 / 80%) !important;
  background: url('../../assets/images/imgBg.png') center no-repeat !important;
  background-size: 100% 100% !important;
  padding: 10PX 40px;
}
:global(.el-dialog__header) {
  position: relative;
  margin-right: 0 !important;
  font-size: 30px;
  color: #32c5ff;
  margin-bottom: 20px;
  /* border: 2px solid #4c9cd5; */
  border-top: none;
  border-bottom: none;
}
/* :global(.el-dialog__header:before) {
  position: absolute;
  content: "";
  width: 34%;
  height: 2px;
  top: 0;
  background: #4c9cd5;
  left: 0;
} */
/* :global(.el-dialog__header:after) {
  position: absolute;
  content: "";
  width: 34%;
  height: 2px;
  top: 0;
  right: 0;
  background: #4c9cd5;
} */
.trapezoidInner {
  position: absolute;
  width: 30%;
  height: 0;
  border-top: 10px solid #4c9cd5;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
}
.trapezoidOuter {
  position: absolute;
  width: calc(30% - 16px);
  height: 2PX;
  background: #4c9cd5;
  transform: translateX(-50%);
  left: 50%;
  top: 13.5px;
}
.trapezoidOuterLeft {
  position: absolute;
  width: calc(1% + 12.2px);
  height: 16px;
  top: 0;
  left: 33.87%;
  box-sizing: border-box;
}
.el-dialog__header .lineSvg {
  position: absolute;
  left: 0;
  top: 0;
}
.trapezoidOuterRight {
  position: absolute;
  width: calc(1% + 12.2px);
  height: 16px;
  right: 33.87%;
  top: 0;
  box-sizing: border-box;
}
:global(.el-dialog__headerbtn) {
  width: 20px !important;
  height: 20px !important;
  background: #32c5ff !important;
  border-radius: 50% !important;
  right: 20px !important;
  top: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
:global(.el-dialog__headerbtn .el-icon) {
  width: 0.8em;
  height: 0.8em;
  color: #000000 !important;
}
.splitLineHeader {
  width: calc(100% - 40px);
  height: 1px;
  background: #258abd;
  position: absolute;
  bottom: 0;
  left: 20px;
}
:global(.el-dialog__footer) {
  position: relative;
  margin-right: 0 !important;
  font-size: 15px;
  color: #32c5ff;
  font-weight: 900 !important;
  /* border: 2px solid #4c9cd5; */
  border-top: none;
  border-bottom: none;
  padding-top: 13px !important;
  padding-bottom: 20px !important;

}
/* :global(.el-dialog__footer:before) {
  position: absolute;
  content: "";
  width: 34%;
  height: 2px;
  bottom: 0;
  background: #4c9cd5;
  left: 0;
} */
/* :global(.el-dialog__footer:after) {
  position: absolute;
  content: "";
  width: 34%;
  height: 2px;
  bottom: 0;
  right: 0;
  background: #4c9cd5;
} */
.trapezoidInner.footer {
  border-bottom: 10px solid #4c9cd5;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: none;
  top: calc(100% - 10px);
}
.trapezoidOuter.footer {
  top: calc(100% - 16px);
}
.trapezoidOuterLeft.footer {
  top: calc(100% - 17.5PX);
}
.trapezoidOuterRight.footer {
  top: calc(100% - 17.5PX);
}
.dialog-footer {
  display: flex;
  justify-content: center;
}
.dialog-content {
  padding: 0 60px;
  min-height: 150px;
}
:global(.el-dialog__body) {
  padding: 0 !important;
  position: relative;
}
.topPart {
  height: 22px;
  border-left: 2PX solid #4c9cd5;
  border-right: 2PX solid #4c9cd5;
}
.bottomPart {
  height: 21.5px;
  border-left: 2PX solid #4c9cd5;
  border-right: 2PX solid #4c9cd5;
  /*position: absolute;*/
  bottom: 0;
  width: 100%;
}
.leftPart {
  position: absolute;
  width: 12px;
  height: calc(100% - 60px);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #4c9cd5;
  left: 0;
  top: 30px;
}
.leftPartOut {
  position: absolute;
  width: 2PX;
  height: calc(100% - 77px);
  background: #4c9cd5;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
}
.rightPart {
  position: absolute;
  width: 12px;
  height: calc(100% - 60px);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #4c9cd5;
  right: 0;
  top: 30px;
}
.rightPartOut {
  position: absolute;
  width: 2PX;
  height: calc(100% - 77px);
  background: #4c9cd5;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
}
.leftPartTop {
  position: absolute;
  width: 16px;
  height: 20px;
  top: 2.5%;
  left: 0;
  box-sizing: border-box;
}
.leftPartBottom {
  position: absolute;
  width: 16px;
  height: 20px;
  bottom: 16PX;
  left: 0;
  box-sizing: border-box;
}
.rightPartTop {
  position: absolute;
  width: 16px;
  height: 20px;
  bottom: 16PX;
  right: 0;
  box-sizing: border-box;
}
.rightPartBottom {
  position: absolute;
  width: 16px;
  height: 20px;
  top: 3PX;
  right: 0;
  box-sizing: border-box;
}
/*tab切换*/
.tabContent {
  font-size: 20px;
  color: #dcdfe4;
  padding: 0 30px;
  cursor: pointer;
}
.tabContent .tab_active {
  font-size: 24px;
  color: #32c5ff;
}
:deep(.el-date-editor.el-input__wrapper){
  /* width: 100%; */
  box-shadow: none !important;
}
:deep(.el-date-editor .el-range-input,.el-range-separator) {
  color: #32C5FF;
  font-size: 19px;
}
:deep(.el-date-editor .el-range__icon){
  display: none;
}
:deep().el-date-editor .el-range__close-icon{
  font-size: 20px;
}
</style>
