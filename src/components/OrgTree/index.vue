<template>
  <a-tree
    class="w40"
    :expanded-keys="expandedKeys"
    :tree-data="treeData"
    :replaceFields="replaceFields"
    @expand="onExpand"
    @select="onSelect"
  />
</template>
<script>
const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];
export default {
  data() {
    return {
      expandedKeys: [],
      autoExpandParent: true,
      selectedKeys: [],
      treeData,
      replaceFields: {
        children: "children",
        title: "orgName",
        key: "_id",
      },
    };
  },
  created() {
    this.getTree();
  },
  methods: {
    getTree(parentId) {
      const params = { parentId };
      this.$axiosGet("/org/treeList", params).then((res) => {
        this.treeData = res.data;
      });
    },
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onSelect(selectedKeys, info) {
      console.log("selectedKeys, info", selectedKeys, info);
      this.selectedKeys = selectedKeys;
    },
  },
};
</script>
