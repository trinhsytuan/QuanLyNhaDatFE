import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './KiemDinhChuyenNhuong.scss';
import BaseContent from "@components/BaseContent";
import queryString, { stringify } from "query-string";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "@containers/SearchBar";
import { URL } from "@url";
import { formatSTT, getChangeFormSearch } from "@app/common/functionCommons";
import { SEARCH_STATUS_THAM_DINH, PAGINATION_CONFIG, VI_STATUS_THAM_DINH } from "@constants";
import { Button, Table } from "antd";
import { connect } from "react-redux";
import VisibleIcon from "@components/Icons/VisibleIcon";
import { getTableChuyenNhuong } from "@app/services/ChuyenNhuong";
KiemDinhChuyenNhuong.propTypes = {
    
};

function KiemDinhChuyenNhuong(props) {
    return (
        <div>
            
        </div>
    );
}

export default KiemDinhChuyenNhuong;