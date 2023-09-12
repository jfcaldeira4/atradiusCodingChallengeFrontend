import { memo } from 'react';
import { Result } from '../interface';
import { Card } from './';

interface Props {
    data: Result[];
}

export const LayoutCards = memo(({ data }: Props) => {
    return (
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
                    .map(User => <Card {...User} key={User.id} />)}
        </div>
    );
});
