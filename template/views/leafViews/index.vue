<template>
  <div class="{moduleName}">
  <% if(config.breadcrumb.length > 0) { %>
    <el-breadcrumb separator="/">
    <% config.breadcrumb.split('/').forEach(function (item) { %>
      <el-breadcrumb-item><%= item %></el-breadcrumb-item>
    <% }) %>
    </el-breadcrumb>
  <% } %>
    <el-form
      class="horizontal-form-item clearfix border-bottom-1"
      @submit.native.prevent="handleSearch(formFilter)"
      :model="formFilter">
  <% config.list.forEach(function (item) { %>
    <% if (item.isFilter) { %>
      <% if (item.inputType == 'text') { %>
      <el-form-item label="<%= item.label %>" label-width="74px">
        <el-input
          v-model="formFilter.<%= item.name %>"
          auto-complete="off"
          placeholder="请输入轮<%= item.label %>">
        </el-input>
      </el-form-item>
      <% } else if (item.inputType == 'autocomplete') { %>
      <el-form-item label="<%= item.label %>" label-width="74px">
        <el-autocomplete
          v-model="formFilter.<%= item.name %>Filter"
          :fetch-suggestions="<%= item.name %>Filter"
          placeholder="请输入<%= item.label %>">
        </el-autocomplete>
      </el-form-item>
      <% } else if (item.inputType == 'switch') {%>
      <el-form-item label="<%= item.label %>" label-width="74px">
        <el-switch
          v-model="formFilter.<%= item.name %>">
        </el-switch>
      </el-form-item>
      <% } else if (item.inputType == 'date') { %>
      <el-form-item label="<%= item.label %>" label-width="74px">
        <el-date-picker
          v-model="formFilter.<%= item.name %>"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <% } else if (item.inputType == 'time') { %>
      <el-form-item label="<%= item.label %>" label-width="74px">
        <el-time-select
          v-model="formFilter.<%= item.name %>"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间">
        </el-time-select>
      </el-form-item>
      <% } else if (item.inputType == 'datetime') { %>
      <el-form-item label="<%= item.label %>" label-width="74px">
        <el-date-picker
          v-model="formFilter.<%= item.name %>"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <% } else if (item.inputType == 'select') { %>
      <el-form-item label="<%= item.label %>" label-width="74px">
        <el-select v-model="formFilter.<%= item.name %>">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <% } else if (item.inputType == 'checkbox') { %>
      <el-form-item label="<%= item.label %>">
        <el-checkbox-group v-model="formFilter.<%= item.name %>">
          <el-checkbox label="<%= item.label %>" name="<%= item.name %>"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <% } else if (item.inputType == 'radio') { %>
      <el-form-item label="<%= item.label %>">
        <el-radio-group v-model="formFilter.<%= item.name %>">
          <el-radio label="<%= item.label %>"></el-radio>
        </el-radio-group>
      </el-form-item>
    <% } %>

  <% } %>
  <% }) %>
      <el-form-item>
        <el-button type="primary" icon="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="posts">
  <% config.list.forEach(function (item) { %>
    <% if (!item.hasLink) { %>
      <el-table-column property="<%= item.name %>" label="<%= item.label %>">
      </el-table-column>
    <% } else { %>
      <el-table-column inline-template label="<%= item.label %>">
        <router-link :to="{ path: '/{moduleName}/' + row.id }">
          {{<%= item.name %>}}
        </router-link>
      </el-table-column>
   <% }}) %>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        @sizechange="handleSizeChange"
        @currentchange="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="pagination.pageSizes"
        :page-size="pagination.pageSize"
        layout="sizes, prev, pager, next, jumper, total"
        :total="pagination.total">
      </el-pagination>
    </div>
  </div>
</template>
<script src="./{moduleName}"> </script>
