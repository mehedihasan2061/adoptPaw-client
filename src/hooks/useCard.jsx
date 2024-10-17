import React from 'react';
import useAxiosCommon from './useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

const useCard = () => {
  const axiosCommon = useAxiosCommon();

  const { data: pets = [],isLoading } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/pets");
      
      return data;
    },
  });
 return [pets,isLoading];
};

export default useCard; 
