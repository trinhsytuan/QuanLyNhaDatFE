import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./QuanLyDonVi.scss";
import BaseContent from "@components/BaseContent";
import { connect } from "react-redux";
import Loading from "@components/Loading";
import SearchBar from "@containers/SearchBar";
import { formatSTT, getChangeFormSearch } from "@app/common/functionCommons";
import queryString, { stringify } from "query-string";
import { getAllDonVi } from "@app/services/DonVi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { PAGINATION_CONFIG, SEARCH_ROLE_SYSTEM } from "@constants";
import { Table } from "antd";
QuanLyDonVi.propTypes = {};

function QuanLyDonVi({ isLoading, ...props }) {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  useEffect(() => {
    getDataFilter();
  }, [location.search]);
  useEffect(() => {
    handleRefresh({}, true);
  }, [page, limit]);
  const getDataFilter = async () => {
    const search = queryString.parse(props.location.search);
    const page = parseInt(search.page ? search.page : page);
    const limit = parseInt(search.limit ? search.limit : limit);
    let queryStr = "";
    queryStr += `${search.name ? "&name[like]={0}".format(search.name) : ""}`;
    queryStr += `${search.type ? "&type={0}".format(search.step_status) : ""}`;
    // queryStr += `${search.active ? "&active={0}".format(search.active) : ""}`;
    const apiResponse = await getAllDonVi(page, limit, queryStr);
    if (apiResponse) {
      const dataRes = apiResponse.docs;
      setData(dataRes);
      setLimit(apiResponse.limit);
      setPage(apiResponse.page);
      setTotalDocs(apiResponse.totalDocs);
    }
  };
  const handleRefresh = (newQuery, changeTable) => {
    const { pathname } = location;
    let objFilterTable = { page, limit };
    if (changeTable) {
      newQuery = queryString.parse(location.search);
      delete newQuery.page;
      delete newQuery.limit;
    }
    if (getChangeFormSearch(newQuery, queryString.parse(location.search))) {
      objFilterTable.page = 1;
    }
    newQuery = Object.assign(objFilterTable, newQuery);
    history.push({ pathname, search: stringify({ ...newQuery }, { arrayFormat: "repeat" }) });
  };
  const dataSearch = [
    {
      name: "name",
      label: "Tên đơn vị",
      type: "text",
      operation: "like",
    },
    {
      type: "select",
      name: "type",
      label: "Loại đơn vị",
      options: SEARCH_ROLE_SYSTEM,
      key: "value",
      value: "name",
    },
  ];
  const onChangeTable = (page) => {
    setLimit(page.pageSize);
    setPage(page.current);
  };
  const ColumnDonVi = [
    {
      title: "STT",
      render: (v1, v2, value) => formatSTT(limit, page, value),
      key: "STT",
      align: "center",
      width: 60,
    },
    { title: "Tên đơn vị", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Địa chỉ", dataIndex: "address", key: "address" },
    { title: "Điện thoại", dataIndex: "phone", key: "phone" },
  ];
  return (
    <BaseContent>
      <Loading active={isLoading}>
        <div className="QuanLyDonVi-container">
          <div className="QuanLyDonVi-header">
            <div className="QuanLyDonVi-title">Danh sách các đơn vị</div>
            <SearchBar dataSearch={dataSearch} onFilterChange={handleRefresh} />
          </div>
          <div className="QuanLyDonVi-body">
            {data && !isLoading && (
              <Table
                bordered
                className="table"
                showHeader={true}
                columns={ColumnDonVi}
                dataSource={data}
                scroll={{ x: 900 }}
                pagination={{
                  ...PAGINATION_CONFIG,
                  current: page,
                  pageSize: limit,
                  total: totalDocs,
                }}
                onChange={onChangeTable}
              />
            )}
          </div>
        </div>
      </Loading>
    </BaseContent>
  );
}
function mapStatetoProps(store) {
  const { isLoading } = store.app;
  return { isLoading };
}
export default connect(mapStatetoProps)(QuanLyDonVi);


