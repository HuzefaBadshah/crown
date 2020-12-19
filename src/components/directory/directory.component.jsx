import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { DirectorySectionsSelector } from '../../redux/reducers/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({sections}) => {
 
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections: DirectorySectionsSelector
})

export default connect(mapStateToProps)(Directory);