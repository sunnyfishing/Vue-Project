<!--
 * @Author: your name
 * @Date: 2022-01-24 13:50:27
 * @LastEditTime: 2022-01-26 15:43:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\views\organization\user\index.vue
-->
<template>
  <div class="api-data-market antd-ui-changed">
    <h2 class="h2-page-title">角色列表</h2>
    <Search @search="onSubmit" />
    <a-divider />
    <div class="mb24 btns">
      <a-button type="primary" class="mr24" @click="showEditModal('add')"
        >新增</a-button
      >
      <a-button @click="batchDelete()">批量删除</a-button>
    </div>
    <TableSelectTip
      v-if="selectedRowKeys.length > 0"
      name="API接口"
      :total="total"
      :chooseNum="selectedRowKeys.length"
      @clearChoose="clearChooseData"
      style="margin-bottom: 24px"
    />
    <a-table
      :columns="columns"
      :data-source="tableData"
      :pagination="pagination"
      @change="onPageChange"
      class="global-table-page-pagination-cont"
      :row-selection="rowSelection"
      :scroll="{ x: true }"
    >
      <!-- <template slot="name" slot-scope="text, record">
        <a @click.prevent="gotoDetail(record)">{{ text }}</a>
      </template> -->

      <template slot="action" slot-scope="text, record">
        <a-popconfirm
          title="是否删除此数据？"
          class="antd-ui-changed"
          ok-text="是"
          cancel-text="否"
          @confirm="onDelete(record)"
        >
          <a href="#">删除</a>
        </a-popconfirm>
        <a-divider type="vertical" />
        <a href="#">编辑</a>
      </template>
    </a-table>
    <EditModal
      v-if="modalVisible"
      :visible="modalVisible"
      :modalType="modalType"
      :id="id"
      @closeModal="closeModal"
    />
  </div>
</template>
<script>
import Search from "./components/Search";
import Column from "./components/columns";
import TableSelectTip from "@/components/commons/TableSelectTip";
import EditModal from "./components/EditModal.vue";
export default {
  name: "role",
  components: {
    EditModal,
    Search,
    TableSelectTip,
  },
  data() {
    return {
      columns: Column.call(this), // 列
      tableData: [], // 表格数据
      selectedRowKeys: [], // 选择项key
      selectedIds: [], // 选择项id
      query: {}, // 查询条件
      total: 0, // 总页数
      modalVisible: false, // 新增-编辑弹框
      modalType: "", // 新增 or 编辑
      id: "",
      current: 1,
    };
  },
  computed: {
    pagination: function () {
      return {
        total: this.total,
        "show-total": (total, range) =>
          `第 ${range[0]}-${range[1]} 项，共 ${total} 项`,
        pageSize: 10,
        current: this.current,
        "show-size-changer": true,
      };
    },
    rowSelection: function () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange,
      };
    },
  },
  created() {
    this.getTableData();
  },
  methods: {
    // 请求表格数据
    getTableData() {
      const { pageSize } = this.pagination;
      const params = {
        ...this.query,
        pageSize,
        pageNum: this.current,
      };
      console.log("params-list", params);
      this.$axiosGet("/users/get", params).then((res) => {
        if (res && res.code === 10000) {
          this.tableData = res.data;
          this.total = res.total;
        }
      });
    },
    // 查询
    onSubmit(params) {
      this.query = params;
      this.getTableData();
    },
    // 分页
    onPageChange({ current, pageSize }) {
      console.log("current, pageSize", current, pageSize);
      this.pagination.pageSize = pageSize;
      this.current = current;
      this.getTableData();
    },
    // 清除表格选中
    clearChooseData() {
      this.selectedRowKeys = [];
      this.selectedIds = [];
    },
    // 删除
    onDelete(record) {
      this.batchDelete([record._id]);
    },
    // 批量删除
    batchDelete(ids = []) {
      console.log("this.selectedIds", this.selectedIds);
      console.log("ids", ids);
      const params = {
        ids: ids.length ? ids : this.selectedIds,
      };
      console.log("params-delete", params);
      this.$axiosPost("/users/batchDelete", params).then((res) => {
        if (res && res.code === 10000) {
          this.$message.success("删除成功");
          this.resetPage();
          this.getTableData();
          this.clearChooseData();
        }
      });
      // 单个删除的接口
      // const params = {
      //   id: ids[0],
      // };
      // console.log("params-delete", params);
      // this.$axiosPost("/users/delete", params).then((res) => {
      //   if (res && res.code === 10000) {
      //     this.$message.success("删除成功");
      //     this.getTableData();
      //     this.clearChooseData();
      //   }
      // });
    },
    // // 重置页码
    resetPage() {
      this.current = 1;
      this.pagination.pageSize = 10;
    },
    // 选择
    onSelectChange(selectedRowKeys, selectedRows) {
      console.log("selectedRows", selectedRows);
      this.selectedRowKeys = selectedRowKeys;
      this.selectedIds = selectedRows && selectedRows.map((item) => item._id);
    },
    // 新增 or 编辑
    showEditModal(type, id = undefined) {
      this.modalType = type;
      this.modalVisible = true;
      this.id = id;
    },
    // 关闭弹框
    closeModal(closeType) {
      this.modalVisible = false;
      if (closeType) {
        this.getTableData();
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../../../styles/UIDesignChanged.less");
.api-data-market {
  // margin: 20px 40px;
  padding: 30px 24px;
  background: #fff;
  border-radius: 16px;
}
.h2-page-title {
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 24px;
}
.btns {
  display: flex;
}
</style>
