import util from 'util';
import {ModuleName}Resrouce from 'resource/{moduleName}';

export default {
  name: '{ModuleName}List',
  data () {
    return {
      formFilter: {
    <% config.list.forEach(function (item) { %>
      <% if (item.isFilter) { %>
        <%= item.name %>: '',
      <% } %>
    <% }) %>
      },
      {moduleName}s: {},
      pagination: {
        currentPage: 1,
        total: 0,
        pageSize: 10,
        pageSizes: [3, 5, 10, 20],
      }
    };
  },
  created () {
    this.queryList();
  },
  methods: {

    handleSizeChange (size) {
      this.pagination.pageSize = size;
      this.pagination.currentPage = 1;
      this.queryList();
    },

    handleCurrentChange (index) {
      this.pagination.currentPage = index;
      this.queryList();
    },
    // 列表查询
    queryList () {
      {ModuleName}Resrouce()
        .get({
       <% config.list.forEach(function (item) { %>
        <% if (item.isFilter) { %>
          <%= item.name %>: this.formFilter.<%= item.name %>,
        <% } %>
       <% }) %>
          size: this.pagination.pageSize,
          page: (this.pagination.currentPage - 1) * this.pagination.pageSize
        })
        .then(response => {
          this.{moduleName}s = util.replaceEmptyWithHyphen(response.json());
          this.pagination.total = this.{moduleName}s.total;
        })
        .catch(error => { this.$notify({ message: '查询列表数据失败', type: 'error' }); });
    },

    handleDelete (row) {
      this.$confirm(`确认删除【${row.name}】吗？`, '提示', { type: 'warning' })
        .then(() => {
          {ModuleName}Resrouce()
            .delete({id: row.id})
            .then(() => {
              this.$notify({ message: '删除成功', type: 'success' });
              this.queryList();
            })
            .catch(error => this.$notify({ message: '删除失败', type: 'error' }));
        });
    },

    handleSearch () {
      this.pagination.currentPage = 1;
      this.pagination.total = 0;
      this.queryList();
    },
  }
};
