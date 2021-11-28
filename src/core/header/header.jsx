/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './header.scss';
import { designations, skills } from '../../utils/profile_data';
import { searchByDesignation, getJobList } from '../../redux/actions/job_portal-actions';

const Header = () => {
  const [searchText, updateText] = useState('');
  const [result, updateResults] = useState([]);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      const desigRes = designations.filter((data) =>
        data.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()),
      );
      const skillRes = skills.filter((data) =>
        data.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()),
      );
      updateResults([...desigRes, ...skillRes]);
    } else {
      dispatch(getJobList());
      updateResults([]);
    }

    updateText(e.target.value);
  };

  const handleOnSelectSugg = (value) => {
    updateText(value);
    updateResults([]);
    dispatch(searchByDesignation(value));
  };

  const handleOnClickClear = () => {
    updateText('');
    dispatch(getJobList());
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="header">
          <div className="logo">
            <p>Freshworks</p>
            <p>Studio</p>
          </div>
          <div className="search-bar">
            <input
              className={result.length > 0 ? 'input-border' : ''}
              type="text"
              name="search"
              value={searchText}
              onChange={(e) => handleOnChange(e)}
              placeholder="Search jobs by Skills, Designations"
            />
            <span className="search-icon">
              {searchText.length > 0 ? (
                <div onClick={() => handleOnClickClear()}>
                  <i className="fa fa-times-circle" aria-hidden="true" />
                </div>
              ) : (
                <i className="fa fa-search" aria-hidden="true" />
              )}
            </span>
            {result.length > 0 && (
              <div className="suggetions">
                <ul>
                  {result.map((suggestion) => (
                    <li key={suggestion} onClick={() => handleOnSelectSugg(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="logout">
            <i className="fa fa-sign-out" aria-hidden="true" />
          </div>
          <div className="hamburger-menu">
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
