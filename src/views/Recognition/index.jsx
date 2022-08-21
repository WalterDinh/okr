import React, { useRef, useState } from 'react';
import CommonStyles from 'components/CommonStyles';
import SelectChoice from './SelectChoice';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const fakeListOption = [
  { value: 1, label: 'Lựa chọn 1' },
  { value: 2, label: 'Lựa chọn 2' },
];

const Recognition = () => {
  //! State
  const editorRef = useRef(null);
  const [content, setContent] = useState();
  const history = useHistory();
  const { t } = useTranslation();

  //! Function
  const handleGetContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
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
          <h3 className="feedback-title">{t('feedback:create')}</h3>
        </div>

        <div className="feedback-button">
          <CommonStyles.Button
            type="secondary-gray"
            innerText={t('feedback:feedback')}
            onClick={() => history.push('/cfrs/feedback')}
          />
          <CommonStyles.Button type="primary" innerText={t('feedback:comfirm')} />
        </div>

        <div className="feedback-bottom">
          <div className="feedback-select">
            <div>
              <SelectChoice
                text={t('feedback:feedback-type')}
                listOption={fakeListOption}
                label={t('feedback:option')}
                width="300px"
              />
              <SelectChoice
                text={t('feedback:responders')}
                label={t('feedback:option')}
                listOption={fakeListOption}
                width="300px"
              />
              <SelectChoice
                text={t('feedback:cycle')}
                label={t('feedback:option')}
                listOption={fakeListOption}
                width="300px"
              />
              <SelectChoice text={t('feedback:okrs')} label={t('feedback:option')} width="300px" />
              <SelectChoice
                text={t('feedback:criterion')}
                label={t('feedback:option')}
                listOption={fakeListOption}
                width="300px"
              />
            </div>
            <div className="feedback-tip">
              <p>{t('feedback:tip3')}</p>
            </div>
          </div>

          <div className="feedback-editor">
            <p className="feedback-text">{t('feedback:content')}</p>
            <div style={{ flex: 1 }}>
              <CommonStyles.TextEditor editorRef={editorRef} />
            </div>
          </div>

          <div className="feedback-editor-btn">
            <p className="feedback-text"></p>
            <CommonStyles.Button
              type="secondary-gray"
              borderRadius="round"
              innerText={t('feedback:cancel')}
              onClick={handleClearContent}
              style={{ marginRight: '20px' }}
            />
            <CommonStyles.Button
              type="primary"
              borderRadius="round"
              innerText={t('feedback:save')}
              onClick={handleGetContent}
            />
          </div>

          {/* <div>
            Content of tinymce : <span dangerouslySetInnerHTML={{ __html: content }} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Recognition;
