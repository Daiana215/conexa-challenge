// vendors
import React, { useMemo } from "react";

// Antd
import { Table } from "antd";

// utils
import { columns } from "./columns";

// types
import { Episode, TableProps } from "../../types";

export const TableEpisodes: React.FunctionComponent<TableProps> = ({
  dataSource,
}) => {
  const data = useMemo(
    () => (Array.isArray(dataSource) ? dataSource : [dataSource]),
    [dataSource]
  );

  return (
    <Table<Episode>
      rowKey={(episode) => episode.id}
      columns={columns}
      dataSource={data}
      pagination={{
        simple: true,
        position: ["bottomCenter"],
        showSizeChanger: false,
        defaultPageSize: 5,
      }}
    />
  );
};

export default TableEpisodes;
