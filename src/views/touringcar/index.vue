<template>
  <el-row :gutter="20">
      <!-- <el-button @click="btnClick">点击按钮</el-button> -->
      <el-col :span="24">
        <el-select v-model="value" placeholder="请选择" size="small" class="select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <!-- 表格1 -->
        <div class="box">
          <h1>
            房车设备使用情况
          </h1>
          <el-table :data="tableData" stripe>
                <el-table-column
                    prop="room"
                    label="房间"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="equipmentName"
                    label="设备"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="resource"
                    label="来源"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="dayTotalTime"
                    label="当日使用总时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayAvarageTime"
                    label="当日每次平均时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayCounts"
                    label="当日使用次数">
                </el-table-column>
          </el-table>
        </div>

        <!-- 表格1 -->
        <div class="box">
          <h1>
            房车模式使用情况
          </h1>
          <el-table :data="tableData2" stripe>
                <el-table-column
                    prop="room"
                    label="房间"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="modeName"
                    label="模式"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="resource"
                    label="来源"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="dayTotalTime"
                    label="使用时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayAvarageTime"
                    label="当日每次平均时长"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="dayCounts"
                    label="当日使用次数">
                </el-table-column>
          </el-table>
        </div>

      </el-col>
  </el-row>
</template>

<script>
// https://blog.csdn.net/m0_38134431/article/details/99855776
export default {
	data() {
		return {
      websock: null,
      options: [{
          value: '选项1',
          label: '江铃防疫车'
        }, {
          value: '选项2',
          label: '荣成方舱'
        }, {
          value: '选项3',
          label: '洛阳自行式房车'
        }],
        value: '选项1',
        tableData: [
          {
            room:'儿童房',
            equipmentName: '顶灯',
            resource: '小程序：0，实体按键1，房车网关：2',
            dayTotalTime: '10:00:00',
            dayAvarageTime: '15',
            dayCounts: '20'
          },
          {
            room:'客厅',
            equipmentName: '筒灯',
            resource: '小程序：8，实体按键15，房车网关：2',
            dayTotalTime: '8:00:00',
            dayAvarageTime: '18',
            dayCounts: '25'
          },
          {
            room:'主卧',
            equipmentName: '灯带',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '6',
            dayCounts: '9'
          },
          {
            room:'厨房',
            equipmentName: '气氛灯',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '6',
            dayCounts: '9'
          },
          {
            room:'卫生间',
            equipmentName: '顶灯',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '6',
            dayCounts: '9'
          },
          {
            room:'次卧',
            equipmentName: '顶灯',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '6',
            dayCounts: '9'
          }
        ],
        tableData2: [
          {
            room:'儿童房',
            modeName: '温馨',
            resource: '小程序：0，实体按键1，房车网关：2',
            dayTotalTime: '10:00:00',
            dayAvarageTime: '15',
            dayCounts: '20'
          },
          {
            room:'客厅',
            modeName: '起夜',
            resource: '小程序：8，实体按键15，房车网关：2',
            dayTotalTime: '8:00:00',
            dayAvarageTime: '18',
            dayCounts: '25'
          },
          {
            room:'主卧',
            modeName: '观影',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '6',
            dayCounts: '9'
          },
          {
            room:'厨房',
            modeName: '明亮',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '6',
            dayCounts: '9'
          },
          {
            room:'卫生间',
            modeName: '晨起',
            resource: '小程序：3，实体按键6，房车网关：0',
            dayTotalTime: '3:00:00',
            dayAvarageTime: '6',
            dayCounts: '9'
          },
        ]
		}
	},
	destroyed () {
	    //页面销毁时关闭ws连接
	    if(this.websock){
	    	this.websock.close() // 关闭websocket
	    } 
  	},
 	methods: {
	    //初始化weosocket
	    initWebSocket(){
	      if(typeof(WebSocket) === "undefined"){
	        alert("您的浏览器不支持WebSocket")
	        return false
	      }
	      const wsuri = 'ws://*.*.*.*:8081/dns-monitor' // websocket地址
	      this.websock = new WebSocket(wsuri)
	      this.websock.onopen = this.websocketonopen
	      this.websock.onmessage = this.websocketonmessage
	      this.websock.onerror = this.websocketonerror
	      this.websock.onclose = this.websocketclose
	    },
	    //连接成功
	    websocketonopen(){ 
	      console.log('WebSocket连接成功')
	    },
	    //接收后端返回的数据
	    websocketonmessage(e){ 
	      let dataJson = JSON.parse(e.data)
	      console.log(dataJson)
	      // 在这里使用后端返回的数据，对数据进行处理渲染
	    },
	    //连接建立失败重连
	    websocketonerror(e){
	      console.log(`连接失败的信息：`, e)
	      this.initWebSocket() // 连接失败后尝试重新连接
	    },
	    //关闭连接
	    websocketclose(e){ 
	      console.log('断开连接',e)
	    },
	    // 点击按钮
	  	btnClick () {
	  	    // 因为需求是每次点击都是发起不同ws连接，拿到的数据也不一致，所以连接前要先断开上次的连接
	  		if(this.websock){
	       		this.websock.close() // 关闭websocket连接
	      	}      
	        this.initWebSocket() // 初始化weosocket，发起连接
	        // 这里使用定时器是为了等待连接后才发送数据，避免错误
	        setTimeout( () => { 
	           //添加状态判断，当为OPEN时，前端发送消息给后端
	           if (this.websock.readyState === 1) {
	           		// 把后台需要的参数数据传过去
	               let obj = {
		               jobId: 111,
		               token: 'xxxxx',
		               message: 'send ok'
	              }
	         	 //发给后端的数据需要字符串化
	         	 this.websock.send(JSON.stringify(obj))
	       		 }
	      	}, 500)
	  	}
	  }
}
</script>

<style lang="scss" scoped>
.el-row {
  display: flex;
  width: 100%;
  .el-col{
    display: flex;
    flex-direction: column;
  }
}
</style>

<style lang="scss" scoped>
@import '~@/assets/styles/box.scss';
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgba($color: #0184ff, $alpha: 0.1);
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover>td {
  background: rgba($color: #0184ff, $alpha: 0.2);
}
.el-table::before {
  height: 0;
}

.select {
  width: 3rem;
  margin-bottom: .15rem;
}
::v-deep .el-table {
      background-color: transparent;
      color: #fff;
      thead {
        color: $white;
      }
      th, tr {
        background-color: transparent;
      }
      td, th.is-leaf {
        border-bottom: none;
      }
      td, th {
        padding-top: .05rem;
        padding-bottom: .05rem;
        font-size: 0.14rem;
      }
    }
</style>
