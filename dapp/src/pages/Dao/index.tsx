import * as React from 'react';
import Components from './Components';
import { enableVote } from 'config';
import TopInfo from 'components/TopInfo';

const Dashboard = () => {
  return (
    <div className='container py-4'>
      <div className='row'>
        <div className='col-12 col-md-10 mx-auto'>
          <div className='card shadow-sm rounded border-0'>
            <div className='card-body p-1'>
              <div className='card rounded border-0 bg-primary'>
                <div className='card-body text-center p-4'>
                  <TopInfo />
                </div>
              </div>
              {!!enableVote && (
                <div>
                  <Components />
                </div>
              )}
              {!enableVote && (
                <div>
                  <hr />
                  <p>DAO is not currently available !</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
