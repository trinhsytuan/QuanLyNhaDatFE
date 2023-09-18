import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./ThemMoiThemMoiGiayTo.scss";
import BaseContent from "@components/BaseContent";
import { InfoCircleFilled, InfoCircleOutlined, LeftOutlined } from "@ant-design/icons";
import { URL } from "@url";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Checkbox, Col, DatePicker, Form, Input, Row, Tooltip } from "antd";
import { validateSpaceNull } from "@app/common/functionCommons";
import { RULES } from "@constants";
import { connect } from "react-redux";
ThemMoiThemMoiGiayTo.propTypes = {};

function ThemMoiThemMoiGiayTo({ isLoading }) {
  const [form] = Form.useForm();
  const formRef = useRef(null);
  return (
    <div>
      <BaseContent>
        <div className="ThemMoiGiayToTM-container">
          <div className="header">
            <div className="header-left">
              <Link to={URL.MENU.QUAN_LY_THEM_MOI}>
                <LeftOutlined className="left-out"></LeftOutlined>
              </Link>
              <span>Thông tin giấy tờ / thêm mới</span>
            </div>
            <div className="header-right"></div>
          </div>
          <div className="div_hr"></div>
          <div className="content">
            <Form layout={"vertical"} form={form} labelCol={4} wrapperCol={14} ref={formRef}>
              <div className="content-title">
                Phần kê khai của người đăng ký
                <div className="content-title-icon">
                  <Tooltip
                    placement="top"
                    title={"Là phần kê khai của người đăng ký về việc cấp mới quyền sử dụng đất"}
                  >
                    <InfoCircleOutlined />
                  </Tooltip>
                </div>
              </div>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12}>
                  <Form.Item
                    label="Tên người sử dụng"
                    name="tennguoisudung"
                    rules={[
                      { required: true, message: "Tên người sử dụng không thể bỏ trống!" },
                      { validator: validateSpaceNull },
                    ]}
                  >
                    <Input placeholder="Nhập tên người sử dụng"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12}>
                  <Form.Item
                    label="Địa chỉ thường trú"
                    name="diachithuongtru"
                    rules={[
                      { required: true, message: "Địa chỉ thường trú không thể bỏ trống!" },
                      { validator: validateSpaceNull },
                    ]}
                  >
                    <Input placeholder="Nhập địa chỉ thường trú"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <div className="content-title">
                Đề nghị
                <div className="content-title-icon">
                  <Tooltip placement="top" title={"Là phần đề nghị các quyền cấp mới quyền sử dụng đất"}>
                    <InfoCircleOutlined />
                  </Tooltip>
                </div>
              </div>
              <Row>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <Form.Item name="dangkyquyensdd">
                    <Checkbox> Đăng ký quyền sử dụng đất</Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <Form.Item name="capgcndoivoidat">
                    <Checkbox>Cấp giấy chứng nhận đối với đất</Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <Form.Item name="dangkyquyenqldat">
                    <Checkbox>Đăng ký quyền quản lý đất</Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <Form.Item name="capgcnvoitaisan">
                    <Checkbox>Cấp GCN với tài sản có trên đất</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
              <div className="content-title">
                Thửa đất
                <div className="content-title-icon">
                  <Tooltip placement="top" title={"Thông tin thửa đất cần đăng ký"}>
                    <InfoCircleOutlined />
                  </Tooltip>
                </div>
              </div>
              <Row gutter={{ xs: 8, sm: 12, md: 20, lg: 20 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item
                    label="Thửa đất đăng ký"
                    name="Thuadatdangky"
                    rules={[{ required: true, message: "Thửa đất đăng ký không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Nhập thửa đất đăng ký"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item
                    label="Số thửa đất"
                    name="Sothuadat"
                    rules={[{ required: true, message: "Số thửa đất không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Nhập số thửa đất"></Input>
                  </Form.Item>
                </Col>
                <Col
                  className="gutter-row"
                  xs={24}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  rules={[{ required: true, message: "Tờ bản đồ số không thể bỏ trống!" }]}
                >
                  <Form.Item
                    label="Tờ bản đồ số"
                    name="Tobandoso"
                    rules={[{ required: true, message: "Tờ bản đồ số không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Tờ bản đồ số"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 12, md: 20, lg: 20 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item
                    label="Thửa đất đăng ký"
                    name="Thuadatdangky"
                    rules={[{ required: true, message: "Thửa đất đăng ký không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Nhập thửa đất đăng ký"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item
                    label="Số thửa đất"
                    name="Sothuadat"
                    rules={[{ required: true, message: "Số thửa đất không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Nhập số thửa đất"></Input>
                  </Form.Item>
                </Col>
                <Col
                  className="gutter-row"
                  xs={24}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  rules={[{ required: true, message: "Tờ bản đồ số không thể bỏ trống!" }]}
                >
                  <Form.Item
                    label="Tờ bản đồ số"
                    name="Tobandoso"
                    rules={[{ required: true, message: "Tờ bản đồ số không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Tờ bản đồ số"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 12, md: 20, lg: 20 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    label="Sử dụng vào mục đích"
                    name="Mucdichsd"
                    rules={[{ required: true, message: "Diện tích không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Nhập mục đích sử dụng"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    label="Từ thời điểm"
                    name="Tuthoidiem"
                    rules={[{ required: true, message: "Diện tích sử dụng chung không thể bỏ trống!" }]}
                  >
                    <DatePicker placeholder="Vui lòng chọn thời điểm" style={{ width: "100%" }} format="DD/MM/YYYY" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 12, md: 20, lg: 20 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    label="Thời hạn đề nghị được sử dụng đất"
                    name="Thoihandenghi"
                    rules={[{ required: true, message: "Thời hạn sử dụng đất không thể bỏ trống!" }]}
                  >
                    <DatePicker placeholder="Vui lòng chọn thời hạn" style={{ width: "100%" }} format="DD/MM/YYYY" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    label="Nguồn gốc sử dụng"
                    name="Nguongoc"
                    rules={[{ required: true, message: "Diện tích không thể bỏ trống!" }]}
                  >
                    <Input placeholder="Nhập nguồn gốc sử dụng"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <div className="content-title">
                Tài sản
                <div className="content-title-icon">
                  <Tooltip placement="top" title={"Tài sản liên quan đến thửa đất"}>
                    <InfoCircleOutlined />
                  </Tooltip>
                </div>
              </div>
              <Row gutter={{ xs: 8, sm: 12, md: 20, lg: 20 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item label="Loại nhà ở, công trình" name="Loainhao">
                    <Input placeholder="Nhập loại nhà ở"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item
                    label={
                      <span>
                        Diện tích xây dựng (m<sup>2</sup>)
                      </span>
                    }
                    name="Dientichxaydung"
                    rules={[RULES.NUMBER_FLOAT]}
                  >
                    <Input placeholder="Nhập diện tích xây dựng"></Input>
                  </Form.Item>
                </Col>
                <Col
                  className="gutter-row"
                  xs={24}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  rules={[{ required: true, message: "Tờ bản đồ số không thể bỏ trống!" }]}
                >
                  <Form.Item
                    label="Diện tích sàn"
                    name="Dientichsan"
                    
                  >
                    <Input placeholder="Nhập diện tích sàn"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 12, md: 20, lg: 20 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item
                    label={
                      <span>
                        Sở hữu chung (m<sup>2</sup>)
                      </span>
                    }
                    name="Sohuuchung"
                    rules={[RULES.NUMBER_FLOAT]}
                  >
                    <Input placeholder="Nhập số mét sở hữu chung" type="number"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item
                    label={
                      <span>
                        Sở hữu riêng (m<sup>2</sup>)
                      </span>
                    }
                    name="Sohuurieng"
                    rules={[RULES.NUMBER_FLOAT]}
                  >
                    <Input placeholder="Nhập diện tích sở hữu riêng"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item label="Kết cấu" name="ketcau">
                    <Input placeholder="Nhập kết cấu"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 12, md: 20, lg: 20 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item label="Số tầng" name="Sotang">
                    <Input placeholder="Nhập số tầng" type="number"></Input>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item label="Thời hạn sở hữu" name="Thoihansohuu">
                    <Input placeholder="Nhập thời hạn sở hữu"></Input>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </BaseContent>
      <div className="btn-submit-tmgt">
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => formRef.current.submit()}
          loading={isLoading}
          disabled={isLoading}
        >
          Thêm mới
        </Button>
      </div>
    </div>
  );
}
function mapStateToProps(store) {
  const { isLoading } = store.app;
  return { isLoading };
}
export default connect(mapStateToProps)(ThemMoiThemMoiGiayTo);




