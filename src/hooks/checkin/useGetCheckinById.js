import { useEffect, useState } from 'react';
import checkinServices from 'services/checkinServices';
import { BASE_URL } from 'constants/api';
import CheckinModel from 'models/checkin.model';

const useGetCheckinById = (id) => {
  const [data, setData] = useState([]);
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
        const response = await checkinServices.getById(id);
        const listResult = new CheckinModel().parseListCheckinForResult(response);
        setData(listResult);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    id && fetchData();
  }, [id]);
  return [data, loading, error, refetch];
};

export default useGetCheckinById;
