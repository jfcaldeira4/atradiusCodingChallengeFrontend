import React, { FC } from 'react';
import { ErrorMessage, Loading, LayoutCards } from '../../components';
import './User.css';
import { useFetch } from '../../hook/useFetch';

interface UserProps {}

const User: FC<UserProps> = () => {
    const { data, loading, error } = useFetch();

    const showData = () => {
        if (loading) return <Loading />;
        if (error) return <ErrorMessage msg={error} />;
        return <LayoutCards data={data} />;
    };

    return <>{showData()}</>;
};
export default User;
