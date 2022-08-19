import React from 'react';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/icons';
import Cfrstop from './components/CfrsTop';
import CfrsItemTop from './components/CfrsItemTop';
import CfrsAchievement from './components/CfrsAchievement';
import CfrsFeedback from './components/CfrsFeedback';

import { useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CFRs = () => {
  //! State
  const history = useHistory();
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  console.log('i18n', i18n.changeLanguage());

  //!Function
  const handleClick = () => {
    console.log('click');
    history.push('/cfrs/feedback');
  };

  //! Render
  return (
    <div>
      <div className="cfrs-container">
        <button
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        >
          Change en
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage('vi');
          }}
        >
          Change vi
        </button>

        <Cfrstop title={t('cfrs:feedback')} star="345" label={t('cfrs:create-feedback')} handleClick={handleClick} />

        <div className="cfrs-bottom">
          {/* Left */}
          <div className="cfrs-bottom-item">
            <CfrsItemTop title={t('cfrs:you-receive')} label={t('cfrs:charts')} />

            <div className="cfrs-item-achievement">
              <CfrsAchievement title={t('cfrs:total-stars')} star="489">
                <CommonIcons.Star size={25} />
              </CfrsAchievement>
              <CfrsAchievement title={t('cfrs:month-ranking')} star="2">
                <CommonIcons.Champion sx={{ fontSize: 25 }} />
              </CfrsAchievement>
              <CfrsAchievement title={t('cfrs:rating')} star="3">
                <CommonIcons.Alytics size={25} />
              </CfrsAchievement>
            </div>

            <div className="cfrs-item-tabel">
              <CfrsFeedback
                name="Phạm Ngọc Anh"
                date="25/08/2021"
                hours="15:30"
                feedback="Tôi hài lòng với công việc của bạn"
                vote="4"
              />
              <CfrsFeedback
                name="Dương Thuỳ Linh"
                date="26/08/2021"
                hours="14:30"
                feedback="Bạn làm việc chưa thực sự tốt"
                vote="0"
              />
              <CfrsFeedback
                name="Lê Thị Thuỳ"
                date="26/08/2021"
                hours="17:30"
                feedback="Bạn cần cố gắng hơn nữa"
                vote="2"
              />
            </div>

            <div className="cfrs-item-pagination">
              <CommonStyles.Pagination />
            </div>
          </div>

          {/* Right */}
          <div className="cfrs-bottom-item">
            <CfrsItemTop title={t('cfrs:you-give')} label={t('cfrs:charts')} />

            <div className="cfrs-item-achievement">
              <CfrsAchievement title={t('cfrs:total-stars')} star="228">
                <CommonIcons.Star size={25} />
              </CfrsAchievement>
              <CfrsAchievement title={t('cfrs:month-ranking')} star="5">
                <CommonIcons.Champion sx={{ fontSize: 25 }} />
              </CfrsAchievement>
              <CfrsAchievement title={t('cfrs:rating')} star="8">
                <CommonIcons.Alytics size={25} />
              </CfrsAchievement>
            </div>

            <div className="cfrs-item-tabel">
              <CfrsFeedback
                name="Phạm Ngọc Anh"
                date="25/08/2021"
                hours="15:30"
                feedback="Bạn làm việc tốt "
                vote="-4"
              />
              <CfrsFeedback
                name="Dương Thuỳ Linh"
                date="26/08/2021"
                hours="14:30"
                feedback="Cảm ơn đã hỗ trợ tôi"
                vote="-5"
              />
              <CfrsFeedback
                name="Lê Thị Thuỳ"
                date="26/08/2021"
                hours="17:30"
                feedback="Bạn cần cố gắng hơn nữa"
                vote="0"
              />
            </div>

            <div className="cfrs-item-pagination">
              <CommonStyles.Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFRs;
