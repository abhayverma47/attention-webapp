import React from 'react';
import Cards from '../cards/cards';
import Searchbox from '../searchbox/searchbox';


const Dashboard = ({ robots, searchchange }) => {
    return (
        < div >
            <Searchbox searchchange={searchchange} />
            <div className='flex justify-center flex-wrap fl'>
                {robots.map((units, i) => {
                    return (
                        <Cards key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
                    );

                })}
            </div>
        </div >
    );
}

export default Dashboard;