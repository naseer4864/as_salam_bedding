import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

function LoadingRoute({ component: Component, ...rest }) {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isloading ?  <div className='isloading'>
        <img src={isloading} alt="load"  style={{height:"70px"}}/>
      </div>
         : <Component {...props} />
      }
    />
  );
}

export default LoadingRoute;
     