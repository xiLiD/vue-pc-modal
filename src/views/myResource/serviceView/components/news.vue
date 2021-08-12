<template>
  <div class="box">
    <div class="left ">
      <div
        class="left-one compoonents"
        :style="{'height': getHeight('left')}"
      >
        <p class="makeone"> 攻坚进展</p>
        <div class="makedatas">
          <div class="makedata">
            <img :src="imgurl.imgUrl1">
            <p class="yun">攻坚目标数</p>
            <p>546545</p>
          </div>
          <div class="makedata">
            <img :src="imgurl.imgUrl2">
            <p class="yun">攻坚完成数</p>
            <p>546545</p>
          </div>
          <div class="makedata">
            <img :src="imgurl.imgUrl3">
            <p class="yun">摘牌率</p>
            <p><span>56.35%</span><span class="yundata">36.3%</span></p>
          </div>
          <div class="makedata">
            <img :src="imgurl.imgUrl4">
            <p class="yun">摘牌率排名</p>
            <span>2</span>
          </div>
        </div>
      </div>
      <div
        class="left-tow compoonents"
        :style="{'height':getHeight('left')}"
      >
        <div class="makemakeone"> <span class="makeone">业务发展</span>
          <span class="more">更多</span>
        </div>

        <el-form
          :inline="true"
          :model="formInline"
          size="mini"
          label-min-width="105px"
        >
          <el-form-item
            class="fromstyle"
            style="min-width: 100px; height:30px"
          >
            <el-select
              style="width:120px; margin-left: 10px;"
              v-model="formInline.region"
              placeholder="移动宽带"
            >
              <el-option
                label="移动宽带一"
                value="shanghai"
              ></el-option>
              <el-option
                label="移动宽带二"
                value="beijing"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="servicedata">
          <div class="servicedatas">
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">10000</p>
              <p>总户数</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">20%</p>
              <p>实装率</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">12%</p>
              <p>实装提升数</p>
            </span>
          </div>
          <div class="servicedatas">
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">10000</p>
              <p>实装空白小区</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">20%</p>
              <p>实装低占小区</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">12%</p>
              <p>实装高占小区</p>
            </span>
          </div>
          <div class="servicedatas">
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">10000</p>
              <p>客户达到数</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">20%</p>
              <p>客户新增数</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">12%</p>
              <p>客户净增数</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div
        class="box-card compoonents"
        :style="{'height':getHeight('content')}"
      >
        <div @click="switchs">切换</div>
        <div @click="clicks">打開</div>

      </div>
      <div class="foot">
        <div
          class="foot-one compoonents"
          :style="{'height':getHeight('foot')}"
        >
          <div class="makeone">近半年业务发展走势</div>
          <!-- <div class="makeone">近半年业务发展走势</div> -->
          <pthree></pthree>
          <!-- <p>1</p> -->
        </div>
        <div
          class="foot-tow compoonents"
          :style="{'height':getHeight('foot')}"
        >
          <div class="makeone">
            <span class="">投诉量及分布类型</span>
            <!-- <span class="">投诉量及分布类型</span> -->

            <!-- <div class="makeone">投诉量及分布类型</div> -->
            <span class="radios">
              <el-radio-group
                v-model="radio3"
                size="mini"
              >
                <el-radio-button label="按投诉类型"></el-radio-button>
                <el-radio-button label="按客户类型"></el-radio-button>
              </el-radio-group>
            </span>
          </div>
          <div class="footdata">
            <span class="cehe">投诉用户总人数</span>
            <span class="cehedata">35421
              <!-- <i class="iconfont icon-xiajiang"></i> -->
            </span>
            <span class="baifbi">36.2%
              <i class="iconfont icon-shangsheng"></i>
            </span>
          </div>

          <ptow></ptow>
          <!-- <span>122342</span> -->

        </div>
      </div>
    </div>
    <div
      v-if="isshow"
      class="right left "
      :style="{'height':rightHeight} + 'px'"
    >
      <div
        class="right-one compoonents"
        :style="{'height':getHeight('right')}"
      >
        <div class="makeone">消费画像</div>

        <div class="servicedata">
          <div class="consume">
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">10000元/平</p>
              <p>近期房价</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">10000元/平</p>
              <p>近三个平均ARPU</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">10000元/平</p>
              <p>近三个平均DPU</p>
            </span>
          </div>
          <el-form
            :inline="true"
            :model="formInline"
            size="mini"
            label-min-width="70px"
            class="biao"
          >
            <el-form-item
              class="fromstyle"
              style="min-width: 70px; height:13px"
            >
              <el-select
                style="width:120px;"
                v-model="formInline.region"
                placeholder="魔百盒"
              >
                <el-option
                  label="魔百盒一"
                  value="shanghai"
                ></el-option>
                <el-option
                  label="魔百盒二"
                  value="beijing"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="consume">
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">10000</p>
              <p>用户到达数</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">20%</p>
              <p>用户参透率</p>
            </span>
            <span class="servicedatasspan">
              <p class="servicedatasspanfont">12%</p>
              <p>收入</p>
            </span>
          </div>
        </div>

      </div>
      <div
        class="right-tow compoonents"
        :style="{'height':getHeight('right')}"
      >
        <div class="makeone">竟对信息-卡号对比</div>
        <newone> </newone>
      </div>
      <div
        class="right-three compoonents"
        :style="{'height':getHeight('right')}"
      >
        <div class="makeone">竟对信息-宽带对比</div>
        <newtow> </newtow>

      </div>
    </div>

    <div
      v-else
      class="right"
    >
      <div
        class="right-one compoonents"
        :style="{'height':getHeight('rights')}"
      >
        <div class="makemakeone">
          <span class="makeone">营运统计</span>
          <span class="censusmore">更多</span>
        </div>
        <div class="censusdata">
          <div class="censusdatas">
            <div> <span><img :src="img.img1"></span> <span class="font">客户</span></div>

            <div class="censusdatasdiv">
              <div>
                <p class="censusdataspfont">在网客户数</p>
                <p class="censusdataspfont">通信客户</p>
              </div>
              <div>
                <p class="data">2.65万户</p>
                <p class="data">2.65万户</p>
              </div>
            </div>
            <!--  <p class="censusdatasp">
                <span><img :src="img.img1"></span> <span class="font">客户</span>
            </p>
            <p class="censusdatasp">
              <span class="censusdataspfont">在网客户数</span>
              <span class="data">2.65万户</span>
            </p>
            <p class="censusdatasp">
              <span class="censusdataspfont">通信客户</span>
              <span class="data">2.65万户</span>
            </p> -->

          </div>
          <div class="censusdatas">
            <div> <span><img :src="img.img2"></span> <span class="font">收入</span></div>

            <div class="censusdatasdiv">
              <div>
                <p class="censusdataspfont">年度累计记账收入</p>
                <p class="censusdataspfont">当月出账收入</p>
              </div>
              <div>
                <p class="data">2.65亿元</p>
                <p class="data">2.65亿元</p>
              </div>
            </div>
            <!-- <p class="censusdatasp">
              <span><img :src="img.img2"></span>
              <span class="font">收入</span>
            </p> -->
            <!-- <p class="censusdatasp">
              <span class="censusdataspfont">年度累计记账收入</span>
              <span class="data">2.65亿元</span>
            </p>
            <p class="censusdatasp">
              <span class="censusdataspfont">当月出账收入</span>
              <span class="data">2.65亿元</span>
            </p>

            <div class="censusdatasdiv">
              <div>
                <p class="censusdataspfont">在网客户数</p>
                <p class="censusdataspfont">通信客户</p>
              </div>
              <div>
                <p class="data">2.65万户</p>
                <p class="data">2.65万户</p>
              </div>
            </div> -->
          </div>
          <div class="censusdatas">
            <div> <span><img :src="img.img3"></span> <span class="font">份额</span></div>

            <div class="censusdatasdiv">
              <div>
                <p class="censusdataspfont">期末市场份额</p>
                <p class="censusdataspfont">新增市场份额</p>
              </div>
              <div>
                <p class="data">58.65%</p>
                <p class="data">56.65%</p>
              </div>
            </div>
            <!-- <p class="censusdatasp">
              <span><img :src="img.img3"></span>
              <span class="font">份额</span>
            </p>
            <p class="censusdatasp">
              <span class="censusdataspfont">期末市场份额</span>
              <span class="data">58.65%</span>
            </p>
            <p class="censusdatasp">
              <span class="censusdataspfont">新增市场份额</span>
              <span class="data">56.65%</span>
            </p> -->
          </div>
        </div>

      </div>
      <div
        class="right-tow compoonents"
        :style="{'height':getHeight('right')}"
      >
        <div class="makemakeone">
          <span class="makeone">效绩考核评分</span>
          <el-form
            label-width="10px"
            class="demo-ruleForm"
            style="display: inline-block;"
          >
            <el-form-item>
              <el-date-picker
                v-model="ruleForm.date1"
                size=mini
                type="date"
                placeholder="2021-07-30"
                style="width:105px; height: 10px; font-size: 5px;"
              ></el-date-picker>
            </el-form-item>
          </el-form>
          <span class="grademore">更多</span>
        </div>
        <div class="fonts">
          <span class="font">地市名称</span> <span class="font">总得分</span> <span class="font">排名</span>

        </div>
        <div class="gradedata">
          <div class="gradedatas">
            <div class="gradegold">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div class="gradedatasdiv">
              <p
                class="gradedatasp"
                v-for="(a,index) in data.gradedataone"
                :key="index"
              >{{a}}</p>
            </div>
          </div>
          <div class="gradedatas">
            <div class="gradedatasdiv">
              <p
                class="gradedatasp"
                v-for="(i,index) in data.gradedatatow"
                :key="index"
              >{{i}}</p>
            </div>

          </div>
          <div class="gradedatas">
            <div class="gradedatasdiv">
              <p
                class="gradedatasp"
                v-for="(i,index) in data.gradedatathree"
                :key="index"
              >{{i}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- -----------------弹出框 -->
    <!-- fdsafksoadpfjoi -->
    <el-dialog
      title="长房半岛蓝湾（他建）二期小区"
      top=15vh
      :visible.sync="dialogVisible"
      width="57%"
      lock-scroll:true
      custom-class="dialog"
    >
      <div class="">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="基础信息"
            name="first"
          >
            <div class="pops">
              <div class="pops-one">
                <div class="pops-onedata">
                  <p
                    v-for="(item,index) in popdataone"
                    :key="index"
                  >{{item}}:</p>
                </div>
                <div class="pops-towdata">
                  <p
                    v-for="(item,index) in popdatatow"
                    :key="index"
                  >{{item}}</p>
                </div>

              </div>
              <div class="pops-tow">
                <div class="pops-onedata">
                  <p
                    v-for="(item,index) in popdataone"
                    :key="index"
                  >{{item}}:</p>
                </div>
                <div class="pops-towdata">
                  <p
                    v-for="(item,index) in popdatatow"
                    :key="index"
                  >{{item}}</p>
                </div>
              </div>
            </div>

          </el-tab-pane>
          <!-- <el-tab-pane
            label="配置管理"
            name="second"
          >配置管理</el-tab-pane>
          <el-tab-pane
            label="角色管理"
            name="third"
          >角色管理</el-tab-pane>
          <el-tab-pane
            label="定时任务补偿"
            name="fourth"
          >定时任务补偿</el-tab-pane> -->
        </el-tabs>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import newone from '../grid/newone.vue'
import newtow from '../grid/newtow.vue'
import pthree from "../grid/pthree.vue"
import ptow from "../grid/ptow.vue"
export default {
  components: {
    newone,
    newtow,
    pthree,
    ptow

  },
  computed: {
    // leftWidth () {
    //   return ((window.innerWidth) * 0.2) - 10
    // },
    // contentWidth () {
    //   return (window.innerWidth) * 0.59 - 20
    // },
    // rightWidth () {
    //   return (window.innerWidth) * 0.21 - 10
    // },
    // ------------------------------------
    // leftHeight () {
    //   return ((window.innerHeight)) - 30
    // },
    // contentHeight () {
    //   return (window.innerHeight) - 30
    // },
    // rightHeight () {
    //   return (window.innerHeight) - 30
    // },
  },
  data () {
    return {
      isshow: true,
      radio3: '按投诉类型',
      imgurl: {
        imgUrl1: require('../../assets/img/p1.png'),
        imgUrl2: require('../../assets/img/p2.png'),
        imgUrl3: require('../../assets/img/p3.png'),
        imgUrl4: require('../../assets/img/p4.png'),
      },
      img: {
        img1: require('../../assets/img/kehu.png'),
        img2: require('../../assets/img/sr.png'),
        img3: require('../../assets/img/fenge.png'),
      },
      formInline: {
        user: '',
        region: ''
      },
      ruleForm: {
        date1: ""
      },
      dialogVisible: false,
      data: {
        gradedataone: ['全省', '长沙', '**', '**', '**', '**', '**'],
        gradedatatow: ['****', '****', '***', '**', '**', '*****', '**'],
        gradedatathree: ['--', '1', '2', '3', '4', '5', '6',]
      },
      popdataone: ['11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33',],
      popdatatow: ['11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33', '44', '11', '22', '33',],
      activeName: 'first'
    }
  },
  methods: {
    getHeight (keys) {
      let height = '';
      switch (keys) {
        case 'left':
          height = (window.innerHeight - 20 - 10) * 0.5
          break;
        case 'content':
          height = (window.innerHeight - 20 - 10) * 0.67
          break;
        case 'foot':
          height = (window.innerHeight - 20 - 10) * 0.33
          break;
        case 'right':
          height = (window.innerHeight - 30 - 6) * 0.33
          break;
        case 'rights':
          height = (window.innerHeight - 30) * 0.67
          break;
      }
      return height + 'px'
    },
    handleClick (tab, event) {
      console.log(tab, event);
    },
    clicks () {
      this.dialogVisible = true
    },
    switchs () {
      console.log(this.isshow)
      this.isshow = !this.isshow
    },
    widths () {
      // console.log(((window.innerWidth - 500) * 0.2) + 'px')
    },
    contentWidths () {
      // console.log(((window.innerWidth - 500) * 0.5) + 'px')
    }
  },
  mounted () {

  },
}
</script>

<style lang="less" scoped>
// @import "//at.alicdn.com/t/font_2624878_lwqhgqompma.css";
@import "//at.alicdn.com/t/font_2728018_qdbd6tbcpqh.css";
.compoonents {
  box-sizing: border-box;
  box-shadow: 0 0 5px #cccccc;
  padding: 9px;
}
.left-tow /deep/ .el-input__inner {
  height: 24px;
}
.left-tow /deep/ .el-select--mini {
  line-height: 52px;
}
.makemakeone /deep/.el-form-item__content {
  line-height: 17px;
}
.makemakeone /deep/ .el-form-item {
  padding: 0;
  height: 10px;
  margin-bottom: 0;
}
.makemakeone /deep/.el-input__inner {
  padding-right: 10px;
  height: 20px;
}
.makemakeone /deep/ .el-input__prefix {
  left: 5px;
  // right: -2px;
  top: -4px;
}
/deep/ .compoonents .el-select--mini {
  margin-left: 0 !important;
}
.box /deep/ .el-dialog__header {
  background: rgb(95, 180, 250);
  // height: 10px;
  padding: 2px 5px 6px;
  color: white;
}
.box /deep/ .el-dialog__header .el-dialog__title {
  color: #ffffff;
  font-size: 14px;
}
.box /deep/ .el-dialog__headerbtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.box /deep/ .el-dialog__body {
  padding: 0 10px;
}
.radios /deep/ .el-radio-button--mini .el-radio-button__inner {
  margin-left: 2px;
  width: 70px;
  font-size: 2px;
  // color: red;
  padding: 3px 4px;
}
.mobaihe /deep/ .el-form-item {
  margin-bottom: 2px;
  border: 1px solid blanchedalmond;
}
.left {
  // background: cornflowerblue;
  // margin: 10px;
  width: 20%;
}
.left-one {
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  background: white;
}
.left-tow {
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  margin-top: 10px;
  background: white;
}

.box-card {
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  // display: inline-block;
  background: white;
}
.foot {
  display: flex;
  // border: 1px solid red;
  margin-top: 10px;
  // display: inline-block;
  // border: 1px solid red;
  // background: deeppink;
}
.foot-one {
  width: calc(64% - 5px);
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  // display: inline-block;
  background: white;
}
.foot-tow {
  width: calc(36% - 5px);
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  // display: inline-block;
  margin-left: 10px;
  background: white;
}
.right {
  width: 20%;
}
.right-one {
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  background: white;
  // padding: 10px;
}
.right-tow {
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  margin-top: 10px;
  background: white;
}
.right-three {
  box-sizing: border-box;
  // box-shadow: 0 0 5px #cccccc;
  margin-top: 10px;
  background: white;
}
.dialog {
  background: red;
}
.box {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;

  /* justify-items: center; */
  /* align-items: center; */
}
.content {
  // height: 100px;
  width: calc(60% - 20px);
}
.text {
  /* align-items: center; */
  // text-align: center;
  // line-height: 420px;
}
// .demo-ruleForm {
//   height: 10px;
//   width: 20px;
// }

// .box .box-card {
//   background: white;
//   margin-top: 5px;
//   // height: 420px;
//   // width: 860px;
//   width: 60%;
//   height: 65%;
// }
// .left {
//   height: 99%;
//   width: 17.9%;
//   margin-left: 15px;
//   margin: 5px;
// }
// .left-one {
//   background: white;
//   /* height: 318px; */
//   height: 48%;
//   width: 100%;
//   // max-width: 230px;
//   // min-width: 50%;
// }
// .left-tow {
//   background: white;
//   margin-top: 6px;
//   /* height: 318px; */
//   height: 49%;
//   // width: 235px;
//   width: 100%;
// }
// 业务发展更多
.left-tow .more {
  margin: 0 3px;
  font-size: 12px;
  color: rgb(0, 168, 255);
  // margin-left: 160px;
  cursor: pointer;
}
//统计更多
.censusmore {
  font-size: 12px;
  color: rgb(0, 168, 255);
  // margin-left: 160px;
  cursor: pointer;
}
.grademore {
  font-size: 12px;
  color: rgb(0, 168, 255);
  // margin-left: 130px;
  cursor: pointer;
}
// .right {
//   height: 98%;
//   width: 21%;
//   margin: 5px;
// }
// .right-one {
//   background: white;
//   /* height: 420px; */
//   height: 66%;
//   // width: 235px;
//   width: 100%;
// }
// .right-tow {
//   background: white;
//   margin-top: 5px;
//   /* height: 215px; */
//   height: 32%;
//   // width: 235px;
//   width: 100%;
// }
// .foot {
//   box-sizing: border-box;
//   // margin-top: 5px;
//   // border: 1px solid black;
//   height: 32%;
//   width: 64%;
//   // display: inline-block;
//   position: absolute;
//   bottom: 11px;
// }
// .foot-one {
//   border: 1px solid red;
//   box-sizing: border-box;
//   width: 67%;
//   height: 99%;
//   background: white;
//   // margin-left: 245px;
//   // height: 215px;
//   /* min-height: 130%; */
//   // width: 620px;
//   display: inline-block;
// }
// .foot-tow {
//   box-sizing: border-box;

//   // margin-top: 5px;
//   margin-left: 6px;
//   background: white;
//   // margin-left: 5px;
//   // height: 215px;
//   height: 99%;
//   width: 25.7%;
//   // width: 235px;
//   display: inline-block;
// }

.make {
  font-weight: 600;
  font-size: 12px;
  // margin: 5px;
  padding: 5px;
  margin-left: 10px;
}
.makeone {
  font-weight: 600;
  font-size: 14px;
  // padding-top: 5px;
  // padding: 7px 0;
  // margin-left: 10px;
}
.census {
  font-weight: 600;
  font-size: 14px;
  padding-top: 5px;
  padding: 10px;
  margin-left: 5px;
}
// .grade {
//   font-weight: 600;
//   font-size: 14px;
//   padding: -3px;
//   // padding-top: 3px;
//   // padding: 10px;
//   margin-left: 5px;
// }
.makedatas {
  display: flex;
  flex-flow: wrap;

  // padding: 10px;
  font-size: 12px;
}
.makedatas img {
  width: 20px;
  height: 20px;
  margin-bottom: 15px;
}
.left-one .makedata {
  //   margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 5px;
  // margin: 5px 0px;
  margin-top: 15px;
  padding: 30px 15px;
  // height: 120px;
  // width: 105px;
  width: 48%;
  box-sizing: border-box;
  background: rgb(242, 251, 255);
  &:nth-child(2n) {
    margin-left: 4%;
  }
  &:nth-child(1),
  &:nth-child(2) {
    margin-top: 10px;
  }
}
/deep/ .fromstyle {
  border: cyan;
}
.servicedata {
  display: flex;
  flex-direction: column;
  // margin-top: -20px;
}
.servicedatas {
  white-space: nowrap;
  // margin-top: -10px;
  background: rgb(242, 251, 255);
  // margin: 10px;
  // height: 50px;
  // width: 245px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // justify-items: center;
  // color: red;
  margin: 10px 0px;
  padding: 12px 5px;
}
.consume {
  background: rgb(242, 251, 255);
  margin: 10px 0px;
  // height: 50px;
  // width: 260px;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  // justify-items: center;
  // color: red;
  // margin: 15px 10px;
  span {
    p {
      &:nth-child(2) {
        zoom: 0.8;
      }
    }
  }
}
.consume .servicedatasspan p {
  white-space: nowrap;
  // width: 90px;
  padding: 3px;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  font-size: 12px;
  font-weight: 600;
}
.consume .servicedatasspan {
  // width: 30px;
  // margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 10px;
}
.servicedatasspanfont {
  color: rgb(51, 148, 237);
  // color: #000;
  font-weight: 600;
  font-size: 14px;
}
.servicedatasspan p {
  width: 70px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  font-size: 10px;
  &:nth-child(2) {
    font-weight: 600;

    zoom: 0.9;
    // background: red;
  }
}
// ---------统计运营
.censusdata {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.censusdatas {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-items: center;
  justify-content: center;
  margin-top: 8px;
  // height: 120px;
  // width: 230px;
  width: 100%;
  padding: 23px 0;
  border: 1px solid rgb(233, 226, 226);
}

.censusdatas img {
  height: 20px;
  width: 20px;
}
.censusdatas .font {
  font-weight: 600;
  font-size: 12px;
  // margin-top: 10px;
}
.censusdatasp .font {
  font-weight: 600;
  font-size: 14px;
  margin: 10px;
  // margin-top: 5px;
}
.censusdatasp .censusdataspfont {
  margin: 7px;
  font-weight: 600;
  font-size: 12px;
}
.censusdatasp .data {
  margin: 7px;
  font-weight: 600;
  font-size: 12px;
  color: rgb(38, 181, 255);
}
.fonts {
  margin-top: 5px;
}
.right-tow .font {
  margin-top: 5px;
  // border-left: 2px solid darkgray;
  font-size: 12px;
  color: darkgray;
  // margin : 15px;
  padding: 10px;
}
.right-tow .font::before {
  // display: block;
  content: "";
  margin-right: 10px;
  // background: blue;
  border-left: 2px solid darkgray;
  // font-size: 10px;
  // color: darkgray;
  margin: 7px;
  // padding: 3px;
}
.gradedata {
  display: flex;
  padding: 0 5px;
  // justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  // align-items: center;
}
.gradegold {
  // display: inline-block;
  // border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin: 2px;
  padding: 2px;
  align-items: center;
  margin: 3px;
  // padding: 5px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // align-content: center;
  // justify-items: center;
  // justify-content: center;
  width: 3px;
  height: 100px;
  // background: red;
  // border: 1px solid red;
}
.gradedatas {
  display: inline-block;
  // border: 1px solid red;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // justify-items: center;
  // align-content: center;
  // background: greenyellow;
  height: 150px;
  width: 65px;
  margin: 0 15px;
}
.gradedatasdiv {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 150px;
  width: 40px;
  // border: 1px solid red;
  font-size: 10px;
  // margin: 3px;
  // display: inline-block;
}
.gradedatasp {
  margin: 3px 0;
  font-size: 10px;
  font-weight: 600;
}
.makemakeone {
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  // padding: 5px;
}
.pops {
  overflow-y: auto;
  height: 300px;
  display: flex;
}
.pops .pops-one {
  // flex: onwrap;
  padding: 5px;
  width: 50%;
  // border: 1px solid red;
  display: flex;
  align-items: flex-start;
}
.pops .pops-one .pops-onedata {
  text-align: right;
  flex-flow: wrap;
  padding: 5px;
  width: 50%;
  flex: 1;
  // border: 1px solid rgb(30, 255, 0);
  // display: flex;
  // justify-content: flex-end;
}
.pops .pops-one .pops-towdata {
  padding: 5px;
  flex: 1;
  // border: 1px solid rgb(30, 255, 0);
  // display: flex;
  // align-items: flex-end;
}

.pops .pops-tow .pops-towdata {
  padding: 5px;
  flex: 1;
  // border: 1px solid rgb(30, 255, 0);
  // display: flex;
  // align-items: flex-end;
}
.pops .pops-tow {
  padding: 5px;
  width: 50%;
  // border: 1px solid red;
  display: flex;
  align-items: flex-start;
}
.pops .pops-tow .pops-onedata {
  text-align: right;
  flex-flow: wrap;
  padding: 5px;
  width: 50%;
  flex: 1;
  // border: 1px solid rgb(30, 255, 0);
  // display: flex;
  // justify-content: flex-end;
}
.cehe {
  padding: 3px;
  font-size: 12px;
  font-weight: 600;
  zoom: 0.9;
  // border-bottom: 1px darken red;
}
.cehedata {
  color: rgb(0, 168, 255);
  font-size: 18px;
  font-weight: 600;
}
.baifbi {
  color: red;
  font-size: 18px;
  font-weight: 600;
}
.footdata {
  padding: 5px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgb(153, 153, 153);
}
.yun {
  color: rgb(153, 153, 153);
  margin-bottom: 5px;
}
.yundata {
  padding: 0 4px;
  color: red;
}
.censusdatasdiv {
  padding: 3px;
  display: flex;
}
.censusdatasdiv .censusdataspfont {
  padding: 3px 5px;
  font-weight: 600;
  font-size: 12px;
}
.censusdatasdiv .data {
  padding: 3px 5px;
  color: rgb(38, 181, 255);
  font-weight: 600;
  font-size: 12px;
}
// .icon-xiajiang {
//   color: #f56c6c;
// }
.icon-shangsheng {
  color: #f56c6c;
}
</style>>

