import React from 'react';
import { useTranslation } from 'react-i18next';

const Pagination = (props) => {
  //! State
  const { t } = useTranslation();

  //!Function

  //! Render
  return (
    <div className="pagination-contianer">
      <p className="page">{t('cfrs:page')}</p>
      <button className="pagination-btn">1</button>
      <button className="pagination-btn">2</button>
      <button className="pagination-btn">3</button>
    </div>
  );
};

export default Pagination;
