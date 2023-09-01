import React from 'react';
import PropTypes from 'prop-types';
import './QuanLyDonVi.scss';
import BaseContent from '@components/BaseContent';
import { connect } from 'react-redux';
import Loading from '@components/Loading';
QuanLyDonVi.propTypes = {
    
};

function QuanLyDonVi({isLoading}) {
    return (
        <BaseContent>
        <Loading active={isLoading}>
            <div className='QuanLyDonVi-container'>
                <div className='QuanLyDonVi-header'>
                    <div className='QuanLyDonVi-title'>
                        Danh sách các đơn vị
                    </div>
                </div>
            </div>
        </Loading>
        </BaseContent>
    );
}
function mapStatetoProps(store) {
    const {isLoading} = store.app;
    return {isLoading}
}
export default connect(mapStatetoProps)(QuanLyDonVi);