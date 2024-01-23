import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex, Skeleton, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDetailsPage } from "../hooks/useDetailsPage";

export const DetailsHeader: React.FC = () => {
  const { loading, data } = useDetailsPage();
  const navigate = useNavigate();
  return (
    <Flex
      style={{ width: "100%", height: "100%", padding: 8 }}
      justify="start"
      align="center"
      gap={20}
    >
      <Button
        onClick={() => navigate(-1)}
        type="text"
        icon={<ArrowLeftOutlined style={{ color: "#FFF", fontSize: "32px" }} />}
      />

      {loading && (
        <Skeleton
          title={{
            style: {
              background: "rgba(255, 255, 255, 0.4)",
            },
          }}
          paragraph={false}
        />
      )}

      <Typography.Title ellipsis level={2} style={{ color: "#FFF" }}>
        {data?.name}
      </Typography.Title>
    </Flex>
  );
};
