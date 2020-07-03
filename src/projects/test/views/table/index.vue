<template>
  <div class="app-container">
    <el-form ref="queryForm" :model="listQuery" :inline="true" label-width="84px">
      <el-form-item label="作者：" prop="author">
        <el-input
          v-model="listQuery.author"
          placeholder="请输入作者"
          clearable
          size="small"
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-select
          v-model="listQuery.status"
          placeholder="使用状态"
          clearable
          size="small"
          style="width: 240px"
        >
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间：">
        <el-date-picker
          v-model="dateRange"
          size="small"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | statusFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
// import { getArticleList } from '@/api'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        author: undefined,
        status: undefined,
        startTime: undefined,
        endTime: undefined
      },
      dateRange: [],
      statusOptions: [
        {
          label: '全部',
          value: undefined
        },
        {
          label: 'success',
          value: 'published'
        },
        {
          label: 'gray',
          value: 'draft'
        },
        {
          label: 'danger',
          value: 'deleted'
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      // this.listLoading = true
      const params = this.listQuery
      params.startTime = this.dateRange[0] ? `${this.dateRange[0]} 00:00:00` : undefined
      params.endTime = this.dateRange[1] ? `${this.dateRange[1]} 23:59:59` : undefined
      this.$Http.getArticleList(params).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        // this.listLoading = false
      })
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.listQuery.page = 1
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.dateRange = []
      this.$refs['queryForm'].resetFields()
      this.handleQuery()
    }
    /* async getList() {
      const res = await this.$Http.getTableList()
      this.list = res.items
      this.total = res.total
      // this.listLoading = false
    }*/
  }
}
</script>
