import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./ThemMoiCapLai.scss";
import BaseContent from "@components/BaseContent";
import { CloseOutlined, DeleteOutlined, EditOutlined, LeftOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getByMaGiayTo } from "@app/services/CapMoiGiayTo";
import { toast, validateSpaceNull } from "@app/common/functionCommons";
import TextArea from "antd/lib/input/TextArea";
import { CONSTANTS, TOAST_MESSAGE } from "@constants";
import { createNewCapLai } from "@app/services/CapLaiGiayTo";
import { URL } from "@url";
ThemMoiCapLai.propTypes = {};

function ThemMoiCapLai(props) {
  const history = useHistory();
  const { id } = useParams();
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [disabledForm1, setDisabledForm1] = useState(false);
  const [magiaytoForm, setMagiaytoForm] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const formRef = useRef();
  const getInfomationKhuDat = async (e) => {
    if (disabledForm1) {
      setDisabledForm1(false);
      form2.resetFields();
      setMagiaytoForm(null);
    } else {
      const response = await getByMaGiayTo(e.code);
      if (response) {
        form2.setFieldsValue({
          ...response,
        });
        console.log(response);
        setDisabledForm1(true);
        setDisabled(false);
        setMagiaytoForm(e.code);
      } else {
        toast(CONSTANTS.ERROR, TOAST_MESSAGE.CAP_MOI.NOT_FOUND);
      }
    }
  };
  const onSubmit = async (e) => {
    const response = await createNewCapLai({ ...e, magiayto: magiaytoForm });
    if (response) {
      toast(CONSTANTS.SUCCESS, TOAST_MESSAGE.CAP_LAI.THEM_MOI);
      history.push(URL.THEM_MOI_CAP_LAI_ID.format(response._id));
    }
  };
  return (
    <>
      <BaseContent>
        {!id && (
          <div className="div_input_query_land">
            <div className="ThemMoiCapLai-parent">
              <Form
                form={form1}
                labelCol={{
                  xs: 16,
                  sm: 11,
                  md: 12,
                  lg: 8,
                }}
                wrapperCol={{
                  xs: { span: 6 }, // Kích thước cho xs (màn hình cực nhỏ)
                  sm: { span: 10 }, // Kích thước cho sm (màn hình nhỏ)
                  md: { span: 10 }, // Kích thước cho md (màn hình trung bình)
                  lg: { span: 14 }, // Kích thước cho lg (màn hình lớn)
                }}
                autoComplete="off"
                className="form-code"
                onFinish={getInfomationKhuDat}
              >
                <div className="input-code">
                  <Form.Item
                    label="Mã khu đất cần cấp lại"
                    name="code"
                    className="code-title"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập mã khu đất",
                      },
                      {
                        validator: validateSpaceNull,
                      },
                    ]}
                  >
                    <Input disabled={disabledForm1} />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={disabledForm1 ? <CloseOutlined /> : <SearchOutlined />}
                  ></Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </BaseContent>
      <BaseContent>
        <div className="ThemMoiCapLai-Container">
          <div className="title">
            <div className="title-left">
              <LeftOutlined style={{ marginRight: "10px" }}></LeftOutlined>
              <span>Thông tin cấp lại</span>
            </div>
            <div className="title-right">
              {id && (
                <div className="btn-edit-remove">
                  {disabled && (
                    <Button className="button-edit" icon={<EditOutlined />}>
                      Chỉnh sửa
                    </Button>
                  )}
                  {!disabled && (
                    <Button className="button-edit" icon={<EditOutlined />}>
                      Huỷ chỉnh sửa
                    </Button>
                  )}
                  <Button className="button-remove" icon={<DeleteOutlined />}>
                    Xoá
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="div_hr"></div>
          <div className="ThemMoiCapLai-content">
            <Form
              layout={"vertical"}
              form={form2}
              labelCol={4}
              wrapperCol={14}
              onFinish={onSubmit}
              disabled={disabled}
              ref={formRef}
            >
              <Form.Item label="Tên người sử dụng khu đất" name="tennguoisudung">
                <Input disabled={true} />
              </Form.Item>
              <Form.Item
                label="Lý do cấp lại"
                name="lydocaplai"
                rules={[
                  { required: true, message: "Lý do cấp lại không thể bỏ trống" },
                  { validator: validateSpaceNull },
                ]}
              >
                <TextArea rows={5} />
              </Form.Item>
            </Form>
          </div>
        </div>
      </BaseContent>
      <div className="div-caplai-btn-submit">
        {!disabled && (
          <Button type="primary" onClick={() => formRef.current.submit()}>
            {id ? "Cập nhật thông tin" : "Thêm mới thông tin"}
          </Button>
        )}
      </div>
    </>
  );
}

export default ThemMoiCapLai;

