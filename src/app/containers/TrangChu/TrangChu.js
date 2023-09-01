import React from 'react';
import { connect } from 'react-redux';
import './TrangChu.scss';
import BaseContent from '@components/BaseContent';

function TrangChu({ isLoading, ...props }) {

  return <BaseContent>d</BaseContent>;
}

function mapStateToProps(store) {
  const { isLoading } = store.app;
  return { isLoading };
}

export default connect(mapStateToProps)(TrangChu);

