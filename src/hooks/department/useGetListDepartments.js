import { useEffect, useState } from 'react';
import departmentServices from 'services/departmentServices';

const useGetListDepartment = (filters) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    try {
      const response = await departmentServices.getCompany();
      setData(response?.data || []);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await departmentServices.getDepartment();
        const listDepartment = [];
        for (const department of response?.data) {
          listDepartment.push({ value: department.id, label: department.department_name });
        }
        setData(listDepartment);
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

export default useGetListDepartment;
