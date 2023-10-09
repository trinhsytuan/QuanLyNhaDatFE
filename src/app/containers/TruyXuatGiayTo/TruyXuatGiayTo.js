import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TruyXuatGiayTo.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BaseContent from "@components/BaseContent";
import Loading from "@components/Loading";
TruyXuatGiayTo.propTypes = {};

function TruyXuatGiayTo({ isLoading }) {
  const history = useHistory();
  const [data, setData] = useState(null);
  return (
    <Loading active={isLoading}>
      <BaseContent>d</BaseContent>
    </Loading>
  );
}
function mapStateToProps(store) {
  const { isLoading } = store.app;
  return { isLoading };
}
export default connect(mapStateToProps)(TruyXuatGiayTo);
