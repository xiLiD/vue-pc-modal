<template>
  <div class="unit-wrapper">
    <div class="unit-container">
      <div class="contain-left">
        <div
          class="contain-left-t common-shadow"
          :style="{ height: getHeight('top') }"
        >
          <div class="modules-title">
            <div class="tit">商机信息</div>
            <div class="modules-more">更多</div>
          </div>
          <ul class="contain_list">
            <li>
              <p><span>19990</span> <label>个</label></p>
              <p>商机数</p>
            </li>
            <li>
              <p><span>14790</span> <label>户</label></p>
              <p>新增商机数</p>
            </li>
            <li>
              <p><span>15790</span> <label>户</label></p>
              <p>个人商机数</p>
            </li>
            <li>
              <p><span>17390</span> <label>条</label></p>
              <p>家庭商机数</p>
            </li>
            <li>
              <p><span>24990</span> <label>条</label></p>
              <p>集团商机数</p>
            </li>
          </ul>
        </div>
        <div
          class="contain-left-b common-shadow"
          :style="{ height: getHeight('top') }"
        >
          <div class="modules-no-grid" v-show="!checkGrid">
            <div class="modules-title">
              <div class="tit">问查算比开展情况</div>
              <div class="modules-more">更多</div>
            </div>
            <ul class="modules_tab">
              <li class="tab_active">达标与触客情况</li>
              <li>业务办理情况</li>
              <li>收入统计</li>
            </ul>
            <div class="contain_list other_list">
              <ul>
                <li>
                  <p><span>19990</span></p>
                  <p>新增达标人数</p>
                </li>
                <li>
                  <p><span>14790</span></p>
                  <p>调战达标人数</p>
                </li>
                <li>
                  <p><span>20%</span></p>
                  <p>调战达标率</p>
                </li>
              </ul>
              <ul style="margin-top: 10px">
                <li>
                  <p><span>17390</span></p>
                  <p>触达客户数</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>泡销工号数</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>人均触客数</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="modules-gird" v-show="checkGrid">
            <div class="modules-title">
              <div class="tit">潜在客户分布</div>
              <div class="modules-more">更多</div>
            </div>
            <div
              class="echarts-type"
              id="echarts-custom"
              style="width: 270px; height: 200px"
            ></div>
          </div>
        </div>
        <div
          class="contain-left-b common-shadow"
          :style="{ height: getHeight('bottom') }"
        >
          <div class="modules-no-grid" v-show="!checkGrid">
            <div class="modules-title">
              <div class="tit">用户标签使用情况</div>
            </div>
            <div class="contain_list other_list">
              <ul>
                <li>
                  <p><span>19990</span></p>
                  <p>标签总数</p>
                </li>
                <li>
                  <p><span>14790</span></p>
                  <p>已使用标签数</p>
                </li>
                <li>
                  <p><span>5000</span></p>
                  <p>标签使用总次数</p>
                </li>
              </ul>
            </div>
            <div class="rank-list">
              <div
                class="rank-item"
                v-for="(item, index) in rankList"
                :key="index"
              >
                <div class="rank-logo">
                  <el-image
                    style="width: 50px; height: 58px; zoom: 0.5"
                    fit="contain"
                    :src="getImage(index)"
                  ></el-image>
                </div>
                <div class="rank-right">
                  <div class="rank-right-t">
                    <div class="tag-row">{{ item.title }}</div>
                    <div class="tag-count">{{ item.count }}次</div>
                  </div>
                  <el-progress
                    :show-text="false"
                    :stroke-width="10"
                    :percentage="item.percentage"
                    :color="getColor(index)"
                  ></el-progress>
                </div>
              </div>
            </div>
          </div>
          <div class="modules-gird" v-show="checkGrid">
            <div class="modules-title">
              <div class="tit">营销方式</div>
              <div class="modules-more">更多</div>
            </div>
            <div class="market-list">
              <table>
                <thead>
                  <td>营销方式</td>
                  <td>是否支持</td>
                  <td>是否开展</td>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in marketTypes" :key="index">
                    <td>{{ item.type }}</td>
                    <td>{{ item.support == 0 ? "否" : "是" }}</td>
                    <td>{{ item.launch == 0 ? "否" : "是" }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="contain-center left-10">
        <div
          class="common-shadow center-top"
          :style="{ height: getHeight('center') }"
        >
          <el-button type="primary" size="mini" @click="checkGridMethod('city')"
            >切换至地市</el-button
          >
          <el-button type="success" size="mini" @click="checkGridMethod('gird')"
            >切换至网格</el-button
          >
        </div>
        <div
          class="center-bottom top-10 common-shadow check-list"
          :style="{ height: getHeight('bottom') }"
        >
          <div class="tag-box">
            <div class="tag-left tag-container">
              <div class="tag-title">小区标签</div>
              <div class="tag-list">
                <!-- <div class="tag-item">
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                    </div>
                    <div>
                      <p>高价值小区</p>
                      <p>
                        <span>121</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div>
                <div class="tag-item">
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                    </div>
                    <div>
                      <p>高价值小区</p>
                      <p>
                        <span>121</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div>
                <div class="tag-item">
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                    </div>
                    <div>
                      <p>高价值小区</p>
                      <p>
                        <span>121</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div>
                <div class="tag-item">
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                    </div>
                    <div>
                      <p>高价值小区</p>
                      <p>
                        <span>121</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div> -->

                <div
                  class="tag-item"
                  v-for="(item, index) in areaList"
                  :key="index"
                >
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                      <span class="tag-txt">
                        <span>{{ item.title.substring(0, 1) }}</span>
                      </span>
                    </div>
                    <div>
                      <p>{{ item.title }}</p>
                      <p>
                        <span>{{ item.count }}</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tag-right tag-container tag-line">
              <div class="tag-title">客户标签</div>
              <div class="tag-list">
                <div
                  class="tag-item"
                  v-for="(item, index) in customList"
                  :key="index"
                >
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                      <span class="tag-txt">
                        <span>{{ item.title.substring(0, 1) }}</span>
                      </span>
                    </div>
                    <div>
                      <p>{{ item.title }}</p>
                      <p>
                        <span>{{ item.count }}</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div>
                <!-- <div class="tag-item">
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                    </div>
                    <div>
                      <p>高价值小区</p>
                      <p>
                        <span>121</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div>
                <div class="tag-item">
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                      <span class="tag-txt">
                        <span>高</span>
                      </span>
                    </div>
                    <div>
                      <p>高价值小区</p>
                      <p>
                        <span>121</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div>
                <div class="tag-item">
                  <div class="item-left">
                    <div class="tag-img">
                      <img :src="require('./images/area.jpg')" />
                    </div>
                    <div>
                      <p>高价值小区</p>
                      <p>
                        <span>121</span>
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                  <div class="item-icon">
                    <p>
                      <i class="el-icon-tickets"></i>
                    </p>
                    <p>
                      <i class="el-icon-notebook-2"></i>
                    </p>
                    <p>
                      <i class="el-icon-setting"></i>
                    </p>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!-- <div class="check-list-search">
            <div class="search-form">
              <el-form :inline="true">
                <el-form-item>
                  <div class="search-title">小区清单</div>
                </el-form-item>
                <el-form-item class="content-search">
                  <el-input
                    placeholder="请输入内容"
                    v-model="checkTarget.search"
                    class="input-with-select"
                    size="mini"
                  >
                    <el-select
                      v-model="checkTarget.belong"
                      slot="prepend"
                      placeholder="用户归属网格"
                      size="mini"
                    >
                      <el-option label="网格1" value="1"></el-option>
                      <el-option label="网格2" value="2"></el-option>
                      <el-option label="网格3" value="3"></el-option>
                    </el-select>
                    <el-button
                      slot="append"
                      icon="el-icon-search"
                      size="mini"
                    ></el-button>
                  </el-input>
                </el-form-item>
                <el-form-item class="unit-search-btn">
                  <el-button type="primary" plain size="mini"
                    >字段设置</el-button
                  >
                  <el-button type="primary" plain size="mini"
                    >场景筛选</el-button
                  >
                  <el-button type="primary" plain size="mini"
                    >自主营销</el-button
                  >
                  <el-button type="primary" plain size="mini"
                    >策略营销</el-button
                  >
                  <el-button type="primary" plain size="mini"
                    >工单派送</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
            <el-table
              :data="tableData"
              size="mini"
              style="width: 100%"
              border
              align="center"
              :height="getTableHeight"
              :header-cell-style="{
                'background-color': '#B9D3EE',
                color: '#fff',
              }"
              :row-class-name="tableRowClassName"
            >
              <el-table-column prop="phone" label="电话号码" fixed width="120">
              </el-table-column>
              <el-table-column
                prop="currentName"
                label="当前主套餐名称"
                width="200"
              >
              </el-table-column>
              <el-table-column prop="gird" label="用户归属网格名称" width="200">
              </el-table-column>
              <el-table-column prop="area" label="通话归属区县名称" width="120">
              </el-table-column>
              <el-table-column prop="areaName" label="小区名称" width="120">
              </el-table-column>
              <el-table-column
                prop="monthMove"
                label="当月国内流量(MB)"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="countryMove"
                label="超套餐流量(MB)"
                width="120"
              >
              </el-table-column>
            </el-table>
            <el-pagination
              background
              :current-page.sync="queryData.pageNo"
              :page-size="queryData.pageSize"
              :total="queryData.total"
              @size-change="getChange"
              @current-change="currentSearch"
              style="margin-top: 20px; text-align: center"
              :page-sizes="[10, 20, 30, 50, 70, 100]"
              layout="total, sizes, prev, pager, next"
            />
          </div> -->
        </div>
      </div>
      <div class="contain-right left-10">
        <div class="modules-no-grid" v-show="!checkGrid">
          <div class="common-shadow" :style="{ height: getHeight('top') }">
            <div class="modules-title">
              <div class="tit">精准营销统计</div>
              <div class="modules-more">更多</div>
            </div>
            <ul class="contain_list right_list">
              <li>
                <p><span>19990</span></p>
                <p>生效任务数</p>
              </li>
              <li>
                <p><span>14790</span></p>
                <p>外层级派发任务数</p>
              </li>
              <li>
                <p><span>15790</span></p>
                <p>直达派发任务数</p>
              </li>
              <li>
                <p><span>17390</span></p>
                <p>沙盘派发任务数</p>
              </li>
              <li>
                <p><span>12%</span></p>
                <p>任务客户数</p>
              </li>
              <li>
                <p><span>12%</span></p>
                <p>已触达任务数</p>
              </li>
            </ul>
          </div>
          <div
            class="common-shadow top-10"
            :style="{ height: getHeight('top') }"
          >
            <div class="modules-title">
              <div class="tit">精准营销活动类型分布</div>
              <div class="modules-more">更多</div>
            </div>
            <div
              class="echarts-type"
              id="echarts-type"
              style="width: 270px; height: 200px"
            ></div>
          </div>
          <div
            class="common-shadow top-10"
            :style="{ height: getHeight('bottom') }"
          >
            <div class="modules-title">
              <div class="tit">精准营销办理率TOP5</div>
              <div class="modules-more">更多</div>
            </div>
            <div class="market-list">
              <table>
                <thead>
                  <td>活动名称</td>
                  <td>用户标签</td>
                  <td>办理率</td>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in marketList" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.lable }}</td>
                    <td>{{ item.rate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modules-grid" v-show="checkGrid">
          <div class="common-shadow" :style="{ height: getHeight('top') }">
            <div class="modules-title">
              <div class="tit">小区场景任务调度统计</div>
              <div class="modules-more">更多</div>
            </div>
            <ul class="contain_list right_list">
              <li>
                <p><span>100</span></p>
                <p>任务总数</p>
              </li>
              <li>
                <p><span>15</span></p>
                <p>已派发</p>
              </li>
              <li>
                <p><span>15</span></p>
                <p>待审核</p>
              </li>
              <li>
                <p><span>17390</span></p>
                <p>待执行</p>
              </li>
              <li>
                <p><span>12%</span></p>
                <p>已完成</p>
              </li>
              <li>
                <p><span>12%</span></p>
                <p>已关闭</p>
              </li>
            </ul>
          </div>
          <div
            class="common-shadow top-10"
            :style="{ height: getHeight('right-b') }"
          >
            <div class="modules-title">
              <div class="tit">小区场景任务调度完成率TOP5</div>
              <div class="modules-more">更多</div>
            </div>
            <div class="market-list">
              <table>
                <thead>
                  <td>活动名称</td>
                  <td>完成率</td>
                  <td>排行</td>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in marketList" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.lable }}</td>
                    <td>{{ item.rate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import Options from "./options.js";
export default {
  computed: {
    getTableHeight() {
      return parseInt((window.innerHeight - 20 - 20) * 0.4 - 120) + "px";
    },
  },
  data() {
    return {
      queryData: {
        total: 1,
        pageSize: 10,
        pageNo: 1,
      },
      rankList: [
        {
          title: "标签1",
          count: 1000,
          percentage: 90,
        },
        {
          title: "标签2",
          count: 800,
          percentage: 70,
        },
        {
          title: "标签3",
          count: 750,
          percentage: 50,
        },
        {
          title: "标签4",
          count: 700,
          percentage: 35,
        },
        {
          title: "标签5",
          count: 500,
          percentage: 30,
        },
      ],
      checkTarget: {
        search: "",
        belong: "1",
      },
      tableData: [
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
      ],
      marketList: [
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
      ],
      checkGrid: true, // 地图切换至 网格
      marketTypes: [
        {
          type: "地摊",
          support: 1,
          launch: 0,
        },
        {
          type: "电梯",
          support: 0,
          launch: 0,
        },
        {
          type: "信箱",
          support: 0,
          launch: 0,
        },
        {
          type: "广告栏",
          support: 1,
          launch: 0,
        },
      ],
      customEcharts: "",
      typeEcharts: "",
      areaList: [
        {
          title: "高价值小区",
          count: "121",
        },
        {
          title: "全量宽带小区",
          count: "121",
        },
        {
          title: "大区大村小区",
          count: "121",
        },
        {
          title: "种子小区",
          count: "121",
        },
        {
          title: "低零小区",
          count: "121",
        },
      ],
      customList: [
        {
          title: "在网小区",
          count: "121",
        },
      ],
    };
  },
  mounted() {
    // this.initEcharts();
    // this.initCustom();
    let types = this.checkGrid ? "grid" : "city";
    this.checkGridMethod(types);
  },
  methods: {
    checkGridMethod(types) {
      console.log(this.customEcharts, this.typeEcharts);
      if (types == "city") {
        this.checkGrid = false;

        if (this.typeEcharts == "") {
          this.initEcharts();
        }
      } else {
        this.checkGrid = true;

        if (this.customEcharts == "") {
          this.initCustom();
        }
      }
    },
    initCustom() {
      let customEcharts = echarts.init(
        document.getElementById("echarts-custom")
      );
      this.customEcharts = customEcharts;
      console.log(customEcharts);
      customEcharts.setOption(Options.custom);
    },
    initEcharts() {
      let typeEcharts = echarts.init(document.getElementById("echarts-type"));
      console.log(typeEcharts);
      this.typeEcharts = typeEcharts;
      typeEcharts.setOption(Options.types);
    },
    currentSearch(e) {
      this.getSearch();
    },
    getChange(e) {
      this.queryData.pageNo = 1;
      this.queryData.pageSize = e;
      this.getSearch();
    },
    getSearch() {
      let queryData = this.queryData;
      var params = {
        ...queryData,
      };
      console.log(params);
    },
    tableRowClassName({ row, rowIndex }) {
      return rowIndex % 2 == 0 ? "" : "line-row";
    },
    getHeight(current) {
      let heightValue = "";
      switch (current) {
        case "top":
          // 左上
          heightValue = (window.innerHeight - 20 - 20) * 0.33;
          break;
        case "bottom":
          // 左下
          heightValue = (window.innerHeight - 20 - 20) * 0.34;
          break;
        case "center":
          // 中上
          heightValue = (window.innerHeight - 20 - 20) * 0.66 + 10;
          break;
        case "right-b":
          // 中上
          heightValue = (window.innerHeight - 20 - 20) * 0.67 + 10;
          break;
      }
      return parseInt(heightValue) + "px";
    },
    getImage(index) {
      return require("./images/get_" + (index + 1) + ".jpg");
    },
    getColor(index) {
      let color = "#409EFF";
      switch (Number(index)) {
        case 0:
          color = "#F56C6C";
          break;
        case 1:
          color = "#E6A23C";
          break;
        case 2:
          color = "#67C23A";
          break;
      }
      return color;
    },
  },
};
</script>
<style lang="less">
@import "../../../assets/common.less";
.common-shadow {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}
/deep/ .el-table .line-row {
  background: #e8f2fb !important;
}

.unit-wrapper {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  /deep/ .el-form-item__content {
    line-height: 2;
  }
  // .el-pagination {
  //   margin-top: 5px !important;
  // }
  .unit-container {
    display: flex;
    .contain-left,
    .contain-right {
      width: 20%;
      .contain-left-b {
        margin-top: 10px;
        .modules_tab {
          display: flex;
          margin-top: 5px;
          // padding-bottom: 10px;
          border-bottom: 1px solid #ebebeb;
          li {
            cursor: pointer;
            margin-left: 15px;
            font-size: 12px;
            color: rgb(211, 222, 231);
            padding-bottom: 10px;
            &:nth-child(1) {
              margin-left: 0;
            }
          }
          li.tab_active {
            color: rgb(15, 174, 254);
            position: relative;
          }
          li.tab_active::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: rgb(15, 174, 254);
          }
        }
        .rank-list {
          zoom: 0.75;
          padding: 0 10px;
          .rank-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            margin-top: 3px;
            .rank-logo {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .rank-right {
              width: 85%;
              .rank-right-t {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin-bottom: 5px;
                .tag-row {
                  font-size: 14px;
                  color: rgb(105, 105, 105);
                }
                .tag-count {
                  font-size: 12px;
                  color: rgb(152, 152, 152);
                }
              }
            }
          }
        }
      }
      .modules-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tit {
          font-size: 14px;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .modules-more {
          font-size: 12px;
          color: rgb(15, 174, 254);
          opacity: 0.8;
          cursor: pointer;
        }
      }
      .other_list {
        ul {
          display: flex;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
          background-color: #f2fbff;
        }
        li {
          width: 33.3% !important;
          white-space: nowrap;
          padding: 10px 0 !important;
          // text-align: center;
          &:nth-child(3n + 2) {
            margin: 30px 0 0 !important;
          }
          &:nth-child(2) {
            margin: 0 0 0 !important;
          }
        }
      }

      .contain_list {
        font-size: 12px;
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        // margin: 5px 0;
        margin-top: 5px;
        // padding: 10px;
        box-sizing: border-box;
        li {
          width: 30%;
          box-sizing: border-box;
          padding: 15px 10px;
          background-color: #f2fbff;
          // text-align: center;
          white-space: nowrap;
          &:nth-child(3n + 2) {
            margin: 15px 5% 0;
          }
          margin-top: 15px;
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            margin-top: 0;
          }
          p {
            &:nth-child(1) {
              font-size: 14px;
              white-space: nowrap;
              span {
                &:nth-child(1) {
                  font-size: 16px;
                  font-weight: bold;
                  color: rgb(15, 174, 254);
                }
                // &:nth-child(2) {
                // }
              }
              label {
                color: #aaa;
                margin-left: 2px;
                font-size: 12px;
              }
            }
            &:nth-child(2) {
              font-size: 12px;
              font-weight: 600;
              margin-top: 2px;
            }
          }
        }
      }
      .right_list {
        li {
          width: 45%;

          padding: 8px;
          margin: auto !important;
          margin-top: 5px !important;
          &:nth-child(1),
          &:nth-child(2) {
            margin-top: 0 !important;
          }
          p {
            &:nth-child(2) {
              margin-top: 0 !important;
            }
          }
        }
      }
      .market-list {
        margin-top: 10px;
        // padding: 5px;

        table {
          width: 100%;
          background-color: #f2fbff;
          // font-size: 12px;
          color: #989898;
          td {
            padding: 10px;
          }
          tbody {
            td {
              font-size: 12px;
            }
          }
          thead {
            td {
              font-size: 13px;
              padding: 10px;
            }
          }
        }
      }
    }
    .contain-center {
      width: 60%;
      .tit {
        font-size: 16px;
        color: #222;
      }
      .unit-search-btn {
        .el-button {
          margin-left: 20px;
          margin-left: 10px;
          &:nth-child(1) {
            margin-left: 0;
          }
        }
      }
    }
    .top-10 {
      margin-top: 10px;
    }
    .left-10 {
      margin-left: 10px;
    }
  }
}
.tag-box {
  display: flex;
  justify-content: space-between;
  .tag-left {
    width: 64%;
    .tag-item {
      width: calc(50% - 5px);
      margin-top: 8px;
      &:nth-child(2n) {
        margin-left: 10px;
      }
      &:nth-child(1),
      &:nth-child(2) {
        margin-top: 0;
      }
    }
  }
  .tag-right {
    width: 32%;
    .tag-item {
      width: 100%;
      margin-top: 8px;
      &:nth-child(1) {
        margin-top: 0;
      }
    }
  }
  .tag-line {
    position: relative;
  }
  .tag-line::after {
    content: "";
    position: absolute;
    left: -20px;
    width: 5px;
    height: 60%;
    top: 50%;
    transform: translateY(-50%);
    background-image: linear-gradient(
      #fff,
      rgb(228, 235, 240) 15%,
      rgb(204, 219, 227) 50%,
      rgb(228, 235, 240) 85%,
      #fff
    ); /* 标准的语法（必须放在最后） */
  }
  .tag-container {
    .tag-title {
      text-align: center;
      font-size: 14px;
      letter-spacing: 1px;
      font-weight: 600;
    }
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
    }
    .tag-item {
      display: flex;
      align-items: center;
      padding: 5px 20px 5px 30px;
      justify-content: space-between;
      background-color: rgb(246, 246, 246);
      flex-wrap: wrap;
      box-sizing: border-box;
      .item-left {
        display: flex;
        > div {
          &:nth-child(2) {
            margin-left: 15px;
          }
        }
      }
      .item-icon {
        p {
          i {
            cursor: pointer;
          }
          &:nth-child(2) {
            margin: 3px 0;
          }
        }
      }
    }
    img {
      width: 40px;
      height: 40px;
    }
    .tag-img {
      position: relative;
      .tag-txt {
        position: absolute;
        bottom: 3.5px;
        right: 3.5px;
        box-shadow: 2px 2px #fff;
        background: rgb(255, 152, 58);
        font-size: 12px;
        width: 12px;
        height: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        font-weight: 600;
        span {
          zoom: 0.8;
        }
      }
    }
    p {
      font-size: 12px;
      &:nth-child(2) {
        margin-top: 5px;
        span {
          color: rgb(15, 174, 254);
          &:nth-child(1) {
            font-size: 16px;
            font-weight: 600;
          }
          &:nth-child(2) {
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.check-list-search {
  .search-form {
    .el-form-item__content {
      line-height: 2;
    }
    .el-form--inline .el-form-item {
      margin-bottom: 0;
    }
  }
  .el-table {
    margin-top: 5px;
  }
  // div::-webkit-scrollbar {
  //   width: 5px;
  //   height: 5px;
  //   /**/
  // }
  .el-pagination {
    // zoom: 0.85;
    margin-top: 0px !important;
  }
}
</style>