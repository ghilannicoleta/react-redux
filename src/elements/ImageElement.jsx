import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ImageElement = (props) => {
  const { imgUrl, alt, className, iconName } = props;
  return imgUrl ? (
    <img src={imgUrl} alt={alt} className={className} />
  ) : (
    <FontAwesomeIcon icon={iconName} className={className} {...props} />
  );
};

export default ImageElement;
