import { useEffect, useState } from 'react';
import checkinServices from 'services/checkinServices';
import { BASE_URL, CHECK_IN_URL } from 'constants/api';
import CheckinModel from 'models/checkin.model';
import moment from 'moment';
import { isEmpty } from 'lodash';

const useGetcheckinDetail = (id) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await checkinServices.getById(id);
        // const listResult = new CheckinModel().parseCurrentListCheckinDetail(response);
        const CHECKIN_DATA = response.data;
        const Checkin_history = CHECKIN_DATA.ok_checkin;
        const Checkin_id = CHECKIN_DATA.id;
        const Checkin_user = CHECKIN_DATA.user;
        const Checkin_confident = CHECKIN_DATA?.confident;
        const Checkin_isDone = CHECKIN_DATA?.is_done;
        const object_name = CHECKIN_DATA?.object_name;
        const checkin_date = CHECKIN_DATA?.ok_checkin[0]?.checkin_date
          ? moment(CHECKIN_DATA?.ok_checkin[0]?.checkin_date).format('DD/MM/YYYY')
          : 'Vui lòng check-in';
        const percent_completed = (CHECKIN_DATA?.percent_completed * 100).toFixed(2) + '%';
        const matchedIndex = CHECKIN_DATA?.ok_checkin[0];
        const newData = (CHECKIN_DATA?.okr_result).map((elm) => {
          const foundData = matchedIndex?.checkin_result?.find((el) => el.result === elm.id);
          if (!isEmpty(foundData) && foundData.is_done) {
            return {
              ...elm,
              overdue_note: foundData.overdue_note,
              process_note: foundData.process_note,
              solution_note: foundData.solution_note,
              trouble_note: foundData.trouble_note,
              total_done: foundData.total_done,
              is_done: foundData.is_done,
              confident: +foundData.confident || 'undefined',
              result: elm.id,
            };
          }
          return {
            ...elm,
            overdue_note: '',
            process_note: '',
            solution_note: '',
            trouble_note: '',
            total_done: '',
            is_done: false,
            result: elm.id,
            confident: +elm.confident || 'undefined',
          };
        });

        const detail = {
          object_name: object_name,
          checkin_date: checkin_date,
          percent_completed: percent_completed,
          okr_list: newData,
          is_done: Checkin_isDone,
          confident: +Checkin_confident,
          id: Checkin_id,
          user: Checkin_user,
          history: Checkin_history,
        };
        // setData(listResult);
        setData(detail);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    id && fetchData();
  }, [id]);
  return [data, loading, error];
};

export default useGetcheckinDetail;
