import { useEffect, useState } from 'react';
import checkinServices from 'services/checkinServices';
import CheckinModel from 'models/checkin.model';

const useGetListCheckin = ({ page, search, department, created_time__range }) => {
  const page_size = 5;
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    try {
      const response = await checkinServices.getCheckin();
      setData(response?.data || []);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await checkinServices.getCheckin({ page, page_size, search, department, created_time__range });
        const listCheckin = new CheckinModel().parseListCheckin(response);
        const res = { listCheckin, total: response.data.counte };
        setData(res);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, search, department, created_time__range]);
  return [data, loading, error, refetch];
};

export default useGetListCheckin;
