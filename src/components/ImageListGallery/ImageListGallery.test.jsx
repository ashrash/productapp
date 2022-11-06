import { shallow } from 'enzyme';
import React from 'react';
import { TestHooks } from './ImageListGallery';

describe('<ImageListGallery />', () => {
  const imageData = [{
    img: 'https://farm4.staticflickr.com/3277/5812344633_af53e53bf1.jpg?w=164&h=164&fit=crop&auto=format&dpr=2',
    title: 'image',
  }];
  it('shows ImageListGallery', () => {
    const wrapper = shallow(
      <TestHooks.ImageListGallery imageData={imageData} />,
    );
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
