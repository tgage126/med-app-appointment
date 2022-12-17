import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

const GetPatient = () => {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }


  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`http://localhost:3001/patient/name/${inputValue}`);
   
  };
  console.log(loadOptions);
  return (
    <div className="App">
      
      <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.name_last}
        getOptionValue={e => e.patient_id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
    </div>
  );
}

export default GetPatient;

