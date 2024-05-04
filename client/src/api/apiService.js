// apiService.js

const API_KEY = 'YPY91BwWPsakQJtdzcgoPhKFq1tfdPU9xCB6hAOX'; // Your NASA API key

export const fetchApodData = async (date) => {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

  // Function to delay execution for a specified time
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  try {
    // Implement rate limiting - wait for a certain time before making each request
    await delay(10); // Adjust the delay time based on the rate limit
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



export const fetchApodDataRange = async (startDate, endDate) => {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



export const fetchRandomApodData = async (count) => {
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fetchEarthImagery = async (lon, lat, date, dim) => {
  const apiUrl = `https://api.nasa.gov/planetary/earth/imagery/api_key=${API_KEY}&lon=${lon}&lat=${lat}&date=${date}&dim=${dim}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fetchRoverPhotosBySol = async (rover, sol, camera, page) => {
  let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${API_KEY}&page=${page}`;
  if (camera) {
    apiUrl += `&camera=${camera}`;
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchRoverPhotosByEarthDate = async (rover, earthDate, camera,page) => {
  let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&api_key=${API_KEY}&page=${page}`;
  if (camera) {
    apiUrl += `&camera=${camera}`;
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const fetchRoverManifest = async (rover) => {
  let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${API_KEY}`
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch manifest');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching manifest:', error);
    throw error;
  }
};
