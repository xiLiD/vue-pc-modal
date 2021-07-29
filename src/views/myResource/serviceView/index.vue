<template>
  <div class="unit-wrapper">
    <div class="unit-container">
      <div class="contain-left">
        <div class="contain-left-t">
          <div class="modules-title">
            <h3>攻坚进展</h3>
          </div>
          <div class="left-t-contain">
            <ul>
              <li>
                <p>
                  <el-avatar
                    shape="square"
                    :size="50"
                    fit="contain"
                    src="./images/target.jpg"
                  ></el-avatar>
                </p>
                <p>攻坚目标数</p>
                <p>3968965</p>
              </li>
              <li>
                <p>
                  <el-avatar
                    shape="square"
                    :size="50"
                    fit="contain"
                    src="./images/finish.jpg"
                  ></el-avatar>
                </p>
                <p>攻坚完成数</p>
                <p>3968965</p>
              </li>
              <li>
                <p>
                  <el-avatar
                    shape="square"
                    :size="50"
                    fit="contain"
                    src="./images/rate.jpg"
                  ></el-avatar>
                </p>
                <p>摘牌率</p>
                <p>3968965</p>
              </li>
              <li>
                <p>
                  <el-avatar
                    shape="square"
                    :size="50"
                    fit="contain"
                    src="./images/rank.jpg"
                  ></el-avatar>
                </p>
                <p>摘牌率排行</p>
                <p>3968965</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="contain-left-b">
          <div class="modules-title">
            <h3>业务发展</h3>
            <span>更多</span>
          </div>
        </div>
      </div>
      <div class="contain-center"></div>
      <div class="contain-right"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.unit-wrapper {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  .unit-container {
    display: flex;
    .contain-left,
    .contain-right {
      width: 20%;
    }
    .contain-center {
      width: 60%;
    }
  }
}
</style>