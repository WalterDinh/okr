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
  const { t } = useTranslation();

  //!Function
  const handleClick = () => {
    console.log('click');
    history.push('/cfrs/feedback');
  };

  //! Render
  return (
    <div>
      <div className="cfrs-container">
        <Cfrstop title="Phản hồi và ghi nhận" star="345" label="Tạo phản hồi và ghi nhận" handleClick={handleClick} />

        <div className="cfrs-bottom">
          {/* Left */}
          <div className="cfrs-bottom-item">
            <CfrsItemTop title="Bạn nhận được" label="Bảng xếp hạng" />

            <div className="cfrs-item-achievement">
              <CfrsAchievement title="Tổng sao nhận được" star="489">
                <CommonIcons.Star size={25} />
              </CfrsAchievement>
              <CfrsAchievement title="Xếp hạng tháng" star="2">
                <CommonIcons.Champion sx={{ fontSize: 25 }} />
              </CfrsAchievement>
              <CfrsAchievement title="Xếp hạng chu kỳ" star="3">
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
            <CfrsItemTop title="Bạn cho đi" label="Bảng xếp hạng" />

            <div className="cfrs-item-achievement">
              <CfrsAchievement title="Tổng sao đã tặng" star="228">
                <CommonIcons.Star size={25} />
              </CfrsAchievement>
              <CfrsAchievement title="Xếp hạng tháng" star="5">
                <CommonIcons.Champion sx={{ fontSize: 25 }} />
              </CfrsAchievement>
              <CfrsAchievement title="Xếp hạng chu kỳ" star="8">
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
