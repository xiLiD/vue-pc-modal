<template>
  <div class="unit-comment">
    <div class="comment-top">
      <el-form>
        <el-form-item label="我来说两句">
          <el-select
            v-model="formInline.region"
            placeholder="请选择"
            size="mini"
          >
            <el-option
              v-for="(item, index) in types"
              :key="index"
              :label="item.name"
              :value="itme.key"
              size="mini"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            type="textarea"
            v-model="formInline.desc"
            maxlength="500"
            rows="4"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      types: [
        {
          name: "类型1",
          key: 1,
        },
        {
          name: "类型2",
          key: 2,
        },
        {
          name: "类型3",
          key: 3,
        },
      ],
      searchForm: {
        type: "",
        desc: "",
      },
    };
  },
};
</script>
<style lang="less" scoped>
</style>