import React, { useState } from 'react';
import { SAMPLE_DESCRIPTION_INSTAMART_SECTION } from '../constants';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-2 p-2 border border-black">
      <h3 className="text-md font-bold">{title}</h3>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState('about');

  return (
    <div>
      <h1 className="m-2 p-2 font-bold text-xl">Instamart</h1>
      <Section
        title="About Instamart"
        description={SAMPLE_DESCRIPTION_INSTAMART_SECTION}
        isVisible={visibleSection === 'about'}
        setIsVisible={(bShow) =>
          bShow ? setVisibleSection('about') : setVisibleSection('')
        }
      />
      <Section
        title="Product"
        description={SAMPLE_DESCRIPTION_INSTAMART_SECTION}
        isVisible={visibleSection === 'product'}
        setIsVisible={(bShow) =>
          bShow ? setVisibleSection('product') : setVisibleSection('')
        }
      />
      <Section
        title="Careers"
        description={SAMPLE_DESCRIPTION_INSTAMART_SECTION}
        isVisible={visibleSection === 'careers'}
        setIsVisible={(bShow) =>
          bShow ? setVisibleSection('careers') : setVisibleSection('')
        }
      />
    </div>
  );
};

export default Instamart;
