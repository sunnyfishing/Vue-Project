/*
 * @Author: your name
 * @Date: 2021-12-28 14:00:03
 * @LastEditTime: 2022-01-24 14:34:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yhzgh-ms-portal\src\views\dataMiddleground\dataServerManager\apiDataMarket\components\columns.js
 */
export default function columns() {
  return [
    {
      title: "组织名",
      dataIndex: "orgName",
      key: "orgName",
      width: 160,
    },
    {
      title: "创建者",
      dataIndex: "creator",
      key: "creator",
      width: 160,
    },
    {
      title: "操作",
      key: "action",
      width: 200,
      scopedSlots: { customRender: "action" },
    },
  ];
}
