import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImageListGallery from '../../components/ImageListGallery';
import { selectors, actions } from '../../state/ducks/imageGallery/index';
import './ImageGallery.scss';

class ImageGallery extends React.PureComponent {
  componentDidMount() {
    const { getImagesFromFlicker } = this.props;
    getImagesFromFlicker();
  }

  render() {
    const { imageData } = this.props;
    return (
      <>
        <h1 className="header">Image Gallery flicker</h1>
        <ImageListGallery imageData={imageData} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getImagesFromFlicker: () => dispatch(actions.getImagesFromFlicker()),
});

const mapStateToProps = (state) => ({
  imageData: selectors.getImageData(state),
});

ImageGallery.propTypes = {
  getImagesFromFlicker: PropTypes.func.isRequired,
  imageData: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

const container = connect(mapStateToProps, mapDispatchToProps)(ImageGallery);

export default container;
