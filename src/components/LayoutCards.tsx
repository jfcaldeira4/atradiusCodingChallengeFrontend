import { useState, memo } from 'react';
import { Result } from '../interface';
import { Card } from './';

interface Props {
    data: Result[];
}

function useInput({ type }) {
    const [value, setValue] = useState('');
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
}

export const LayoutCards = memo(({ data }: Props) => {
    console.log(data);
    const filter = 'com';
    const [email, emailInput] = useInput({ type: 'text' });

    return (
        <div>
            <p className="font">Search by email! {emailInput} </p>
            <div className="container-cards">
                {data.length > 0 &&
                    data
                        .sort(function(a, b) {
                            if (a['first name'] < b['first name']) {
                                return -1;
                            }
                            if (a['first name'] > b['first name']) {
                                return 1;
                            }
                            return 0;
                        })
                        .filter(function(user) {
                            return user.email.toLowerCase().includes(email.toLowerCase());
                        })
                        .map(user => <Card {...user} key={user.id} />)}
            </div>
        </div>
    );
});
