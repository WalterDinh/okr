import moment from 'moment';
import { useTranslation } from 'react-i18next';

const QUARTER_FORMAT = 'YYYY-MM-DD';

export const dateToQuarter = () => {
  const { t } = useTranslation();
  const quarterOptions = [];
  for (let i = 1; i < 5; i++) {
    quarterOptions.push({
      label: t('common:quarter', { key: i }),
      value: `${moment().quarter(i).startOf('quarter').format(QUARTER_FORMAT).replace('2022', '2021')},${moment()
        .quarter(i)
        .endOf('quarter')
        .format(QUARTER_FORMAT)
        .replace('2022', '2021')}`,
    });
  }
  return quarterOptions;
};
