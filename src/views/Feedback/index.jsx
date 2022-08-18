import React, { useRef, useState } from 'react';
import CommonStyles from 'components/CommonStyles';
import SelectChoice from './SelectChoice';
import { useHistory } from 'react-router-dom';

const Feedback = () => {
  //! State
  const editorRef = useRef(null);
  const [content, setContent] = useState();
  const history = useHistory();

  //! Function
  const handleGetContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
      console.log(editorRef.current.getContent());
    }
  };

  const handleClearContent = () => {
    editorRef.current.setContent('');

    history.push('/cfrs');
  };

  //! Render
  return (
    <>
      <div className="feedback-container">
        <div className="feedback-top">
          <h3 className="feedback-title">Tạo phản hồi, ghi nhận</h3>
        </div>

        <div className="feedback-button">
          <CommonStyles.Button type="primary" innerText="Phản hồi" />
          <CommonStyles.Button type="secondary-gray" innerText="Ghi nhận" />
        </div>

        <div className="feedback-bottom">
          <div className="feedback-select">
            <div>
              <SelectChoice text="Loại phản hồi" label="Lựa chọn" size="small" sx={{ minWidth: 250 }} />
              <SelectChoice text="Người được phản hồi" label="Lựa chọn" size="small" sx={{ minWidth: 250 }} />
              <SelectChoice text="Chu kỳ" label="Lựa chọn" size="small" sx={{ minWidth: 250 }} />
              <SelectChoice text="OKRs" label="Lựa chọn" size="small" sx={{ minWidth: 250 }} />
              <SelectChoice text="Tiêu chí" label="Lựa chọn" size="small" sx={{ minWidth: 250 }} />
            </div>
            <div className="feedback-tip">
              <p>
                Phản hồi Feedback (Phản hồi) là những lời đánh giá, nhận xét mà chúng ta dành cho nhau. Có thể là quản
                lý nhận định việc một nhân viên làm việc đã tốt hay chưa, nhân viên nhận đinh về quản lý của mình trong
                vai trò một người dẫn dắt, định hướng, cũng có thể là một lời cảm ơn, nhận xét về đồng nghiệp về những
                vấn đề phù hợp VHDN, giúp đỡ lẫn nhau.
              </p>
              <p>
                Phản hồi Feedback là việc chúng ta nên làm với nhau thường xuyên, để tăng cường trong giao tiếp, khen
                ngợi kịp thời, nhắc nhở khi gặp lỗi, thẳng thắn với nhau. Feedback không nhất thiết phải đi kèm với 1
                OKRs như Recognition (Ghi nhận).
              </p>
            </div>
          </div>

          <div className="feedback-editor">
            <p className="feedback-text">Nội dung</p>
            <div style={{ flex: 1 }}>
              <CommonStyles.TextEditor editorRef={editorRef} />
            </div>
          </div>

          <div className="feedback-editor-btn">
            <p className="feedback-text"></p>
            <CommonStyles.Button
              type="secondary-gray"
              borderRadius="round"
              innerText="Hủy bỏ"
              onClick={handleClearContent}
              style={{ marginRight: '20px' }}
            />
            <CommonStyles.Button type="primary" borderRadius="round" innerText="Lưu lại" onClick={handleGetContent} />
          </div>

          {/* <div>
            Content of tinymce : <span dangerouslySetInnerHTML={{ __html: content }} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Feedback;
