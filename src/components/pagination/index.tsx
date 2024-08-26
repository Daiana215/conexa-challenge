// vendors
import React from "react";

// Antd
import { Flex, Pagination } from "antd";

// styles
import styles from "./pagination.module.css";

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  handleChange: (page: number) => void;
}

export const CustomPagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  handleChange,
}): React.ReactElement => {
  const paginationProps = {
    simple: true,
    defaultCurrent: 1,
    total: totalItems,
    current: currentPage,
    showSizeChanger: false,
    onChange: handleChange,
  };
  return (
    <Flex gap={32} className={styles.pagination}>
      <Pagination {...paginationProps} />
      <span>{totalItems} items</span>
    </Flex>
  );
};

export default CustomPagination;
