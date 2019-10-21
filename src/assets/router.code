import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function LocationTracker() {
  const [currLocation, setLocation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLocation(location.pathname);
  }, [location]);
  return currLocation;
}

export default LocationTracker;
