import React from 'react';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const PaginationCustom = styled(Pagination)(({ theme }) => ({
  '& .MuiButtonBase-root': {
    background: '#fff',
    '&:hover': {
      background: '#18202E',
      color: '#fff',
    },
  },
  '& .Mui-selected': {
    background: '#18202E !important',
    color: '#fff',
  },
}));

const PaginationCommon = (props) => {
  //! State
  const { pageText, count, defaultPage, siblingCount, variant, shape } = props;

  //! Function

  //! Render
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {pageText && <p className="page">{pageText}</p>}
      <PaginationCustom
        count={count}
        defaultPage={defaultPage}
        siblingCount={siblingCount}
        variant={variant}
        shape={shape}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
};

export default PaginationCommon;
