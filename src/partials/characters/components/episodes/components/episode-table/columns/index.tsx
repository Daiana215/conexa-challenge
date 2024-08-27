import { ColumnsType } from "antd/es/table";
import { Episode } from "../../../types";

export const columns: ColumnsType<Episode> = [
  {
    key: "episode",
    title: "Episode",
    dataIndex: "episode",
  },
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "air_date",
    title: "Air Date",
    dataIndex: "air_date",
  },
];

export default columns;
