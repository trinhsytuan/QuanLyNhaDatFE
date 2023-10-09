import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./TruyXuatGiayTo.scss";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BaseContent from "@components/BaseContent";
import NOT_FOUND_PRODUCT from "@assets/icons/not-found-product.svg";
import Loading from "@components/Loading";
import { getLand } from "@app/services/TruyXuat";
import { Button, Col, Form, Input } from "antd";
import { URL } from "@url";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
TruyXuatGiayTo.propTypes = {};

function TruyXuatGiayTo({ isLoading }) {
  const history = useHistory();
  const [data, setData] = useState(undefined);
  const [form] = Form.useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getAPI();
      form.setFieldsValue({ makhudat: id });
    } else setData(null);
  }, [id]);
  const getAPI = async () => {
    setIsSubmit(true);
    getLand(id)
      .then((res) => {
        console.log(res);
        if (res) setData(res);
        else setData(null);
      })
      .catch((e) => {
        setData(null);
      });
  };
  const formSubmit = (e) => {
    history.push(URL.TRUY_XUAT_GIAY_TO_ID.format(e.makhudat));
  };
  const resetForm = () => {
    form.resetFields();
    setIsSubmit(false);
    setData(undefined);
  };
  return (
    <Loading active={isLoading}>
      <BaseContent>
        <Form onFinish={formSubmit} className="info_product" form={form}>
          <Col xxl={13} xl={15} lg={19} md={21} sm={21} xs={21}>
            <Form.Item
              name="makhudat"
              className="info_product__code"
              rules={[{ required: true, message: "Vui lòng nhập thông tin mã khu đất" }]}
            >
              <Input
                placeholder="Nhập thông tin mã khu đất"
                prefix={
                  isSubmit ? (
                    <Button
                      onClick={resetForm}
                      className="info_product__iconReset"
                      icon={<CloseOutlined className="info_product__iconClose" />}
                      type="primary"
                    />
                  ) : (
                    <span />
                  )
                }
              ></Input>
            </Form.Item>
          </Col>
          <Col span={2} style={{ display: "flex", alignItems: "center" }}>
            <Button type="primary" className="btn_sp" htmlType="submit">
              <SearchOutlined className="btn_sp__icon-search" />
            </Button>
          </Col>
        </Form>
        {isSubmit === true && data === null && (
          <div className="show_info_product_notfound">
            <div className="show_info_product__notFound">
              <img src={NOT_FOUND_PRODUCT} alt="Not Found" />
              <span>Không tìm thấy khu đất bạn cần tìm</span>
            </div>
          </div>
        )}
        {isSubmit == true && data != null && <div>Khu đất ok, code ở đây</div>}
      </BaseContent>
    </Loading>
  );
}
function mapStateToProps(store) {
  const { isLoading } = store.app;
  return { isLoading };
}
export default connect(mapStateToProps)(TruyXuatGiayTo);
