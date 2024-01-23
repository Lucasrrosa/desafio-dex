import { Layout } from "antd";
import React from "react";
import { DetailsContent } from "./components/DetailsContent";
import { DetailsHeader } from "./components/DetailsHeader";
import { DetailsContextProvider } from "./context/DetailsContext";

const { Header, Content } = Layout;

export const DetailsPage: React.FC = () => {
  return (
    <DetailsContextProvider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <DetailsHeader />
        </Header>
        <Content style={{ height: "calc(100vh - 64px)" }}>
          <DetailsContent />
        </Content>
      </Layout>
    </DetailsContextProvider>
  );
};
