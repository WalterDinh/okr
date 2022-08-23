import { useEffect, useState } from 'react';
import companyServices from 'services/companyServices';

const useGetListCompany = (filters) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    try {
      const response = await companyServices.getCompany();
      setData(response?.data || []);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await companyServices.getCompany();
        const listCompany = [];
        for (const company of response?.data) {
          listCompany.push({ value: company.id, label: company.company_name });
        }
        setData(listCompany);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, loading, error, refetch];
};

export default useGetListCompany;
