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
      title: "用户名",
      dataIndex: "username",
      key: "username",
      width: 160,
    },
    {
      title: "手机号",
      dataIndex: "phone",
      key: "phone",
      width: 160,
    },
    // {
    //   title: '所属行业',
    //   dataIndex: 'industry',
    //   key: 'industry',
    //   width: 160,
    //   scopedSlots: { customRender: 'industry' },
    // },
    // {
    //   title: '管理员',
    //   dataIndex: 'adminName',
    //   key: 'adminName',
    //   width: 160,
    //   scopedSlots: { customRender: 'adminName' },
    // },
    // {
    //   title: '联系电话',
    //   dataIndex: 'adminPhone',
    //   key: 'adminPhone',
    //   width: 160,
    //   scopedSlots: { customRender: 'adminPhone' },
    // },
    // {
    //   title: '申请时间',
    //   dataIndex: 'createTime',
    //   key: 'createTime',
    //   width: 220,
    //   scopedSlots: { customRender: 'createTime' },
    // },
    {
      title: "操作",
      key: "action",
      width: 200,
      scopedSlots: { customRender: "action" },
    },
  ];
}
