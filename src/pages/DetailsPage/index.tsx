import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { getDetailsRequest } from "./getDetailsRequest";

const { Header, Content } = Layout;

export const DetailsPage: React.FC = () => {
  const { data, loading, execute, error } = useRequest(getDetailsRequest);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) execute(id);
  }, [id]);

  return (
    <Layout>
      <Header>
        <Button
          type="text"
          icon={
            <ArrowLeftOutlined style={{ color: "#FFF", fontSize: "32px" }} />
          }
        />
      </Header>
      <Content></Content>
    </Layout>
  );
};
