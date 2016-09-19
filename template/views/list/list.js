import Mock from 'resource/mock';

export default {
  data () {
    return {
      {moduleName}: [],
      pagination: {
        currentPage: 1,
        total: 0,
        pageSize: 10,
        pageSizes: [3, 5, 10, 20],
      }
    };
  },
  created () {
    this.load();
  },
  methods: {
    handleSizeChange (size) {
      this.pagination.pageSize = size;
      this.pagination.currentPage = 1;
      this.load();
    },
    handleCurrentChange (index) {
      this.pagination.currentPage = index;
      this.load();
    },
    load () {
      Mock
        .{moduleName}Resource()
        .get({
          _start: (this.pagination.currentPage - 1) * this.pagination.pageSize,
          _limit: this.pagination.pageSize
        })
        .then(response => {
          this.pagination.total = 100;
          this.{moduleName} = response.json();
        })
        .catch(err => {
          this.$notify({
            message: '获取列表失败',
            type: 'error'
          });
        });
    }
  }
};
