"use client";
// vendors
import { useState } from "react";
import React, { ReactElement } from "react";

// antd
import Sider from "antd/es/layout/Sider";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";

// styles
import styles from "./main.module.css";
import Image from "next/image";

export interface MainLayoutProps {
  content: React.ReactNode;
  header?: React.ReactNode;
  headerInfo?: React.ReactNode;
  sideContent?: React.ReactNode;
}

const getItem = (label: string, key: string, icon: ReactElement) => {
  return {
    key,
    icon,
    label,
  };
};
const items = [getItem("Characters", "1", <UserOutlined />)];

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  content,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        className={collapsed ? styles.collapsed : styles.sider}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Image
            priority
            src="/conexa.svg"
            alt="Conexa Logo"
            width={120}
            height={80}
            className={styles.logo}
          />
        </Header>
        <Content style={{ overflow: "initial" }}>
          <div style={{ padding: 24, minHeight: 360 }}>{content}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Conexa Challenge ©{new Date().getFullYear()} Crafted by Daiana
          Grillia
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
